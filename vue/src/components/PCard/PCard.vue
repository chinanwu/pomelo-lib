<template>
  <div
    :id="id"
    class="PCard"
    :class="{ 'PCard--flip': isFlipped }"
    tabindex="0"
    @click="handleClick"
    @keydown="handleKeyDown"
  >
    <div class="PCard__front">
      <slot name="front"></slot>
    </div>
    <div class="PCard__back">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PCard",
  props: {
    id: {
      type: String,
      default: null
    },
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
.PCard {
  width: 40rem;
  height: 20rem;
  transform-origin: 50% 50%;
  transform-style: preserve-3d;
  transition: transform 0.25s ease-in-out, box-shadow 0.3s;
  cursor: pointer;

  &:focus {
    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }

  &:hover {
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
      0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -7px rgba(0, 0, 0, 0.2);
  }
}

.PCard--flip {
  transform: rotateY(180deg);
}

.PCard__front,
.PCard__back {
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

.PCard__back {
  transform: rotateY(180deg);
}

@media only screen and (max-width: 500px) {
  .PCard {
    height: 42rem;
    width: 26rem;

    box-shadow: 0 8px 17px 2px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  }
}
</style>
