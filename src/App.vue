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
    background-size: cover;
    display: block;
    position: fixed;
  }
  .img-logo {
    width: 450px;
    margin: 0 auto;
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
  .input-form {
    background: linear-gradient(to right, rgba(226,72,49,1) 0%, rgba(233,117,55,1) 42%, rgba(233,117,55,1) 58%, rgba(226,72,49,1) 100%) !important;
    border-radius: 47px;
    color: white;
    text-align: center;
    width: 100%;
    height: 75px;
    border: none;
    margin: 10px 0px;
    font-size: 24px;
    box-shadow: 4px 3px 8px 0 #000000c7;
    }
    .input-form::placeholder {
      color: white;
    }
    .button-form {
      width: 333px;
      margin-top: -22px !important;
      margin-bottom: 10px !important;
      height: 94px;
      font-size: 30px;
      font-weight: 600;
    }
</style>
