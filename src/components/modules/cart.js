// store/modules/cart.js
const state = {
  items: []
}

const getters = {
  cartItems: state => state.items
}

const actions = {
  addToCart({ commit }, product) {
    commit('addItemToCart', product);
  }
}

const mutations = {
  addItemToCart: (state, product) => state.items.push(product)
}

export default {
  state,
  getters,
  actions,
  mutations
}
