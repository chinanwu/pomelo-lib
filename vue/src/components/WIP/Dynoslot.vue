<template>
  <ul>
    <li v-for="item in numSlots" :key="item">
      <slot v-bind:item="item"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Dynoslot",
  props: {
    numSlots: Number
  }
};
</script>

<!--https://medium.com/javascript-in-plain-english/vue-components-dynamic-slot-names-and-shorthands-efbace3990f1-->
<!--https://v3.vuejs.org/guide/component-slots.html#scoped-slots-->
