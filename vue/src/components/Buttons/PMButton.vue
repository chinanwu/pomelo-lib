<template>
  <PButton c-class="PMButton">
    <template #content>
      <slot name="content"></slot>
    </template>
  </PButton>
</template>

<script>
import PButton from "@/components/Buttons/PButton";

export default {
  name: "PMButton",
  components: {
    PButton
  }
};
</script>

<style lang="less">
.PMButton {
  font-size: 1.2rem;
}
</style>
