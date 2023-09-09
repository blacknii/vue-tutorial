<template>
  <FilterNav @filter="test2" />
  <div class="tasks" v-if="projects.length">
    <div v-for="project in filteredProjects" :key="project.id">
      <SimpleProduct :product="project" @someEvent="test" />
    </div>
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
      filter: "view all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.error(err.message));
  },

  methods: {
    test() {
      fetch("http://localhost:3000/projects")
        .then((res) => res.json())
        .then((data) => (this.projects = data))
        .catch((err) => console.error(err.message));
    },
    test2(e) {
      this.filter = e;
    },
  },
  computed: {
    filteredProjects() {
      if (this.filter === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.filter === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      return this.projects;
    },
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
