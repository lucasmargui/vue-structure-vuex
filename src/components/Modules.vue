<template>
  <div>
    <h2>Produtos</h2>
    <ul>
      <li v-for="product in allProducts" :key="product.id">
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
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  computed: {
    // Mapeia as propriedades dos módulos Vuex para as propriedades do componente
    ...mapGetters("cart", ["cartItems"]),
    ...mapGetters("products", ["allProducts"]), // Mapeia os getters 'allProducts'
  },
  methods: {
    ...mapActions("cart", ["addToCart"]),
    ...mapActions("products", ["fetchProducts"]),
  },
  created() {
    // Chama a ação para buscar os produtos assim que o componente é criado
    this.fetchProducts();
  },
};
</script>