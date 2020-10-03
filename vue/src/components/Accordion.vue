<template>
  <div :class="pClass">
    <button
      id="accordionBtn"
      class="AccordionBtn"
      @click="expanded = !expanded"
    >
      <span>{{ label }}</span>
      <span>{{ expanded ? "-" : "+" }}</span>
    </button>
    <transition name="expand" mode="out-in">
      <slot v-if="expanded" name="content"></slot>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Accordion",
  props: {
    label: {
      type: String,
      default: null
    },
    pClass: {
      type: String,
      default: null
    },
    expand: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      expanded: this.expand
    };
  }
};
</script>

<style lang="less" scoped>
.AccordionBtn {
  width: 100%;
  text-align: left;
  padding: 1rem;
  background-color: #efefef;
  border: none;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;
  border-radius: 0.5rem;
  font-size: 1.4rem;

  &:hover,
  &:focus {
    background-color: #f4f4f4;
  }

  &:active {
    background-color: #efefef;
  }
}

.expand {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s;
    overflow: hidden;
  }
  &-enter-from,
  &-leave-to {
    max-height: 0;
    opacity: 0;
  }
  &-enter-to,
  &-leave-from {
    max-height: 100vh;
    opacity: 1;
  }
}
</style>
