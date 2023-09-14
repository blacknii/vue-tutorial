<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Notes</RouterLink>
        <RouterLink to="/about">New Note</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
nav {
  display: flex;
  gap: 1rem;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  max-width: 1000px;
  margin: 0 auto;
  background-color: red;
  padding: 0;
}
</style>
