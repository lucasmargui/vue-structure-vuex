
# Estrutura Vuex

## Conceito

- state: Esta propriedade define o estado inicial do store.

- getters: Aqui, definimos getters, que são funções usadas para acessar os estados do store.

- mutations: As mutações são funções síncronas que modificam o estado do store Vuex.

- actions: As actions são funções assíncronas que chamam mutações. Elas são usadas principalmente para operações assíncronas, como chamadas de API.

- modules: O Vuex permite que você divida seu store em módulos menores, cada um com seu próprio estado, getters, mutations e actions.


## Counter

### state

```
state: {
  counter: 0
  loading: false, 
  error: null,
  ...
```
Esta é uma propriedade que define o estado inicial do store. No exemplo dado, o estado inicial inclui um contador inicializado com zero (counter: 0), uma flag para indicar se está carregando algo (loading: false), e uma variável para armazenar erros (error: null).

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/6d90f022-105c-4c7e-91cc-6538b888f3ee" style="width:90%">
</div>


### getters

```  
getters: {
    counter: state => state.counter, 
    isLoading: state => state.loading, 
    error: state => state.error /
```
- counter: state => state.counter: Este é um getter chamado "counter" que retorna o valor do estado counter armazenado no objeto state. Isso significa que sempre que você chamar getters.counter, você obterá o valor atual do contador.

- isLoading: state => state.loading: Este é um getter chamado "isLoading" que retorna o valor do estado loading armazenado no objeto state. Ele fornece acesso ao estado de carregamento da aplicação.

- error: state => state.error: Este é um getter chamado "error" que retorna o valor do estado error armazenado no objeto state. Ele fornece acesso a mensagens de erro potencialmente presentes no estado da aplicação.

### mutations

```  
mutations: {
    increment: (state, payload) => state.counter = state.counter  + payload, 
    decrement: (state, payload) => state.counter  = state.counter - payload, 
    setLoading: (state, payload) => state.loading = payload, 
    setError: (state, payload) => state.error = payload,
```

Mutations possuí quatro funções sincronas para alterar os valores de counter, increment e decrement

- increment: Esta mutação é usada para aumentar o valor do contador no estado da aplicação. Ela recebe um payload que é adicionado ao valor atual do contador.

- decrement: Esta mutação é usada para diminuir o valor do contador no estado da aplicação. Ela também recebe um payload que é subtraído do valor atual do contador.

- setLoading: Esta mutação é usada para definir o estado de carregamento da aplicação. O payload determina o estado de carregamento, que geralmente é um booleano indicando se a aplicação está atualmente em um estado de carregamento ou não.

- setError: Esta mutação é usada para definir mensagens de erro na aplicação. O payload contém a mensagem de erro a ser definida.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/bbade7d1-5b2d-4b78-b2a4-ab866ac7b445" style="width:90%">
</div>

### actions

Possui 4 funções assincronas incrementAsync, decrementAsync, incrementByAsync e decrementByAsync


- async incrementByAsync({ commit }, payload): Esta é uma função assíncrona chamada incrementByAsync que aceita dois argumentos: commit e payload. commit é um método que é usado para disparar as mutações do Vuex, enquanto payload é um objeto que contém dados adicionais, como o amount que é desestruturado na linha seguinte.

- const { amount } = payload;: Este código desestrutura o objeto payload, extraindo o valor de amount.

- commit('setLoading', true);: Aqui, é disparada uma mutação chamada 'setLoading', atualiza o estado para indicar que alguma operação está ocorrendo, como o carregamento de dados.

- await new Promise(resolve => setTimeout(resolve, 1000));: Este é um truque comum usado para simular uma operação assíncrona. Ele cria uma promessa que será resolvida após um segundo, simulando uma espera para alguma operação assíncrona acontecer, como uma chamada de API.

- commit('increment', amount);: Depois que a espera é concluída, outra mutação é disparada, desta vez para incrementar um valor no estado gerenciado pelo Vuex.

- commit('setError', error.message);: Se ocorrer algum erro durante a execução do código dentro do bloco try, será capturado pelo bloco catch e outra mutação será disparada para atualizar o estado com uma mensagem de erro.

- commit('setLoading', false);: Independentemente do sucesso ou falha da operação, este código garante que a indicação de carregamento seja atualizada para false no final da função.

(mesma lógica para incrementAsync, decrementAsync, decrementAsync)

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/a721e1a0-019c-45e7-bec3-021b353966a9" style="width:90%">
</div>




