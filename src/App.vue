<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>
  .app {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: contain;
    display: block;
    position: fixed;
  }
  .img-logo {
    width: 450px;
    margin: 0 auto;
    filter: brightness(0) invert(1);
    margin-top: 100px;
  }
  .btn {
    width: 353px;
    height: 115px;
    background-size: 100%;
    background-repeat: no-repeat;
    margin: 0 auto;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }
  .btn:focus {
    outline: none;
  }
  .container-buttons {
    position: absolute;
    left: 50%;
    bottom: 100px;
    transform: translateX(-50%);
  }
</style>
