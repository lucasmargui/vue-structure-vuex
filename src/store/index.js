import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    loading: false
  },
  getters: {
    counter: state => state.counter,
    isLoading: state => state.loading
  },
  mutations: {
    increment: state => state.counter++,
    decrement: state => state.counter--,
    setLoading: (state, payload) => state.loading = payload
  },
  actions: {
    async incrementAsync({ commit }) {
      commit('setLoading', true);
      // Simulando uma operação assíncrona, por exemplo, uma chamada de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      commit('increment');
      commit('setLoading', false);
    },
    async decrementAsync({ commit }) {
      commit('setLoading', true);
      // Simulando uma operação assíncrona, por exemplo, uma chamada de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      commit('decrement');
      commit('setLoading', false);
    }
  },
  modules: {
    subModule: {
      state: {
        nestedCounter: 0
      },
      getters: {
        nestedCounter: state => state.nestedCounter
      },
      mutations: {
        incrementNestedCounter: state => state.nestedCounter++
      },
      actions: {
        async incrementNestedCounterAsync({ commit }) {
          // Simulando uma operação assíncrona, por exemplo, uma chamada de API
          await new Promise(resolve => setTimeout(resolve, 1000));
          commit('incrementNestedCounter');
        }
      }
    }
  }
})
