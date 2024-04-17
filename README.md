# Vuex framework

## Concept

- state: This property defines the initial state of the store.

- getters: Here, we define getters, which are functions used to access the store states.

- mutations: Mutations are synchronous functions that modify the state of the Vuex store.

- actions: Actions are asynchronous functions that call mutations. They are mainly used for asynchronous operations, such as API calls.

- modules: Vuex allows you to divide your store into smaller modules, each with its own state, getters, mutations and actions.


## Counter

### state

```
state: {
 counter: 0
 loading: false,
 error: null,
 ...
```
This is a property that defines the initial state of the store. In the example given, the initial state includes a counter initialized to zero (counter: 0), a flag to indicate whether something is loading (loading: false), and a variable to store errors (error: null).

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
- counter: state => state.counter: This is a getter called "counter" that returns the value of the counter state stored in the state object. This means that whenever you call getters.counter you will get the current value of the counter.

- isLoading: state => state.loading: This is a getter called "isLoading" that returns the value of the loading state stored in the state object. It provides access to the application's loading state.

- error: state => state.error: This is a getter called "error" that returns the value of the error state stored in the state object. It provides access to error messages potentially present in the application state.

### mutations

```
mutations: {
 increment: (state, payload) => state.counter = state.counter + payload,
 decrement: (state, payload) => state.counter = state.counter - payload,
 setLoading: (state, payload) => state.loading = payload,
 setError: (state, payload) => state.error = payload,
```

Mutations has four synchronous functions to change the counter, increment and decrement values

- increment: This mutation is used to increase the value of the counter in the application state. It receives a payload that is added to the current counter value.

- decrement: This mutation is used to decrease the counter value in the application state. It also receives a payload that is subtracted from the current counter value.

- setLoading: This mutation is used to set the loading state of the application. The payload determines the loading state, which is usually a boolean indicating whether the application is currently in a loading state or not.

- setError: This mutation is used to define error messages in the application. The payload contains the error message to be defined.


<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/9ca3b6ba-eb7b-4497-9016-6da9cae8277a" style="width:90%">
</div>

### actions

It has 4 asynchronous functions incrementAsync, decrementAsync, incrementByAsync and decrementByAsync


- async incrementByAsync({ commit }, payload): This is an asynchronous function called incrementByAsync that accepts two arguments: commit and payload. commit is a method that is used to trigger Vuex mutations, while payload is an object that contains additional data, such as amount that is unstructured in the next line.

- const { amount } = payload;: This code destructures the payload object, extracting the amount value.

- commit('setLoading', true);: Here, a mutation called 'setLoading' is triggered, updates the state to indicate that some operation is taking place, such as data loading.

- await new Promise(resolve => setTimeout(resolve, 1000));: This is a common trick used to simulate an asynchronous operation. It creates a promise that will resolve after one second, simulating waiting for some asynchronous operation to happen, like an API call.

- commit('increment', amount);: After the wait is complete, another mutation is triggered, this time to increment a value in the Vuex-managed state.

- commit('setError', error.message);: If an error occurs during code execution within the try block, it will be captured by the catch block and another mutation will be triggered to update the state with an error message.

- commit('setLoading', false);: Regardless of the success or failure of the operation, this code guarantees that the loading indication is updated to false at the end of the function.

(same logic for incrementAsync, decrementAsync, decrementAsync)

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/a721e1a0-019c-45e7-bec3-021b353966a9" style="width:90%">
</div>

## Login

### state

```
state: {
 ...
 user:null
 ...
```

- Inside the state object, there is a key called user, which is initially set to null. This indicates that the user state is currently empty or not set.

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

- setUser(state, user): It is a mutation called setUser. It receives two parameters: state (which is the current state of Vuex) and user. This mutation is used to define the user state in Vuex. It updates the state with the user object that is passed as an argument.

- clearUser(state): It is another mutation called clearUser. It only receives the state parameter. This mutation is used to clear the user's state by setting it to null.




<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/1007e9aa-e002-4535-a3e6-b644f83f9e88" style="width:90%">
</div>




### actions
```
 async loginAsync({ commit }, payload) {
 const user = payload;
 commit('setUser', user);
 },
```
const user = payload;: Here, payload is assigned to the constant user. Presumably, the payload contains information about the user trying to log in.

commit('setUser', user);: This line invokes a mutation called 'setUser' using the commit method. Mutations are used to change the store state synchronously. In this case, the 'setUser' mutation is used to update the state with the user information after login.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/664608dd-9021-4cab-9643-df9fb7e9e061" style="width:90%">
</div>





```
async logoutAsync({ commit }) {

 commit('clearUser');

 },
```

Inside the logoutAsync function, the code calls commit('clearUser'), which is responsible for clearing user data from the application state.


## Loading

### state

```
state: {
 loading: false,
```

loading: false: Inside the state object, there is a key called loading, which maintains the state of a loading process. In this case, loading is initialized to false, which means that initially the component will not be in a loading state.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/eaf58d0e-67b1-4704-9577-1ce90867793e" style="width:90%">
</div>

### mutations

```
mutations: {
 ...
 setLoading: (state, payload) => state.loading = payload,

```


- setLoading: This mutation is used to set the loading state of the application. The payload determines the loading state, which is usually a boolean indicating whether the application is currently in a loading state or not.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/253abcd2-85f3-4bde-88af-db6fc7a9afff" style="width:90%">
</div>


### actions

- commit('setLoading', true);: Here, a mutation called 'setLoading' is triggered, updates the state to indicate that some operation is taking place, such as data loading.

- await new Promise(resolve => setTimeout(resolve, 1000));: This is a common trick used to simulate an asynchronous operation. It creates a promise that will resolve after one second, simulating waiting for some asynchronous operation to happen, like an API call.

- commit('setLoading', false);: Regardless of the success or failure of the operation, this code guarantees that the loading indication is updated to false at the end of the function.

<div align="center">
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/c2c83025-92a7-43a8-8e47-7c360bc6a8de" style="width:90%">
</div>

## Modules

"Modules" are a way of dividing the application store into smaller, more manageable modules. Each module has its own state, mutations, actions and getters. This helps organize and maintain the complexity of the large-scale store, making it more modular and easier to understand and maintain.

### Module creation

<div align="center">
 <h2> Module products </h2>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/9f95fc06-363b-4eb0-8224-0e2c4820aa42" style="width:60%">

</div>
<br>
<div align="center">
 <h2> Module cart </h2>
 <img src="https://github.com/lucasmargui/Vue_Estrutura_Vuex/assets/157809964/35590572-d40e-4e21-8ded-2f252177a14a" style="width:60%">
</div>

### Importing the module in store.js

```
import cartModule from '@/components/modules/cart';
import productsModule from '@/components/modules/products';

```

### Adding modules

```
modules: {
 cart:cartModule,
 products:productsModule,
 ....
```

### Accessing module getters in the view


```
computed: {

 ...mapGetters("cart", ["cartItems"]),
 ...mapGetters("products", ["allProducts"]), // Maps the 'allProducts' getters
 },
```

### Accessing module actions in the view

```
 methods: {
 ...mapActions("cart", ["addToCart"]),
 ...mapActions("products", ["fetchProducts"]),
 },
```

