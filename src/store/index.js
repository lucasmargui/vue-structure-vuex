import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    loading: false,
    error: null
  },
  getters: {
    counter: state => state.counter,
    isLoading: state => state.loading,
    error: state => state.error
  },
  mutations: {
    increment: (state, payload) => state.counter = state.counter  + payload,
    decrement: (state, payload) => state.counter  = state.counter - payload,
    setLoading: (state, payload) => state.loading = payload,
    setError: (state, payload) => state.error = payload
  },
  actions: {
    async incrementAsync({ commit }, payload) {
      commit('setLoading', true);
      try {
        // Simulando uma operação assíncrona, por exemplo, uma chamada de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        commit('increment');
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async decrementAsync({ commit }, payload) {
      commit('setLoading', true);
      try {
        // Simulando uma operação assíncrona, por exemplo, uma chamada de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        commit('decrement');
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async incrementByAsync({ commit }, payload) {
      const { amount } = payload;
      commit('setLoading', true);
      try {
        // Simulando uma operação assíncrona, por exemplo, uma chamada de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        commit('increment', amount);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
    },
    async decrementByAsync({ commit }, payload) {
      const { amount } = payload;
      commit('setLoading', true);
      try {
        // Simulando uma operação assíncrona, por exemplo, uma chamada de API
        await new Promise(resolve => setTimeout(resolve, 1000));
        commit('decrement', amount);
      } catch (error) {
        commit('setError', error.message);
      } finally {
        commit('setLoading', false);
      }
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
