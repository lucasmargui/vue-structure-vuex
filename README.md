
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
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/9ca3b6ba-eb7b-4497-9016-6da9cae8277a" style="width:90%">
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


## Login

### state

```
state: {
  ...
  user: null
  ...
```

- Dentro do objeto state, há uma chave chamada user, que inicialmente está definida como null. Isso indica que o estado do usuário está vazio ou não definido no momento.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/704d9e18-c010-419a-8546-e5d224189d3d" style="width:90%">
</div>


### mutations

```
setUser(state, user) {
  state.user = user
},
clearUser(state) {
  state.user = null
}
```

- setUser(state, user): É uma mutação chamada setUser. Ela recebe dois parâmetros: state (que é o estado atual do Vuex) e user. Essa mutação é usada para definir o estado do usuário no Vuex. Ela atualiza o estado com o objeto user que é passado como argumento.

- clearUser(state): É outra mutação chamada clearUser. Ela recebe apenas o parâmetro state. Essa mutação é usada para limpar o estado do usuário, definindo-o como null.




<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/1007e9aa-e002-4535-a3e6-b644f83f9e88" style="width:90%">
</div>




### actions
```
  async loginAsync({ commit }, payload) {
      const user  = payload;
      commit('setUser', user);
    },
```
const user = payload;: Aqui, payload é atribuído à constante user. Presumivelmente, o payload contém informações sobre o usuário que está tentando fazer login.

commit('setUser', user);: Esta linha invoca uma mutação chamada 'setUser' usando o método commit. As mutações são usadas para alterar o estado da loja de forma síncrona. Neste caso, a mutação 'setUser' é usada para atualizar o estado com as informações do usuário após o login.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/664608dd-9021-4cab-9643-df9fb7e9e061" style="width:90%">
</div>





```
async logoutAsync({ commit }) {
     
      commit('clearUser');
      
    },
```

Dentro da função logoutAsync, o código chama commit('clearUser'),  é responsável por limpar os dados do usuário do estado da aplicação.


## Loading

### state

```
state: {
    loading: false,
```

loading: false: Dentro do objeto state, há uma chave chamada loading, que mantém o estado de um processo de carregamento. Neste caso, loading é inicializado como false, o que significa que inicialmente o componente não estará em um estado de carregamento.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/eaf58d0e-67b1-4704-9577-1ce90867793e" style="width:90%">
</div>

### mutations

```
mutations: {
    ...
    setLoading: (state, payload) => state.loading = payload,
    
```


- setLoading: Esta mutação é usada para definir o estado de carregamento da aplicação. O payload determina o estado de carregamento, que geralmente é um booleano indicando se a aplicação está atualmente em um estado de carregamento ou não.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/253abcd2-85f3-4bde-88af-db6fc7a9afff" style="width:90%">
</div>


### actions

- commit('setLoading', true);: Aqui, é disparada uma mutação chamada 'setLoading', atualiza o estado para indicar que alguma operação está ocorrendo, como o carregamento de dados.

- await new Promise(resolve => setTimeout(resolve, 1000));: Este é um truque comum usado para simular uma operação assíncrona. Ele cria uma promessa que será resolvida após um segundo, simulando uma espera para alguma operação assíncrona acontecer, como uma chamada de API.

- commit('setLoading', false);: Independentemente do sucesso ou falha da operação, este código garante que a indicação de carregamento seja atualizada para false no final da função.

<div align="center">
  <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/c2c83025-92a7-43a8-8e47-7c360bc6a8de" style="width:90%">
</div>






