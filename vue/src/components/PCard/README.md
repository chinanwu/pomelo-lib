# PCard

A flippable base card component.

[Click here to see a demo of these buttons in action](https://chinanwu.github.io/pomelo-lib/vue/index.html#pcard)

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

## Slots
- Takes in two slots.
- One slot named "front" that will hold all the content for the front of the card.
- One slot named "back" that will hold all the content for the back of the card.

## Props

| Prop | Type |  Default | Description | Validation |
| ---- | ---- | -------- | ----------- | ---------- |
| id | String | Null | Sets the id of the card container div | None |
| flipped | Boolean | false | Sets the default flipped state of the card | None |
| frontClass | String | Null | Adds a custom class to front of card | None |
| backClass | String | Null | Adds a custom class to back of card | None |
