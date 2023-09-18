<template>
  <div class="q-pa-md row items-start justify-between">
    <div>
      <img :src="character.imageUrl" :alt="character.fullName" />
      <p><b>id</b>: {{ id }}</p>
      <p><b>firstName</b>: {{ character.firstName }}</p>
      <p><b>lastName</b>: {{ character.lastName }}</p>
      <p><b>fullName</b>: {{ character.fullName }},</p>
      <p><b>title</b>: {{ character.title }}</p>
      <p><b>family</b>: {{ character.family }}</p>
      <p><b>image</b>: {{ character.image }}</p>
      <p><b>imageUrl</b>: {{ character.imageUrl }}</p>
      <RouterLink to="/">
        <q-btn push color="primary" label="BACK" />
      </RouterLink>
      <br />
      <br />
    </div>
    <Card :id="id" :character="character" />
  </div>
</template>

<script lang="ts">
import { RouterLink } from "vue-router";
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
