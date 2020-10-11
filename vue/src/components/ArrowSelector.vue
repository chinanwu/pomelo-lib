<template>
  <div class="ArrowSelector">
    <div class="ArrowSelector__main">
      <button class="ArrowSelector__btn" @click="handleLeftArrow">&lt;</button>
      <span>{{ current }} / {{ total }}</span>
      <button class="ArrowSelector__btn" @click="handleRightArrow">&gt;</button>
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
      required: true
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
    handleLeftArrow() {
      const nextCurrent = this.current - 1 <= 0 ? this.total : this.current - 1;
      this.current = nextCurrent;
      this.$emit("change", nextCurrent);
    },
    handleRightArrow() {
      const nextCurrent = this.current + 1 > this.total ? 1 : this.current + 1;
      this.current = nextCurrent;
      this.$emit("change", nextCurrent);
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
}

.ArrowSelector__label {
  font-size: 2.4rem;
  color: #4f4f4f;
}
</style>
