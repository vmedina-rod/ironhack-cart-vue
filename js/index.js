new Vue({
  el: '#card',
  data() {
    return {
      //total: 0,
      items: [
        {
          name: 'Rubber Duck',
          amount: 1,
          price: 25,
          total: 0
        },
        {
          name: 'Beach Towel',
          amount: 1,
          price: 12.5,
          total: 0
        }
      ],
      newProductName: '',
      newProductPrice: 0
    };
  },
  methods: {
    remove(index) {
      this.items.splice(index, 1);
    },
    create() {
      this.items.push({
        name: this.newProductName,
        amount: 1,
        price: this.newProductPrice,
        total: 0
      });
    }
  },
  computed: {
    total() {
      return (this.total = this.items.reduce((accum, item) => {
        item.total = item.amount * item.price;
        return accum + item.total;
      }, 0));
    }
  }
});
