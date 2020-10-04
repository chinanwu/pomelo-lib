<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="'PTableHd-' + index">
          {{ format(header) }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="'PTableTr-' + index">
        <td v-for="(value, key) in item" :key="'PTableTd-' + index + key">
          {{ value }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import capitalize from "@/functions/capitalize.js";

export default {
  name: "PTable",
  props: {
    headers: {
      type: Array,
      required: true,
      validator: values => values.every(value => typeof value === "string")
    },
    data: {
      type: Array,
      default: null,
      validator: values => values.every(value => typeof value === "object")
    }
  },
  methods: {
    format(str) {
      return capitalize(str);
    }
  }
};
</script>

<style lang="less" scoped>
table,
th,
td {
  border: 1px solid black;
}
</style>
