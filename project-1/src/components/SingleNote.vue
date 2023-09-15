<template>
  <div class="container">
    <div class="content">
      <p>{{ note.content }}</p>
    </div>
    <div class="actions">
      <button @click="del">delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['note'],
  setup({ note }, { emit }) {
    const notes = []

    if (localStorage.getItem('notes')) {
      JSON.parse(localStorage.getItem('notes')).forEach((note) => notes.push(note))
    }

    const del = () => {
      console.log('delete')
      const newNotes = notes.filter((currentNote) => currentNote.id !== note.id)
      localStorage.setItem('notes', JSON.stringify(newNotes))
      emit('del', note.id)
    }

    return { del }
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
