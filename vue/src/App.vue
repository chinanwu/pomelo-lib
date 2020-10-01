<template>
  <Card>
    <template v-slot:front>
      <h1>Front of the card</h1>
    </template>
    <template v-slot:back>
      <h1>Back of the card</h1>
    </template>
  </Card>
</template>

<script>
import Card from "@/components/Card";

export default {
  name: "App",
  components: {
    Card
  }
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
