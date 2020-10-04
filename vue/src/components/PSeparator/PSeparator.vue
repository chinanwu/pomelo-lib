<template>
  <div class="PSeparator" role="presentation"></div>
</template>

<script>
export default {
  name: "PSeparator",
  props: {
    vertical: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="less" scoped>
.PSeparator {
  margin: 3rem;
  border-bottom: 1px solid #f2f2f2;
  width: 60%;
}

@media only screen and (max-width: 375px) {
  .PSeparator {
    width: 80%;
  }
}
</style>
