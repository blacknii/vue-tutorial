<template>
  <div class="home">
    Home
    <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "HomeView",
  setup() {
    const p = ref(null);

    const name = "mario";
    const age = 30;

    const handleClick = () => {
      console.log(p, p.value);
      p.value.classList.add("test");
      p.value.textContent = "hello";
    };

    return {
      name,
      age,
      handleClick,
      p,
    };
  },
};
</script>
