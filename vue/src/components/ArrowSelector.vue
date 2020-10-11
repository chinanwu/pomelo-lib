<template>
  <div class="ArrowSelector">
    <div class="ArrowSelector__main">
      <button
        id="arrowSelectorLeft"
        class="ArrowSelector__btn"
        @click="handleLeftArrow"
        @keydown="handleLeftArrowKeyDown"
      >
        &lt;
      </button>
      <span>{{ current }} / {{ total }}</span>
      <button
        id="arrowSelectorRight"
        class="ArrowSelector__btn"
        @click="handleRightArrow"
        @keydown="handleRightArrowKeyDown"
      >
        &gt;
      </button>
    </div>
    <div class="ArrowSelector__label">Current</div>
  </div>
</template>

<script>
export default {
  name: "ArrowSelector",
  props: {
    default: {
      type: Number,
      required: true,
      validator: value => value > 0
    },
    total: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      current: this.default
    };
  },
  methods: {
    setCurrent(next) {
      this.current = next;
      this.$emit("change", next);
    },
    handleLeftArrow() {
      this.setCurrent(this.current - 1 <= 0 ? this.total : this.current - 1);
    },
    handleRightArrow() {
      this.setCurrent(this.current + 1 > this.total ? 1 : this.current + 1);
    },
    handleLeftArrowKeyDown(event) {
      if (
        event &&
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        event.key
      ) {
        if (event.key === "Enter" || event.key === "Space") {
          event.preventDefault();
          this.handleLeftArrow();
        }
      }
    },
    handleRightArrowKeyDown(event) {
      if (
        event &&
        !event.shiftKey &&
        !event.ctrlKey &&
        !event.altKey &&
        !event.metaKey &&
        event.key
      ) {
        if (event.key === "Enter" || event.key === "Space") {
          event.preventDefault();
          this.handleRightArrow();
        }
      }
    }
  },
  emits: ["change"]
};
</script>

<style lang="less" scoped>
.ArrowSelector {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ArrowSelector__main {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 3.6rem;
}

.ArrowSelector__btn {
  background-color: inherit;
  border: none;
  font-size: 7.2rem;
  cursor: pointer;
  color: #c8c8c8;
}

.ArrowSelector__label {
  font-size: 2.4rem;
  color: #4f4f4f;

  &::after {
    content: " Project";
  }
}

// iPhone 11 Pro Max, iPhone 8
@media only screen and (max-width: 414px) {
  .ArrowSelector__main {
    font-size: 3.6rem;
  }

  .ArrowSelector__btn {
    font-size: 4.8rem;
  }

  .ArrowSelector__label::after {
    content: "";
  }
}

// iPhone SE
@media only screen and (max-width: 320px) {
  .ArrowSelector__main {
    font-size: 2.4rem;
  }

  .ArrowSelector__btn {
    font-size: 4.8rem;
  }

  .ArrowSelector__label {
    font-size: 1.8rem;
  }
}
</style>
