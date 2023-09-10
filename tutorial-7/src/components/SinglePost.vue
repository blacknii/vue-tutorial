<template>
  <div class="post">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      <span class="pill" @click="handleClick(tag)">#{{ tag + " " }}</span>
    </span>
  </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  props: ["post"],
  setup({ post }) {
    const snippet = computed(() => {
      return post.body.substring(0, 100) + "...";
    });

    const router = useRouter();
    const handleClick = (tag) => {
      router.push({ name: "tag", params: { tag: tag } });
    };

    return { snippet, handleClick };
  },
};
</script>

<style>
.pill {
  cursor: pointer;
}
</style>
