<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">
      <p>Error - {{ error }}</p>
    </div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
// component imports
import PostList from "../components/PostList.vue";
import getPost from "../composables/getPosts";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPost();

    load();
    return { posts, error };
  },
};
</script>
