<template>
  <h1>Add Project</h1>
  <form @submit.prevent="add">
    <label>title</label>
    <input type="text" v-model="title" />
    <label>details</label>
    <input type="text" v-model="details" />
    <button>add</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
    };
  },
  methods: {
    add() {
      const newProject = {
        title: this.title ? this.title : "empty title",
        details: this.details ? this.details : "empty details",
        complete: false,
      };
      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProject),
      });
      this.title = "";
      this.details = "";
    },
  },
};
</script>

<style></style>
