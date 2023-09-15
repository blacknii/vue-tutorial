<template>
  <form @submit.prevent="submit">
    <label>New Note</label>
    <textarea v-model="noteContent" name="note-content"></textarea>
    <div class="actions">
      <button class="submit-button">SUBMIT</button>
    </div>
  </form>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

import db from '../../data/notes'

export default {
  setup() {
    const router = useRouter()
    const notes = []

    if (localStorage.getItem('notes')) {
      JSON.parse(localStorage.getItem('notes')).forEach((note) => notes.push(note))
    }

    console.log(notes)

    const newId = ref(db[db.length - 1].id + 1)

    const noteContent = ref('')
    const submit = () => {
      const note = {
        id: newId.value,
        content: noteContent.value
      }

      notes.push(note)

      localStorage.setItem('notes', JSON.stringify(notes))
      newId.value = ''
      router.push({ name: 'home' })
    }

    return { newId, submit, noteContent }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  /* background-color: rgb(53, 50, 47); */
}

label {
  font-weight: 500;
  font-size: 2rem;
}

textarea {
  min-height: 17rem;
  font-size: 1.8rem;
  border-radius: 4px;
  color: white;
  background-color: #2c3e50;
  border-width: 0;
}

.actions {
  display: flex;
  justify-content: center;
}

.submit-button {
  width: 10rem;
  height: 3rem;
  cursor: pointer;
  border-width: 0;
  border-radius: 6px;
  background-color: #41b883;
  color: rgb(61, 39, 23);
  font-size: 1.2rem;
  font-weight: 600;
}

.submit:hover {
  background-color: #36a774;
}
</style>
