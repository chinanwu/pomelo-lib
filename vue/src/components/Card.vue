<template>
  <div
    :id="id"
    class="Card"
    :class="[{ 'Card--flip': isFlipped }, cClass]"
    tabindex="0"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <div class="Card__front">
      <slot name="front"></slot>
    </div>
    <div class="Card__back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    id: String,
    cClass: String,
    flipped: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFlipped: this.flipped
    };
  },
  emits: ["click"],
  methods: {
    handleClick() {
      this.isFlipped = !this.isFlipped;
      this.$emit("click");
    },
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
        this.handleClick();
      }
    }
  }
};
</script>

<style lang="less" scoped>
.Card {
  width: 40rem;
  height: 20rem;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-in-out, box-shadow 0.3s;
  cursor: pointer;
}

.Card--flip {
  transform: rotateY(180deg);
}

.Card__front,
.Card__back {
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  background-color: white;
}

.Card__back {
  transform: rotateY(180deg);
}
</style>
