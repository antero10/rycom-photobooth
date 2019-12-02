<template>
<div class="app" v-bind:style="{ backgroundImage: 'url(' + config.bg + ')' }">
  <img class="img-logo" v-bind:src="config.logo"/>
  <div class="container-msg">
    <div>
        <div class="check-icon"></div>
        <p class="color-grey">{{config.message.text1}}</p>
        <p class="color-orange">{{config.message.text2}}</p>
    </div>
  </div>
  <div class="container-buttons">
    <div v-for="button in config.message.buttons" v-bind:key="button.name">
      <button class="btn"  v-bind:style="{ backgroundImage: 'url(' + button.url + ')' }" v-on:click="goCamera()"></button>
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
        color: white;
        font-size: 23px;
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
        color: white;
        font-size: 40px;
        font-weight: bold;
        width: 500px;
        margin: 0 auto;
    }
    .container-checkbox {
      margin-top: 25px;
      margin-bottom: 25px;
    }
</style>
