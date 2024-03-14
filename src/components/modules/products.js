// store/modules/products.js
const state = {
  products: []
}

// <li v-for="product in products" :key="product.id">
// {{ product.name }} - {{ product.price }}

const getters = {
  allProducts: state => state.products
}

const actions = {
  fetchProducts({ commit }) {
    // Lógica para buscar produtos de uma API ou outro serviço
    const products = [{id:1,name:"Teste 1", price:"150"},{id:2,name:"Teste 2", price:"150"}]; // Lista de produtos obtidos
    commit('setProducts', products);
  }
}

const mutations = {
  setProducts: (state, products) => (state.products = products)
}

export default {
  state,
  getters,
  actions,
  mutations
}