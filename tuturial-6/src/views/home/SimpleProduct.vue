<template>
  <h3>Simple Product {{ product }}</h3>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style></style>
