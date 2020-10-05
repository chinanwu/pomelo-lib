<template>
  <div class="PIconSlideLabel" :data-label="label">
    <a
      class="PIconSlideLabel__link"
      v-if="link"
      :href="link"
      :title="linkTitle"
      :aria-label="label"
    >
      <img
        class="PIconSlideLabel__icon"
        :class="iconClass"
        :src="iconUrl"
        :alt="alt"
      />
    </a>
    <img
      v-else
      class="PIconSlideLabel__icon"
      :class="iconClass"
      :src="iconUrl"
      :alt="alt"
      :aria-label="label"
    />
  </div>
</template>

<script>
export default {
  name: "PIconSlideLabel",
  props: {
    iconUrl: {
      // Must be passed in with require()
      type: String,
      required: true
    },
    link: {
      type: String,
      default: null
    },
    linkTitle: {
      type: String,
      default: null
    },
    iconClass: {
      type: String,
      default: null
    },
    label: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="less" scoped>
.PIconSlideLabel {
  display: flex;

  &::after {
    content: attr(data-label);
    display: flex;
    align-items: center;
    transform: translateX(-1rem);
    opacity: 0;
    transition: all 0.2s;
    margin-left: 1rem;
  }

  &:hover::after {
    transform: translateX(0);
    opacity: 1;
  }
}

.PIconSlideLabel__link {
  display: contents;
}
</style>

<!-- TODO -->
<!-- - Prefer No Motion users - set so no transform -->
