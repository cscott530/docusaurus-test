---
sidebar_position: 3
---

# API

The basic usage is to add a div with `class="ii-dynamic-content"`:

```html
<div class=”ii-dynamic-content” 
    data-count=”5” 
    data-include-images 
    data-asset-type=”report” />
```

You **must** include `class="ii-dynamic-content"` for the public site to properly find your widget.

Each attribute name starts with `data-`. This tells the browser that these are custom attributes and do not need to be validated.

:::tip
Unless otherwise stated, none of the values are case sensitive.
:::


## Full API

| Property | Default Value | Description | Example |
| -- | -- | -- | -- |
| `data-asset-type` | (unset) | **This is a required field**. The type of asset to display in the widget. For v1.0, there are three possible values: `report`, `forecast`, `chart`. | `data-asset-type="report"` |
| `data-primary-topic` | (unset) | **This is a required field**. The slug of the assset's primary topic. Some possible examples: `ecommerce-retail`, or `health` | `data-primary-topic="health"` |
| `data-count` | `3` | The number of assets to show in the UI. Typically we have used 3 for image-based asset types, and 10 for text-only assets. If there are not enough assets to match the criteria, only the number available will be shown. | `data-count="3"` |
| `data-include-images` | `False` | Whether or not to include images from the assets when displaying in the UI. _Note this is a boolean attribute. Include it for true and exclude for false. No value is required._ | `data-include-images` |
| `data-access-level` | `public` | The access-level of the asset. There are three possible values: `public`, `locked`, `nonclient`. See [here](#access-levels) for further explanation. Note that the display of the assets within the public site will not vary between the three access levels. The difference only applies when a user clicks the link and goes to the asset’s page. | `data-access-level="public"` |
| `data-dark-bg` | `False` | Whether or not the dynamic content will be displayed on a dark background. The background won’t actually be set in the dynamic content widget (it’s done in WordPress), but foreground text color will be altered. See the Ecommerce & Retail Statics & Charts section [here](https://www.insiderintelligence.com/coverage/ecommerce-retail/) for an example. _Note this is a boolean attribute. Include it for true and exclude for false. No value is required._ | `data-dark-bg` |
| `data-geography` | (unset) | List of geographies to include. Separated by commas. | `data-geography="america, europe, asia"` |
| `data-author` | (unset) | List of authors to include. Use the author’s slug. Separated by commas. | `data-author="barbara-peng, chris-scott"` | 


## Access Level Explanation {#access-levels}

| Level | Description |
| -- | -- |
| `public` | This is an asset that is fully, publicly available to both clients and non-clients |
| `locked` | Locked assets are accessible to both clients and non-clients, but non-clients will only see part of the asset, with a paywall partway through. |
| `nonclient` | Non-client assets are available to non-clients, but not available to clients. |

:::note
`client`-only assets are not an option at this point. The public site is implicitly for non-client users. It would make for a bad user-experience to have assets that require being logged in to view them.
:::
