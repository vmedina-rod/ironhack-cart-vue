new Vue({
  el: '#card',
  data() {
    return {
      items: [],
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
  },
  mounted() {
    fetch('js/datos.json')
      .then((response) => {
        if (response.ok) return response.json();
        else return new Error('Error');
      })
      .then((json) => {
        this.items = json;
      });
  }
});
