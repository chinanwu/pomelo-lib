# PTable

A Table component

[Click here to see a demo of these buttons in action](https://chinanwu.github.io/pomelo-lib/vue/index.html#ptable)

## Example
```html
<PTable
    headers="['headerone', 'headertwo']"
    data="[{ headerone: 'something', headertwo: 2}]"
></PTable>
```
Alternatively, you can use the hyphenated component name.
```html
<p-table></p-table>
```

## Props

| Prop | Type |  Default | Required | Description | Validation |
| ---- | ---- | -------- | -------- | ----------- | ---------- |
| headers | Array | N/A | true | An array of table headers | Must be an array of string |
| data | Array | null | false | An array of table contents | Must be an array of objects |

## Best practices

- The number of headers and the number of keys in each object in data should be the same. i.e. if you have 6 headers, each object should have 6 keys.

## See an issue?
- Please create an issue [here](https://github.com/chinanwu/pomelo-lib/issues). Indicate the component and the issue, thank you! 
- Alternatively, if you fix the issues, you can create a [pull request](https://github.com/chinanwu/pomelo-lib/pulls)! 
