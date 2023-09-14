<template>
  <div class="note">
    <p>{{ note.content }}</p>
  </div>
</template>

<script>
export default {
  props: ['note'],
  setup() {
    return {}
  }
}
</script>
<style scoped>
.note {
  background-color: #2c3e50;
  padding: 1.2rem;
  border-radius: 10px;
  width: 300px;
  height: 140px;
  overflow: auto;
}

.note::-webkit-scrollbar {
  width: 0;
}
</style>
