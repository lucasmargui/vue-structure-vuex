<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
    <h3 v-if="isLoading">Loading...</h3>
    <h3 v-if="error">Error: {{ error }}</h3>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <button @click="incrementBy(5)">Increment by 5</button>
    <button @click="decrementBy(5)">Decrement by 5</button>
    <h4>Nested Counter: {{ nestedCounter }}</h4>
    <button @click="incrementNestedCounter">Increment Nested Counter</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['counter', 'isLoading', 'error', 'nestedCounter']),
    ...mapGetters(['isLoading', 'error', 'nestedCounter'])
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
