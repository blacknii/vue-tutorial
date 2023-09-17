<template>
  <div>
    <h4>This is the characters page</h4>
    <ul>
      <li v-for="character in characters" :key="character.id">
        {{ character.fullName }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import getCharacters from "../composables/getCharacters";

export default {
  setup() {
    interface Character {
      fullName: string;
    }
    const characters = ref([]);

    onMounted(async () => {
      const charactersData = await getCharacters();
      if (charactersData !== null) {
        characters.value = charactersData;
      }
    });

    return { characters };
  },
};
</script>
