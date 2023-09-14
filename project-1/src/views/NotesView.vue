<template>
  <!-- <p v-for="note in notes" :key="note.id">{{ note.content }}</p> -->
  <div class="notes">
    <SingleNote v-for="note in notes" :key="note.id" :note="note" />
  </div>
</template>

<script>
import { ref } from 'vue'
import db from '../../data/notes'
import SingleNote from '../components/SingleNote.vue'

export default {
  components: { SingleNote },
  setup() {
    const notes = ref(db)

    return { notes }
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
