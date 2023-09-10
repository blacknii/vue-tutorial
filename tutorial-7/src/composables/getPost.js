import { ref } from "vue";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 2000);
      });

      const data = await fetch("http://localhost:3000/posts/" + id);
      if (!data.ok) throw Error("that post is not available");
      post.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.error(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
