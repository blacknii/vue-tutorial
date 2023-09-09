<template>
  <div class="home">
    Home
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  setup() {
    const name = "mario";
    const age = 30;

    const handleClick = () => {
      console.log("you clicked me");
    };

    return {
      name,
      age,
      handleClick,
    };
  },
};
</script>
