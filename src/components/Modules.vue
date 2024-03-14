<template>
  <div>
    <h2>Produtos</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - {{ product.price }}
        <button @click="addToCart(product)">Adicionar ao Carrinho</button>
      </li>
    </ul>

    <h2>Carrinho de Compras</h2>
    <ul>
      <li v-for="item in cartItems" :key="item.id">
        {{ item.name }} - {{ item.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      cartItems: []
    };
  },
  computed: {
    // Mapeia as propriedades dos módulos Vuex para as propriedades do componente
    products() {
      return this.$store.getters.allProducts;
    },
    cartItems() {
      return this.$store.getters.cartItems;
    }
  },
  methods: {
    // Dispara as ações definidas nos módulos Vuex
    fetchProducts() {
      this.$store.dispatch('fetchProducts');
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', product);
    }
  },
  created() {
    // Chama a ação para buscar os produtos assim que o componente é criado
    this.fetchProducts();
  }
};
</script>