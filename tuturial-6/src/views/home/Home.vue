<template>
  <div class="home">Home</div>
  <FilterNav />
  <div v-if="projects.length" class="tasks">
    <SimpleProduct v-for="project in projects" :product="project" />
  </div>
  <div v-else>Loading</div>
</template>

<script>
import FilterNav from "./FilterNav.vue";
import SimpleProduct from "./SimpleProduct.vue";

export default {
  name: "Home",
  components: { FilterNav, SimpleProduct },
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.error(err.message));
  },
};
</script>

<style>
.tasks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
