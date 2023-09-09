<template>
  <h1>Add Project</h1>
  <form @submit.prevent="add">
    <label>title</label>
    <input type="text" v-model="title" required />
    <label>details</label>
    <textarea type="text" v-model="details" required />
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
        title: this.title,
        details: this.details,
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
