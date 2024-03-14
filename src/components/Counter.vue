<template>
  <div class="container">
  <div class="counter-card">
    <h2>Counter: {{ counter }}</h2>
    <h3 v-if="isLoading">Loading...</h3>
    <h3 v-if="error">Error: {{ error }}</h3>
    <div class="button-container">
      <button class="action-button" @click="increment">Increment</button>
      <button class="action-button" @click="decrement">Decrement</button>
      <button class="action-button" @click="incrementBy(5)">Increment by 5</button>
      <button class="action-button" @click="decrementBy(5)">Decrement by 5</button>
    </div>
    <h4>Nested Counter: {{ nestedCounter }}</h4>
    <button class="action-button" @click="incrementNestedCounter">Increment Nested Counter</button>
  </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Counter',
  computed: {
    ...mapState(['counter', 'isLoading', 'error', 'nestedCounter']),
    ...mapGetters(['isLoading', 'error', 'nestedCounter']),
  },
  methods: {
    ...mapActions(['incrementAsync', 'decrementAsync', 'incrementByAsync', 'decrementByAsync', 'subModule/incrementNestedCounterAsync']),
    increment() {
      this.incrementAsync();
    },
    decrement() {
      this.decrementAsync();
    },
    incrementBy(amount) {
      this.incrementByAsync({ amount });
    },
    decrementBy(amount) {
      this.decrementByAsync({ amount });
    },
    incrementNestedCounter() {
      this['subModule/incrementNestedCounterAsync']();
    }
  }
}
</script>

<style>

.container {
    display: flex;
    justify-content: center; /* Alinha os itens ao centro do eixo principal */
}

.counter-card {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 20px;
  max-width: 800px;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.action-button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 20px;
}

.action-button:hover {
  background-color: #0056b3;
}
</style>
