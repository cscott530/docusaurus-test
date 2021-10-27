"use strict";(self.webpackChunkdocs_test=self.webpackChunkdocs_test||[]).push([[9482],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},849:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},l="Filters",p={unversionedId:"wordpress/for-devs/filters",id:"wordpress/for-devs/filters",isDocsHomePage:!1,title:"Filters",description:"One of the core technolgies we take advantages of is addfilter. From the docs:",source:"@site/docs/wordpress/for-devs/filters.md",sourceDirName:"wordpress/for-devs",slug:"/wordpress/for-devs/filters",permalink:"/docusaurus-test/docs/wordpress/for-devs/filters",editUrl:"https://github.com/cscott530/docusaurus-test/blob/main/docs/wordpress/for-devs/filters.md",tags:[],version:"current",lastUpdatedBy:"Chris Scott",lastUpdatedAt:1635346940,formattedLastUpdatedAt:"10/27/2021",frontMatter:{},sidebar:"wordpressSidebar",previous:{title:"Redirecting to Gatsby",permalink:"/docusaurus-test/docs/wordpress/for-devs/Redirecting"},next:{title:"GraphQL",permalink:"/docusaurus-test/docs/wordpress/for-devs/modifying-graphql"}},u=[{value:"Default Post Content",id:"default-post-content",children:[],level:2},{value:"Yoast Breadcrumbs",id:"yoast-breadcrumbs",children:[],level:2},{value:"Permalink",id:"permalink",children:[],level:2}],c={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"filters"},"Filters"),(0,o.kt)("p",null,"One of the core technolgies we take advantages of is ",(0,o.kt)("a",{parentName:"p",href:"https://developer.wordpress.org/reference/functions/add_filter/"},"add_filter"),". From the docs:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A plugin can modify data by binding a callback to a filter hook. When the filter is later applied, each bound callback is run in order of priority, and given the opportunity to modify a value by returning a new value.")),(0,o.kt)("p",null,"Some examples of how that is used:"),(0,o.kt)("h2",{id:"default-post-content"},"Default Post Content"),(0,o.kt)("p",null,"When a new post is created, it is pre-populated with the article summary:\n",(0,o.kt)("img",{alt:"Default Post Content",src:n(776).Z})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"// Priority = 10\n// Number of args = 2\nadd_filter( 'default_content', 'post_template_summary', 10, 2 );\n\nfunction post_template_summary( $content, $post ) {\n    // We only want the post summary list on posts, not pages.\n    if ($post->post_type === 'post') {\n        // Use our custom article summary block.\n        $content = '\x3c!-- wp:iicustom/ii-article-summary {\"content\":\"\\u003cli\\u003ePost Summary Line 1\\u003c/li\\u003e\\u003cli\\u003eAdd more lines here.\\u003c/li\\u003e\"} --\x3e\n<ul class=\"wp-block-iicustom-ii-article-summary summary-list\"><li>Post Summary Line 1</li><li>Add more lines here.</li></ul>\n\x3c!-- /wp:iicustom/ii-article-summary --\x3e';\n    }\n    return $content;\n}\n")),(0,o.kt)("h2",{id:"yoast-breadcrumbs"},"Yoast Breadcrumbs"),(0,o.kt)("p",null,"These get modified to include the full URL, instead of just a path."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"add_filter('wpseo_breadcrumb_links', 'wpseo__appendbaseurl_breadcrumbs',10,1);\n\nfunction wpseo__appendbaseurl_breadcrumbs( $this_crumbs ) {\n    static $domain_key = 'GATSBY_SITE_DOMAIN';\n    if($this_crumbs && null !== getenv($domain_key) && strlen(getenv($domain_key)) > 0){\n        $domain = getenv($domain_key);\n        if (substr($domain, -1) === '/') {\n            $domain = substr($domain, 0, -1);\n        }\n        foreach($this_crumbs as $key => $crumb){\n\n            if (isset($crumb['url'])){\n                $url = parse_url($crumb['url']);\n                $this_crumbs[$key]['url'] = $domain . $url['path'];\n            }\n        }\n    }\n    return $this_crumbs;\n}\n")),(0,o.kt)("h2",{id:"permalink"},"Permalink"),(0,o.kt)("p",null,"The last major thing we use filters for is re-writing the base permalink value. Blog2Social makes heavy use of ",(0,o.kt)("inlineCode",{parentName:"p"},"get_permalink")," as a way to get what URL it should be sharing to social platforms. Rather than sharing a WP link, we need to share the link to the public site."),(0,o.kt)("p",null,'Whenever a "link" function is called for ',(0,o.kt)("inlineCode",{parentName:"p"},"post")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," entries (realistically the only things we'll share to social media), we can modify the value in use (from ",(0,o.kt)("inlineCode",{parentName:"p"},"extensions/b2s-getpermalink.php"),"):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"foreach( [ 'post', 'page' ] as $type )\n{\n    add_filter( $type . '_link', function ( $url, $post_id, $sample ) use ( $type )\n    {\n        return apply_filters( 'wpse_link', $url, $post_id, $sample, $type );\n    }, 9999, 3 );\n}\n\nadd_filter( 'wpse_link', function($value, $post_id, $sample, $type)\n{\n    $domain = get_domain();\n    $home = get_option('home');\n    return str_replace($home, $domain, $value);\n}, 10, 4 );\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a very heavy-handed approach. It is applied to ",(0,o.kt)("em",{parentName:"p"},"every call")," for a post or page's permalink value, including GraphQL. To handle that, we need to use ",(0,o.kt)("a",{parentName:"p",href:"/docusaurus-test/docs/wordpress/for-devs/modifying-graphql"},"GraphQL Resolvers")," to fix the GraphQL value before it is served."),(0,o.kt)("p",{parentName:"div"},"The pros out-weigh the cons in the sense that it allows us to upgrade Blog2Social as often as we like without having to modify its source code as we had done previously."))))}d.isMDXComponent=!0},776:function(e,t,n){t.Z=n.p+"assets/images/default-post-f1ba59b692067d48960a7cdb1363b3bc.png"}}]);