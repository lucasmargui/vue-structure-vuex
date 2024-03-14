<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src

import Counter from '@/components/Counter.vue'
import LoginForm from '@/components/LoginForm.vue'
export default {
  name: 'HomeView',
  components: {
    Counter,
    LoginForm
  }
}
</script>
