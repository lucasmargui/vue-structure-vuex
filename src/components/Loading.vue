<template>
  <div class="container">
  <div class="counter-card">
    <h3 v-if="isLoading">Loading...</h3>
    <h3 v-if="error">Error: {{ error }}</h3>

    <h4>Exemplo de loading</h4>
    <button class="action-button" @click="loading">Clique parar acionar loading</button>
  </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Loading',
  computed: {
    ...mapState(['isLoading']),
    ...mapGetters(['isLoading']),
  },
  methods: {
    ...mapActions(['loadingAsync']),
    loading() {
      this.loadingAsync();
    },

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
