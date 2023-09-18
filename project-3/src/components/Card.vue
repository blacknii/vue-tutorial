<template>
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
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import getCharacter from "../composables/getCharacter";

export default {
  props: ["id", "character"],

  setup() {
    const lorem =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

    return {
      lorem,
    };
  },
};
</script>

<style lang="sass" scoped>
.my-card
  height:  100%
  max-width: 250px

img
  height: 250px
  object-fit: cover
  object-position: top
</style>
