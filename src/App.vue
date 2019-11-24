<template>
  <div id="app">
    <message msg="prueba"/>
  </div>
</template>

<script>
import message from './components/message.vue'

export default {
  name: 'app',
  components: {
    message
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
