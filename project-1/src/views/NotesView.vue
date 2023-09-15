<template>
  <!-- <p v-for="note in notes" :key="note.id">{{ note.content }}</p> -->
  <div class="notes">
    <SingleNote v-for="note in notes" :key="note.id" :note="note" @del="handleDel" />
  </div>
</template>

<script>
import { ref } from 'vue'
import SingleNote from '../components/SingleNote.vue'

export default {
  components: { SingleNote },
  setup() {
    const notes = ref([])
    if (localStorage.getItem('notes')) {
      notes.value = JSON.parse(localStorage.getItem('notes'))
    }

    const handleDel = (e) => {
      console.log(e)
      notes.value = notes.value.filter((currentNote) => currentNote.id !== e)
      console.log(notes.value)
    }
    return { notes, handleDel }
  }
}
</script>

<style>
.notes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
