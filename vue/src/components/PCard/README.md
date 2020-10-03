# PCard

A flippable base card component.

## Example
```html
<PCard>
    <template #front>
        I am the front of the card!
    </template>
    <template #back>
        And I, the back!
    </template>
</PCard>
```
Alternatively, you can use the hyphenated component name.
```html
<p-card></p-card>
```

## Props

| Prop | Type |  Default | Description | Validation |
| ---- | ---- | -------- | ----------- | ---------- |
| id | String | Null | Sets the id of the card container div | None |
| flipped | String | Null | Sets the default flipped state of the card | None |

