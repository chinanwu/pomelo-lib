<template>
  <PButton class="PMButton">
    <template #content>
      <slot name="content"></slot>
    </template>
  </PButton>
</template>

<script>
import PButton from "@/components/PButtons/PButton";

export default {
  name: "PMButton",
  components: {
    PButton
  }
};
</script>

<style lang="less" scoped>
.PMButton {
  font-size: 1.6rem;
}
</style>
