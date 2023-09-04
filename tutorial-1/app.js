const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        { title: "The Final Empire", author: "Brandon Sanderson" },
        { title: "The Final Empire 2", author: "Brandon Sanderson" },
        { title: "The Final Empire 3", author: "Brandon Sanderson" },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBox() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, number) {
      console.log(e.type, number);
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount("#content");
