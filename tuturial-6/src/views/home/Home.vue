<template>
  <FilterNav @filter="test2" />
  <div class="tasks">
    <div v-if="projects.length" v-for="project in projects">
      <SimpleProduct
        :product="project"
        @someEvent="test"
        v-if="
          filter === 'view all' ||
          (filter === 'completed' && project.complete) ||
          (filter === 'ongoing' && !project.complete)
        "
      />
    </div>
    <div v-else>Loading</div>
  </div>
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
};
</script>

<style>
.tasks {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
