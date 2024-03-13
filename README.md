
# Estrutura Vuex


<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/2378b233-503d-4847-9a47-2029b05f8c6b" style="width:45%">
   <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/ab9df543-7fbb-4e86-83e4-48f13447b485" style="width:45%">
</div>



## store/index.js

- import { createStore } from 'vuex': Esta linha importa a função createStore do Vuex, que será usada para criar a loja Vuex.

- export default createStore({ ... }): Aqui, estamos exportando por padrão uma nova instância da loja Vuex, criada usando a função createStore. Dentro do createStore, passamos um objeto com várias propriedades que definem o estado, getters, mutations e actions da loja.

- state: Esta propriedade define o estado inicial da loja Vuex. Neste caso, temos apenas um estado chamado counter inicializado com o valor 0.

- getters: Aqui, definimos getters, que são funções usadas para acessar os estados da loja. O getter counter retorna o valor do estado counter.

- mutations: As mutações são funções síncronas que modificam o estado da loja Vuex. Aqui, temos duas mutações: decrement e increment, que decrementam e incrementam o estado counter, respectivamente.

- actions: As actions são funções assíncronas que chamam mutações. Elas são usadas principalmente para operações assíncronas, como chamadas de API. Neste caso, temos duas actions: decrement e increment, que simplesmente chamam as mutações correspondentes.

- modules: O Vuex permite que você divida sua loja em módulos menores, cada um com seu próprio estado, getters, mutations e actions. Aqui, não estamos utilizando módulos, então esta propriedade está vazia.

## Counter.vue

- mapGetters mapeia os getters do Vuex para as propriedades computadas do componente. No exemplo, está mapeando o getter 'counter' para a propriedade computada 'counter'.

- mapActions mapeia as actions do Vuex para os métodos do componente. No exemplo, está mapeando as actions 'decrement' e 'increment' para os métodos 'decrement' e 'increment' do componente.
