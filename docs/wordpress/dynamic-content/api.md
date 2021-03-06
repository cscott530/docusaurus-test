---
sidebar_position: 3
---

# API

The basic usage is to add a div with `class="ii-dynamic-content"`:

```html
<div
  class="”ii-dynamic-content”"
  data-count="”5”"
  data-include-images
  data-type="”chart”"
/>
```

You **must** include `class="ii-dynamic-content"` for the public site to properly find your widget.

Each attribute name starts with `data-`. This tells the browser that these are custom attributes and do not need to be validated.

:::tip
Unless otherwise stated, none of the values are case sensitive.
:::

## Full API

| Property              | Default Value | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Example                                          |
| --------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| `data-type`           | (unset)       | **This is a required field**. The type of data to display in the widget. For v1.0, there are three possible values: `asset`, `forecast`, `chart`.                                                                                                                                                                                                                                                                                                                  | `data-type="asset"`                              |
| `data-primary-topic`  | (unset)       | **This is a required field**. The topic to check for an item. Note that because items may have several topics, this is considered a match if any of the item's topics match this. As a reminder, casing doesn't matter.                                                                                                                                                                                                                                            | `data-primary-topic="ECommerce"`                 |
| `data-asset-type`     | (unset)       | When `data-type` is set to `"asset"`, this will allow further filtering of the asset type. Possible values are: `article`, `audio`, `interview`, `report`, `video`. When unset will include all asset types.                                                                                                                                                                                                                                                       | `data-asset-type="video"`                        |
| `data-count`          | `3`           | The number of assets to show in the UI. Typically we have used 3 for image-based asset types, and 10 for text-only assets. If there are not enough assets to match the criteria, only the number available will be shown.                                                                                                                                                                                                                                          | `data-count="3"`                                 |
| `data-include-images` | `False`       | Whether or not to include images from the assets when displaying in the UI. _Note this is a boolean attribute. Include it for true and exclude for false. No value is required._                                                                                                                                                                                                                                                                                   | `data-include-images`                            |
| `data-access-level`   | `public`      | The access-level of the asset. There are three possible values: `public`, `locked`, `nonclient`. See [below](#access-levels) for further explanation. Note that the display of the assets within the public site will not vary between the three access levels. The difference only applies when a user clicks the link and goes to the asset’s page.                                                                                                              | `data-access-level="public"`                     |
| `data-dark-bg`        | `False`       | Whether or not the dynamic content will be displayed on a dark background. The background won’t actually be set in the dynamic content widget (it’s done in WordPress), but foreground text color will be altered. See the Ecommerce & Retail Statics & Charts section [here](https://www.insiderintelligence.com/coverage/ecommerce-retail/) for an example. _Note this is a boolean attribute. Include it for true and exclude for false. No value is required._ | `data-dark-bg`                                   |
| `data-geography`      | (unset)       | List of geographies to include. Separated by commas.                                                                                                                                                                                                                                                                                                                                                                                                               | `data-geography="united states, canada, mexico"` |
| `data-author`         | (unset)       | List of authors to include. Use the author’s slug. Separated by commas. ** This is unsupported currently **                                                                                                                                                                                                                                                                                                                                                        | `data-author="barbara-peng, chris-scott"`        |

## Access Level Explanation {#access-levels}

| Level       | Description                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `public`    | This is an asset that is fully, publicly available to both clients and non-clients                                                             |
| `locked`    | Locked assets are accessible to both clients and non-clients, but non-clients will only see part of the asset, with a paywall partway through. |
| `nonclient` | Non-client assets are available to non-clients, but not available to clients.                                                                  |

:::note
`client`-only assets are not an option at this point. The public site is implicitly for non-client users. It would make for a bad user-experience to have assets that require being logged in to view them.
:::
