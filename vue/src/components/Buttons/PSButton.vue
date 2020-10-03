<template>
  <PButton c-class="PSButton">
    <template #content>
      <slot name="content"></slot>
    </template>
  </PButton>
</template>

<script>
import PButton from "@/components/Buttons/PButton";

export default {
  name: "PSButton",
  components: {
    PButton
  }
};
</script>
