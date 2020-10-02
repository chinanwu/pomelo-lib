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
- Card
- Button

## I Found A Bug! 
- Thanks for using Pomelo! 
- Visit [the github issues page](https://github.com/chinanwu/pomelo-lib), and describe the bug

## RIUTFOHTDT 
(Resources I Used to Figure Out How To Do This)

- [Create a Vue.js component library](https://itnext.io/create-a-vue-js-component-library-as-a-module-part-1-a1116e632751)
- [Vue Jest Testing Docs](https://vue-test-utils.vuejs.org/v2/guide/event-handling.html#the-counter-component)
