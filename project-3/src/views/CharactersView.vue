<template>
  <div class="q-pa-md column items-center">
    <h4>This is the characters page</h4>
    <div
      class="q-pa-md row items-start q-gutter-md"
      style="justify-content: center"
    >
      <Card
        v-for="character in characters"
        :key="character.id"
        :id="character.id"
        :character="character"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import getCharacters from "../composables/getCharacters";
import Card from "../components/Card.vue";

export default {
  components: { Card },
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
