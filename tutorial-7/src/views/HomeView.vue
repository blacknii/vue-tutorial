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
import { ref } from "vue";

// component imports
import PostList from "../components/PostList.vue";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        const data = await fetch("http://localhost:3000/posts");
        if (!data.ok) throw Error("no data available");
        posts.value = await data.json();
      } catch (err) {
        error.value = err.message;
        console.error(error.value);
      }
    };

    load();

    return { posts, error };
  },
};
</script>
