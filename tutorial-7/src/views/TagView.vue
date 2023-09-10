<template>
  <h1>tag: {{ tag }}</h1>
  <div v-if="error">
    <p>Error - {{ error }}</p>
  </div>
  <div v-if="posts.length">
    <PostList :posts="matchingTags" />
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import Spinner from "../components/Spinner.vue";
import getPost from "../composables/getPosts";
import PostList from "../components/PostList.vue";

import { computed, onUpdated } from "vue";

export default {
  name: "HomeView",
  props: ["tag"],
  components: { PostList, Spinner },
  setup({ tag }) {
    const { posts, error, load } = getPost();

    load();

    const matchingTags = computed(() =>
      posts.value.filter((post) => post.tags.includes(tag))
    );

    onUpdated(() => {
      console.log(posts.value);
    });
    return { posts, error, matchingTags };
  },
};
</script>

<style></style>
