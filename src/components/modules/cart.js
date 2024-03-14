export default {
  namespaced: true,
  state: {
    items: []
  },
  getters: {
    cartItems: state => state.items
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addItemToCart', product);
    }
  },
  mutations: {
    addItemToCart: (state, product) => state.items.push(product)
  },
};
