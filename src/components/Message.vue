<template>
<div class="app">
  <div class="app">
      <div class="container-msg">
        <img class="img-logo" v-bind:src="config.logo"/>
        <div>
            <div class="check-icon"></div>
            <p class="color-grey">{{config.message.text1}}</p>
            <p class="color-orange">{{config.message.text2}}</p>
        </div>
        <div v-for="button in config.message.buttons" v-bind:key="button.name">
          <button class="btn"  v-bind:style="{ backgroundImage: 'url(' + button.url + ')' }" v-on:click="goCamera()"></button>
        </div>
      </div>
  </div>
</div>
</template>

<script>
import Config from './configs/config';
export default {
  name: 'message',
  props: {
    msg: String
  },
  data: () => ({
    config: Config
  }),
  methods: {
    goCamera() {
      this.$router.push(this.config.routes.contact);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .container-msg {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .color-grey {
        color: grey;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 60px;
    }
    .check-icon {
        margin-top: 80px;
    }
    .check-icon:before {
        content: "\2714";
        border: 0.1em solid #e34d32;
        border-radius: 0.2em;
        display: inline-block;
        width: 280px;
        height: 280px;
        margin-right: 0.2em;
        vertical-align: bottom;
        color: white;
        -webkit-transition: .2s;
        transition: .2s;
        line-height: 1.2;
        font-size: 260px;
        background: linear-gradient(to right, rgba(226,72,49,1) 0%, rgba(233,117,55,1) 42%, rgba(233,117,55,1) 58%, rgba(226,72,49,1) 100%);
        border-radius: 50%;
        margin: 0 auto;
    }
    .color-orange {
        color: #e24c32;
        font-size: 33px;
        font-weight: bold;
        width: 500px;
        margin: 0 auto;
    }
    .img-logo {
        width: 200px;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .btn {
        width: 213px;
        height: 70px;
        background-size: 100%;
        background-repeat: no-repeat;
        margin: 0 auto;
        cursor: pointer;
        border: none;
        background-color: transparent;
        margin-top: 35px;
    }
    .btn:focus {
        outline: none;
    }
    .container-checkbox {
      margin-top: 25px;
      margin-bottom: 25px;
    }
</style>
