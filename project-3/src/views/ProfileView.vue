<template>
  <h4>This is a profile page, id: {{ id }}, name: {{ characterName }}</h4>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import getCharacter from "../composables/getCharacter";

export default {
  props: ["id"],

  setup(props) {
    const characterName = ref("");

    onMounted(async () => {
      const name = await getCharacter(props.id);
      if (name !== null) {
        characterName.value = name;
      }
    });

    return { characterName };
  },
};
</script>
