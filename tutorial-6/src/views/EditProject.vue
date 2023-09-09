<template>
  <h1>Edit Project {{ id }}</h1>
  <form @submit.prevent="edit">
    <label>title</label>
    <input type="text" v-model="title" />
    <label>details</label>
    <input type="text" v-model="details" />
    <button>edit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
      complete: false,
    };
  },
  props: ["id"],
  mounted() {
    fetch(`http://localhost:3000/projects/${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.title = data.title;
        this.details = data.details;
      })

      .catch((err) => console.error(err.message));
  },
  methods: {
    edit() {
      const newProject = {
        title: this.title ? this.title : "empty title",
        details: this.details ? this.details : "empty details",
        complete: false,
      };
      fetch(`http://localhost:3000/projects/${this.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.title,
          details: this.details,
        }),
      }).then(() =>
        this.$router.push({
          name: "home",
        })
      );
    },
  },
};
</script>

<style></style>
