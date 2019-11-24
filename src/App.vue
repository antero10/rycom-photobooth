<template>
  <div id="app">
    <message/>
  </div>
</template>

<script>
import message from './components/message.vue'
//import home from './components/home.vue'
//import contact from './components/form.vue'

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
