<template>
  <section class="expandable" :class="pClass">
    <header>
      <h1>{{ title }}</h1>
    </header>
    <p>
      {{
        description.length > maxLength
          ? description.substring(0, maxLength - 3) + "..."
          : description
      }}
    </p>
  </section>
</template>

<script>
export default {
  name: "Expandable",
  props: {
    title: String,
    description: String,
    maxLength: {
      type: Number,
      default: 100
    },
    pClass: String
  }
};
</script>

<style lang="less" scoped></style>
