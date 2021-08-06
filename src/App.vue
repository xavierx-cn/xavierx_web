<template>
  <img src="./assets/logo.png">
  <div>
  <Timestamp msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Timestamp from './components/Timestamp.vue'

export default {
  name: 'App',
  components: {
    Timestamp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
