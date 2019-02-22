<template>
  <div>
    <!-- @click="addType" -->
    <option :value="type"></option>
  </div>
</template>

<script>
export default {
  props: ["type"],
  name: "OneType"
};
</script>

<style>
</style>
