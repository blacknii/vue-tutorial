const app = Vue.createApp({
  data() {
    return {
      title: "The Final Empire",
      author: "Brandon Sanderson",
      age: 45,
    };
  },
  methods: {
    changeTitle(newTitle) {
      this.title = newTitle;
    },
  },
});

app.mount("#content");
