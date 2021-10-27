# GraphQL

The WordPress GraphQL plugin supports many hooks/filters to be able to modify data.

See [their docs](https://www.wpgraphql.com/) for an exhaustive list.

### Resetting Permalink

As noted in the [filters](./filters.md) page, we modify the permalink value for posts/pages globally. This works great for Blog2Social, but causes the `uri` value served up by WPGraphQL to include the full domain (e.g. `https://development.insiderintelligence.com/insights/my-post` instead of `/insights/my-post/`). This is problematic, because when Gatsby reads that in, it attempts to create a page with _that_ as the relative path. So we need to pull it back out:

```php
add_filter( 'graphql_resolve_field', function( $result, $source, $args, $context, $info, $type_name, $field_key, $field, $field_resolver ) {
    $domain = get_domain();

    if (strlen($domain) > 0) {
        // WpGraphQL uses a similar value for 'link' and 'uri', even though we don't use 'link' in Gatsby,
        //  let's filter out the full domain from both just to be safe.
        if (in_array(strtolower($type_name), ['post', 'page'])
            && in_array(strtolower($field_key), ['uri', 'link'])) {

            return str_replace($domain, '', $result);
        }
    }

    return $result;
}, 10, 9 );
```

### Including Unpublished Authors

By default, a user only shows up in the users query when they have published a page or post. However, because additional authors is an add-on we built ourselves, the out-of-the-box logic is to only look at the primary author on a page. If a user has only appeared as a secondary author, by default, they will not be returned by WPGraphQL.

This is from `extensions/include-unpublished-authors.php`.

First we need to remove the query argument that checks whether a user has published posts:

```php
add_filter( 'graphql_connection_query_args', function( $query_args, $connection_resolver ) {
    if ( $connection_resolver instanceof \WPGraphQL\Data\Connection\UserConnectionResolver ) {
        unset( $query_args['has_published_posts'] );
    }
    return $query_args;
}, 10, 2 );
```

And second, to just blindly set all users to public:

```php
add_filter( 'graphql_object_visibility', function( $visibility, $model_name, $data, $owner, $current_user ) {
    // only apply our adjustments to the UserObject Model
    if ( 'UserObject' === $model_name ) {
        $visibility = 'public';
    }

    return $visibility;
}, 10, 5 );
```
