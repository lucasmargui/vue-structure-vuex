export default {
  namespaced: true,
  state: {
    products: [],
  },
  getters: {
    allProducts: state => state.products
  },
  actions: {
    fetchProducts({ commit }) {
      const products = [{id:1,name:"Teste 1", price:"150"},{id:2,name:"Teste 2", price:"150"}];
      commit('setProducts', products);
    }
  },
  mutations: {
    setProducts: (state, products) => (state.products = products)
  },
};
