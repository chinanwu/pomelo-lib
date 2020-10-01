<template>
  <button
    :id="id"
    :class="['Button', cClass]"
    :ariaLabel="ariaLabel"
    :role="role"
    :ariaHaspopup="ariaHasPopup"
    :ariaRoledescription="ariaRoledescription"
    :disabled="disabled"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    id: String,
    label: String,
    cClass: String,
    ariaLabel: String,
    role: String,
    ariaHasPopup: String,
    ariaRoledescription: String,
    disabled: Boolean
  },
  emits: ["click", "keydown"],
  methods: {
    handleClick() {
      this.$emit("click");
    },
    handleKeyDown() {
      this.$emit("keydown");
    }
  }
};
</script>

<style lang="less" scoped>
.Button {
  background-color: inherit;
  border: none;
  cursor: pointer;
}
</style>
