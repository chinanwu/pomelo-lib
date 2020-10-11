# PAccordion

A base accordion component PAccordion.

[Click here to see a demo of these buttons in action](https://chinanwu.github.io/pomelo-lib/vue/index.html#paccordion)

## Example
```html
<PAccordion>
    <template #content>
        I am the accordion content!
    </template>
</PAccordion>
```
Alternatively, you can use the hyphenated component name.
```html
<p-accordion></p-accordion>
```

## Slots
- Takes in one (1) slot named content

## Props

| Prop | Type |  Default | Description | Validation |
| ---- | ---- | -------- | ----------- | ---------- |
| label | String | Null | The string that will be displayed on the Accordion header | None |
| pClass | String | Null | Adds an additional class onto the accordion | None |
| expand | String | Null | Sets if the accordion is opened by default | None |

## Best practices

- TBA?

## Related components

- PButton: The accordion's header utilizes PButton