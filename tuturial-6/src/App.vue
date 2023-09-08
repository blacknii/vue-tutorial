<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'addProject' }">Add Project</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  methods: {
    test() {
      console.log("test");
    },
  },
};
</script>

<style>
body {
  background: #f2f2f2;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  margin: 0 auto;
  color: #555;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
