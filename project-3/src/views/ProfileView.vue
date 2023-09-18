<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <Card :id="id" :character="character" />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import getCharacter from "../composables/getCharacter";
import Card from "../components/Card.vue";

export default {
  props: ["id"],
  components: { Card },
  setup(props) {
    const character = ref("");

    onMounted(async () => {
      const response = await getCharacter(props.id);
      if (response !== null) {
        character.value = response;
      }
    });

    return {
      character,
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
};
</script>
