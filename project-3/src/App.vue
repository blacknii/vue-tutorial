<template>
  <q-layout view="lHh lpr lFf" container style="min-height: 100vh">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>Quasar Framework</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </q-header>

    <q-footer elevated reveal>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { RouterView } from "vue-router";

export default {
  setup(props) {
    console.log("test");
  },
};
</script>

<style scoped></style>
