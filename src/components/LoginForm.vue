<template>
  <div class="login-container">
    <div class="login-form" v-if="!user">
      <h2>Login</h2>
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button @click="login">Login</button>
    </div>
    <div class="logged-in" v-else>
      <p>Welcome, {{ user.username }}!</p>
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  computed: {
    //Outra forma de acessar user
    //    user() {
    //       return this.$store.state.user
    //     }
    ...mapState(["user"]),
  },
  methods: {
    login() {
      // Perform login logic
      const user = { username: this.username };
      this.$store.commit("setUser", user);
    },
    logout() {
      this.$store.commit("clearUser");
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.login-form {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 500px;
}

input[type="text"],
input[type="password"] {
  width: 60%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 90%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.logged-in {
  text-align: center;
}

.logged-in button {
  margin-top: 10px;
}
</style>
