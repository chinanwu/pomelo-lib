# Pomelo Lib: Vue Edition

A library of components that I used a lot. I made this for me, but it could also be for you!

## How Can I Use This?

- Run `npm i -S pomelo-lib-vue` within your project
- Go to the component you want to use a pomelo component in, and import the component you want to use!
```
import Button from 'pomelo-lib-vue'

export default {
    name: "YourComponent",
    components: {
        ...,
        Button
    }
}
```
- Then, in your template, you can use it like any other component!
```
<template>
    <some-other-stuff />
    <Button />
</template>
```

## Available Components

The component's respective documentation are in their folder. Clicking on the component will take you to the folder!

- [PCard](https://github.com/chinanwu/pomelo-lib/tree/master/vue/src/components)
- [PButton](https://github.com/chinanwu/pomelo-lib/tree/master/vue/src/components/Buttons)
- [PAccordion](https://github.com/chinanwu/pomelo-lib/tree/master/vue/src/components)

## I Found A Bug! 

- Visit [the github issues page](https://github.com/chinanwu/pomelo-lib), and describe the bug.
- Alternatively, if you fix the issue, make a [pull request](https://github.com/chinanwu/pomelo-lib/pulls)!
    - Please note that I created this with accessibility front of mind, so I ask that if you create a pull request you do the same.

## Things To Do:

(For Salmon, and others who want to help)

- Add testing coverage to README
- Add docs for components
- A better (more aesthetic) demo!
- A better lib README! See [here](https://github.com/frederikwagner/vue-component-library) for a good example

## RIUTFOHTDT (oJGGR)

(Resources I Used to Figure Out How To Do This or Just General Good Reads)

- [Create a Vue.js component library](https://itnext.io/create-a-vue-js-component-library-as-a-module-part-1-a1116e632751)
- [Vue Jest Testing Docs](https://vue-test-utils.vuejs.org/v2/guide/event-handling.html#the-counter-component)
- Looking at other vue component libraries! (That's what you're doing *right now*! Way to go!)
- [Vue Style Guide](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended)
- [Vue Jest](https://medium.com/swlh/tips-on-unit-testing-vue-components-with-jest-e68ff6a28bb5)
- [Vue Doc Guide](https://v3.vuejs.org/guide/contributing/writing-guide.html#style)
- [Jest shallowMount vs mount](https://reactgo.com/vue-testing-mount-vs-shallowmount/)
- [Vue Test Utils shallowMount](https://vue-test-utils.vuejs.org/api/shallowmount.html)
- [Vue Test Utils Common Tips](https://vue-test-utils.vuejs.org/guides/#common-tips)
- [Style Scoped vs Globa](https://vue-loader.vuejs.org/guide/scoped-css.html#mixing-local-and-global-styles)
