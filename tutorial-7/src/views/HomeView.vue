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
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPost from "../composables/getPosts";
// component imports
import PostList from "../components/PostList.vue";
import Spinner from "../components/Spinner.vue";

export default {
  name: "HomeView",
  components: { PostList, Spinner },
  setup() {
    const { posts, error, load } = getPost();

    load();
    return { posts, error };
  },
};
</script>
