<template>
  <div class="container">
    <div class="content">
      <p>{{ note.content }}</p>
    </div>
    <div class="actions">
      <button @click="del">delete</button>
      <button @click="edit">edit</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['note'],
  setup() {
    const del = () => {
      console.log('delete')
    }

    const edit = () => {
      console.log('edit')
    }

    return { del, edit }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #2c3e50;
  padding: 1.2rem;
  border-radius: 10px;
  width: 300px;
  height: 150px;
  overflow: auto;
}
.content {
  height: 80px;
  overflow: auto;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.content::-webkit-scrollbar {
  width: 0;
}
.container::-webkit-scrollbar {
  width: 0;
}
</style>
