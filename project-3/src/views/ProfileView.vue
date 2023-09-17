<template>
  <h4>This is an profile page, id: {{ id }}, name: {{ characterName }}</h4>
</template>

<script lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  props: ["id"],

  setup(props) {
    const characterName = ref("");

    onMounted(async () => {
      try {
        const res = await axios.get(
          "https://thronesapi.com/api/v2/Characters/" + props.id
        );
        characterName.value = res.data.fullName;
      } catch (error) {
        console.error("Error fetching character data:", error);
      }
    });

    return { characterName };
  },
};
</script>
