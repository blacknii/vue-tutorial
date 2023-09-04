const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com/",
      showBooks: true,
      books: [
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          image: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
        },
        {
          title: "The Final Empire 2",
          author: "Brandon Sanderson",
          image: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
        },
        {
          title: "The Final Empire 3",
          author: "Brandon Sanderson",
          image: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
        },
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
