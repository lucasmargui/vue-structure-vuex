<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Counter />
  </div>
</template>

<script>
// @ is an alias to /src

import Counter from '@/components/Counter.vue'
export default {
  name: 'HomeView',
  components: {
    Counter
  }
}
</script>
