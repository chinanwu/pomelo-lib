# PButtons Docs

A collection of base button components made with accessibility in mind.

Click here to see a demo of these buttons in action. TODO: ADD LINK

## PButton
This is the base button component.

### Example
```html
<PButton>
    <template #content>
        Button name
    </template>
</PButton>
```
Alternatively, you can use the hyphenated component name.
```html
<p-button></p-button>
```

### Props

| Prop | Type |  Default | Description | Validation |
| ---- | ---- | -------- | ----------- | ---------- |
| id | String | null | Sets the inner <button>'s id. | None |
| ariaLabel | String | null | Sets the aria-label on the button | None |
| ariaLabelledBy | String | null | Sets the aria-labelledby on the button | None |
| role | String | null | Sets the role on the button | Must be one of "tab" or "link" |
| ariaHasPopup | String | null | Sets the aria-haspopup on the button | Must be one of "menu", "listbox", "tree", "grid", "dialog", or "true" |
| ariaRoledescription | String | null | Sets the aria-description on the button | Cannot be just whitespace characters |
| disabled | Boolean | null | Sets the button as disabled or not | None |

### Available Styling

These will all be prefixed with `PButton--`, following BEM. For example, `PButton--solid-box-shadow`. 

| Classname | Description |
| ---- | ---- |
| solid-box-shadow | A solid box-shadow that activates on hover and focus, and shrinks a little when active. |
| elevated | Gives the button an elevated look. |
| stealth | A flat button. |


### Best practices

In general, only include aria fields when they are needed. For the most part here I'm going to link to readings that can best describe the best practices. 

*aria-label*: Consult this page: Mozilla [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) document.

*aria-labelledby*: Consult this page: Mozilla [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) document.

*role*: Consult these pages: Mozilla's [link role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role) document), and Mozilla's [roles](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles) document. 

*aria-haspopup*: Consult this page: DigitalA11y's [aria-haspop](https://www.digitala11y.com/aria-haspopup-properties/) page

*aria-roledescription*: Consult this page: [W3 aria-roledescription](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription)

### Related components

- See the rest of the PButtons! 

## PLButton
This component is a wrapper around the base PButton, except with larger font.

### Example
```html
<PLButton>
    <template #content>
        Button name
    </template>
</PLButton>
```
Alternatively, you can use the hyphenated component name.
```html
<p-l-button></p-l-button>
```

## PMButton
This component is a wrapper around the base PButton, except with slightly larger font.

### Example
```html
<PMButton>
    <template #content>
        Button name
    </template>
</PMButton>
```
Alternatively, you can use the hyphenated component name.
```html
<p-m-button></p-m-button>
```

## PSButton
This component is a wrapper around the base PButton. As of the making of this documentation, it is the same as PButton. This may change in the future.

### Example
```html
<PSButton>
    <template #content>
        Button name
    </template>
</PSButton>
```
Alternatively, you can use the hyphenated component name.
```html
<p-s-button></p-s-button>
```

## See an issue?
- Please create an issue [here](https://github.com/chinanwu/pomelo-lib/issues). Indicate the component and the issue, thank you! 
- Alternatively, if you fix the issues, you can create a [pull request](https://github.com/chinanwu/pomelo-lib/pulls)! 

## Acknowledgements
- PButton--elevated's box-shadows were grabbed from [Box-Shadow's Materialize Presets](https://boxshadows.com/presets)
