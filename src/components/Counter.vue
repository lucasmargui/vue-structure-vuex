<template>
  <div>
    <h1>Counter: {{ counter }}</h1>
    <h2 v-if="isLoading">Loading...</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementAsync">Increment Async</button>
    <button @click="decrementAsync">Decrement Async</button>
    <h3>Nested Counter: {{ nestedCounter }}</h3>
    <button @click="incrementNestedCounter">Increment Nested Counter</button>
    <button @click="incrementNestedCounterAsync">Increment Nested Counter Async</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'counter',
      'isLoading',
      'nestedCounter'
    ])
  },
  methods: {
    ...mapActions([
      'increment',
      'decrement',
      'incrementAsync',
      'decrementAsync',
      'incrementNestedCounter',
      'incrementNestedCounterAsync'
    ])
  }
}
</script>

<style scoped>
/* Estilos específicos do componente podem ser adicionados aqui */
</style>
