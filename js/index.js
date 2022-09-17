new Vue({
  el: '#card',
  data() {
    return {
      name: 'Ironhack Rubber Duck',
      amount: 3,
      price: 25,
      total: 0
    };
  },
  methods: {
    calculate() {
      this.total = this.amount * this.price;
    },
  }
});
