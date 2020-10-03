<template>
  <PButton c-class="PLButton">
    <template #content>
      <slot name="content"></slot>
    </template>
  </PButton>
</template>

<script>
import PButton from "@/components/Buttons/PButton";

export default {
  name: "PLButton",
  components: {
    PButton
  }
};
</script>

<style lang="less">
.PLButton {
  font-size: 1.6rem;
}
</style>
