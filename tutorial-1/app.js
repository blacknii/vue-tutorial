const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com/",
      showBooks: true,
      books: [
        {
          id: 0,
          title: "The Final Empire",
          author: "Brandon Sanderson",
          image: "https://randomuser.me/api/portraits/thumb/men/1.jpg",
          isFav: true,
        },
        {
          id: 1,
          title: "The Final Empire 2",
          author: "Brandon Sanderson",
          image: "https://randomuser.me/api/portraits/thumb/men/2.jpg",
          isFav: false,
        },
        {
          id: 2,
          title: "The Final Empire 3",
          author: "Brandon Sanderson",
          image: "https://randomuser.me/api/portraits/thumb/men/3.jpg",
          isFav: true,
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
    toggleFav(book) {
      book.isFav = !book.isFav;
      console.log(book);
    },
  },
});

app.mount("#content");
