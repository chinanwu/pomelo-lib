<template>
  <div>
    <PButton
      id="pAccordionBtn"
      class="PAccordionBtn"
      @click="expanded = !expanded"
      @keydown="expanded = !expanded"
    >
      <template #content>
        <span>{{ label }}</span>
        <span>{{ expanded ? "-" : "+" }}</span>
      </template>
    </PButton>
    <transition name="expand" mode="out-in">
      <slot v-if="expanded" name="content"></slot>
    </transition>
  </div>
</template>

<script>
import PButton from "@/components/PButtons/PButton";

export default {
  name: "PAccordion",
  components: {
    PButton
  },
  props: {
    label: {
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
  },
  methods: {
    handleKeyDown(event) {
      if (
        event &&
        event.keyCode &&
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        (event.keyCode === 13 || event.keyCode === 32) // if enter or space is pressed
      ) {
        event.preventDefault();
        this.expanded = !this.expanded;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.PAccordionBtn {
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
