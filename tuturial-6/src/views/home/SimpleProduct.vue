<template>
  <div class="task" :class="product.complete ? 'done-task' : 'unfinished-task'">
    <div>
      <h3 @click="toggleDetails">{{ product.title }}</h3>
      <p v-if="showDetails">{{ product.details }}</p>
    </div>
    <div class="buttons">
      <button @click="del" class="btn-task">delete</button>
      <button @click="edit" class="btn-task">edit</button>
      <button @click="check" class="btn-task">done</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  data() {
    return {
      showDetails: false,
      uri: `http://localhost:3000/projects/${this.product.id}`,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    del() {
      fetch(this.uri, {
        method: "DELETE",
      }).then(() => this.$emit("someEvent"));
    },
    edit() {
      this.$router.push({
        name: "editProject",
        params: { id: this.product.id },
      });
    },
    check() {
      fetch(this.uri, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          complete: !this.product.complete,
        }),
      }).then(() => this.$emit("someEvent"));
    },
  },
};
</script>

<style scoped>
.task {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.3rem;
  background-color: burlywood;
  padding: 1rem;
  border-radius: 10px;
  border-width: 0 0 0 10px;
}

.done-task {
  border-color: green;
  border-style: solid;
}

.unfinished-task {
  border-color: red;
  border-style: solid;
}

.buttons {
  display: flex;
  gap: 0.3rem;
}

.btn-task {
  padding: 0.5rem;
  border-radius: 10px;
  background-color: #f5f5f5;
  border: 0 solid black;
  cursor: pointer;
}

.btn-task:hover {
  background-color: #f0f0f0;
}

h3 {
  cursor: pointer;
}
</style>
