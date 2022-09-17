new Vue({
  el: '#card',
  data() {
    return {
      total: 0,
      items: [
        {
          name: 'Ironhack Rubber Duck',
          amount: 1,
          price: 25,
          total: 0
        },
        {
          name: 'Ironhack Beach Towel',
          amount: 1,
          price: 12.5,
          total: 0
        }
      ]
    };
  },
  methods: {
    calculate() {
      this.total = this.items.reduce((accum, item) => {
        item.total = item.amount * item.price;
        return accum + item.total;
      }, 0);
    }
  }
});
