# Filters

One of the core technolgies we take advantages of is [add_filter](https://developer.wordpress.org/reference/functions/add_filter/). From the docs:

> A plugin can modify data by binding a callback to a filter hook. When the filter is later applied, each bound callback is run in order of priority, and given the opportunity to modify a value by returning a new value.

Some examples of how that is used:

## Default Post Content

When a new post is created, it is pre-populated with the article summary:
![Default Post Content](./assets/default-post.png)

```php
// Priority = 10
// Number of args = 2
add_filter( 'default_content', 'post_template_summary', 10, 2 );

function post_template_summary( $content, $post ) {
	// We only want the post summary list on posts, not pages.
	if ($post->post_type === 'post') {
		// Use our custom article summary block.
		$content = '<!-- wp:iicustom/ii-article-summary {"content":"\u003cli\u003ePost Summary Line 1\u003c/li\u003e\u003cli\u003eAdd more lines here.\u003c/li\u003e"} -->
<ul class="wp-block-iicustom-ii-article-summary summary-list"><li>Post Summary Line 1</li><li>Add more lines here.</li></ul>
<!-- /wp:iicustom/ii-article-summary -->';
	}
	return $content;
}
```

## Yoast Breadcrumbs

These get modified to include the full URL, instead of just a path.

```php
add_filter('wpseo_breadcrumb_links', 'wpseo__appendbaseurl_breadcrumbs',10,1);

function wpseo__appendbaseurl_breadcrumbs( $this_crumbs ) {
	static $domain_key = 'GATSBY_SITE_DOMAIN';
	if($this_crumbs && null !== getenv($domain_key) && strlen(getenv($domain_key)) > 0){
		$domain = getenv($domain_key);
		if (substr($domain, -1) === '/') {
			$domain = substr($domain, 0, -1);
		}
		foreach($this_crumbs as $key => $crumb){

			if (isset($crumb['url'])){
				$url = parse_url($crumb['url']);
				$this_crumbs[$key]['url'] = $domain . $url['path'];
			}
	    }
	}
    return $this_crumbs;
}
```
