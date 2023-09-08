<template>
  <div class="buttons">
    <button
      @click="select('view all')"
      class="btn"
      :class="{ selected: filter === 'view all' }"
    >
      VIEW ALL
    </button>
    <button
      @click="select('completed')"
      class="btn"
      :class="{ selected: filter === 'completed' }"
    >
      COMPLETED
    </button>
    <button
      @click="select('ongoing')"
      class="btn"
      :class="{ selected: filter === 'ongoing' }"
    >
      ONGOING
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: "view all",
    };
  },
  methods: {
    select(filter) {
      this.filter = filter;
      this.$emit("filter", filter);
    },
  },
};
</script>

<style scoped>
.buttons {
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

.btn {
  background-color: white;
  border: 0.1rem solid rgb(156, 154, 154);
  color: rgb(156, 154, 154);
  padding: 0.3rem;
  cursor: pointer;
}

.selected {
  border: 0.1rem solid rgb(58, 36, 48);
  color: rgb(58, 36, 48);
}
</style>
