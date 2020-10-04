# PExpandable

A component that expand to become a larger component.

Click here to see a demo of these buttons in action. TODO: ADD LINK

## Example
```html
<PExpandable>
    <template #content>
        I am some content
    </template>
</PExpandable>
```
Alternatively, you can use the hyphenated component name.
```html
<p-expandable></p-expandable>
```

## Slots
- Takes in one (1) slot named "content"

## Props

| Prop | Type |  Default | Description | Validation |
| ---- | ---- | -------- | ----------- | ---------- |
| title | String | null | The label when minimized | None |
| description | String | null | The blurb that is presented when minimized | None |
| maxLength | Number | 100 | Maximum length of blurb allowed | Must be greater than 3 |
| expand | Boolean | false | Default expanded state of component | None |
| closedClass | String | null | Allows for inner styling of minimized component | None |

## Best practices

- When styling closedClass, always precede the component name with the deep selector (`>>>`, `/deep/`, `::v-deep`). Read more about this [here](https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors).
    - e.g. `closedClass="TestClass"`, in the styling sheet: `::v-deep .TestClass`

## Related components

- PButton is utilized as the expand and minimize buttons.

## See an issue?
- Please create an issue [here](https://github.com/chinanwu/pomelo-lib/issues). Indicate the component and the issue, thank you! 
- Alternatively, if you fix the issues, you can create a [pull request](https://github.com/chinanwu/pomelo-lib/pulls)! 

