<template>
  <h4>This is an profile page, id: {{ id }}, name: {{ character }}</h4>
</template>

<script lang="ts">
import getCharacter from "../composables/getCharacter";
import axios from "axios";
import { ref, computed } from "vue";

export default {
  props: ["id"],
  setup({ id }, ctx) {
    const characterName = getCharacter(id);

    const character = computed(async () => {
      const char = await axios.get(
        "https://thronesapi.com/api/v2/Characters/" + id
      );

      const character = ref(char.data.fullName);
      console.log("1", character.value);
      return character;
    });

    return { characterName, character };
  },
};
</script>
