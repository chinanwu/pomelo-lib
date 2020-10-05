# PIconSlideLabel

A component that displays an icon with a label that slides out upon hovering over the icon.

[Click here to see a demo of these buttons in action](https://chinanwu.github.io/pomelo-lib/vue/index.html#piconslidelabel)

## Example
```html
<PIconSlideLabel 
    :iconUrl="require('path/relative/to/file/using/this/component')" 
    label="Label" 
    alt="Image description"
>
</PIconSlideLabel>
```
Alternatively, you can use the hyphenated component name.
```html
<p-icon-slide-label></p-icon-slide-label>
```

## Props

| Prop | Type |  Default | Required | Description | Validation |
| ---- | ---- | -------- | -------- | ----------- | ---------- |
| iconUrl | String | N/A | true | The path to the icon img, relative to the component using it. Must be wrapped with `require()` to work. | None |
| alt | String | N/A | true | Description of the icon. | None |
| label | String | N/A | true | The label that slides out upon hovering over the icon | None |
| link | String | null | false | URL to go to when click on icon | None |
| linkTitle | String | null | false | A title for the link | None |
| iconClass | String | null | false | Style to apply to icon | None |

## Best practices

- TBA 

## See an issue?
- Please create an issue [here](https://github.com/chinanwu/pomelo-lib/issues). Indicate the component and the issue, thank you! 
- Alternatively, if you fix the issues, you can create a [pull request](https://github.com/chinanwu/pomelo-lib/pulls)! 
