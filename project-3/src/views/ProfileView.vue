<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      <img :src="character.imageUrl" />

      <q-card-section>
        <div class="text-h6">{{ character.fullName }}</div>
        <div class="text-subtitle2">{{ character.family }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import getCharacter from "../composables/getCharacter";

export default {
  props: ["id"],

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

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px

img
  max-height: 250px
  object-fit: cover
  object-position: top
</style>
