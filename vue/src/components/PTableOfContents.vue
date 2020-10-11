<template>
  <nav aria-labelledby="toc">
    <h2 id="toc">TABLE OF CONTENTS</h2>
    <ol>
      <li v-for="(content, index) in contents" :key="'tOC-' + index">
        <strong>
          <a :href="'#' + content.link">{{ content.label }}</a>
        </strong>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "PTableOfContents",
  props: {
    contents: {
      type: Array,
      required: true,
      validator: values =>
        values.every(
          value =>
            value.label &&
            value.link &&
            (typeof value.label === "string" ||
              value.label instanceof String) &&
            (typeof value.link === "string" || value.link instanceof String)
        )
    }
  }
};
</script>
