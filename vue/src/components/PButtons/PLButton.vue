<template>
  <PButton class="PLButton">
    <template #content>
      <slot name="content"></slot>
    </template>
  </PButton>
</template>

<script>
import PButton from "@/components/PButtons/PButton";

export default {
  name: "PLButton",
  components: {
    PButton
  }
};
</script>

<style lang="less" scoped>
.PLButton {
  font-size: 2rem;
}
</style>
