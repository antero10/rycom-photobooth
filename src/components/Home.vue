<template>
<div class="app">
    <div class="hello">
      <img class="img-logo" src="../assets/Orange_Rycom_Logo.png"/>
      <div class="container-cam">
          <video v-if="canvas" ref="video" autoplay="true" id="videoElement"/>
          <canvas v-if="!canvas" ref="canvas" id="canvas" width="640" height="480"></canvas>
          <div class="background-cam">
            
          </div>
      </div>
      <button class="btn-return m-top-30" v-on:click="capture()"></button> <br>
      <button class="btn-return btn-img1" v-on:click="capture()"></button> <br>
      <button class="btn-return btn-img2" v-on:click="capture()"></button> <br>

      <!--<button class="input-form button-form">text</button>-->
    </div>
</div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  },
  data() {
    return {
        video: {},
        canvas: {},
        captures: []
    }
  },
  mounted() {
    this.video = this.$refs.video;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.srcObject = stream;
        });
    }
  },
  methods: {
    capture() {
        this.canvas = this.$refs.canvas;
        this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
        this.captures.push(this.canvas.toDataURL("image/png"));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    video#videoElement {
      position: absolute;
      top: 25px;
      left: 8px;
      width: 798px;
      height: 549px;
      z-index: 0;
    }
    canvas#canvas {
      position: absolute;
      top: 25px;
      left: 8px;
      width: 798px;
      height: 549px;
      z-index: 0;
    }
    .img-logo {
      width: 20%;
      margin: 0 auto;
      margin-bottom: 50px;
    }
    .container-cam {
      background-color: black;
      width: 1039px;
      height: 585px;
      margin: 0 auto;
      box-shadow: 0 0 7px 0 #676767;
      position: relative;
    }
    .background-cam {
      background-image: url(../assets/Watermark2.png);
      width: 100%;
      height: 100%;
      z-index: 1;
      background-size: 101% 100%;
      background-repeat: no-repeat;
      position: relative;
    }
    .btn-return {
        background-image: url(../assets/Main_Menu_Button.png);
        width: 213px;
        height: 70px;
        background-size: 100%;
        background-repeat: no-repeat;
        margin: 0 auto;
        cursor: pointer;
        border: none;
        background-color: transparent;
    }
    .m-top-30 {
      margin-top: 30px;
    }
    .btn-img1 {
      background-image: url(../assets/Main_Menu_Button.png) !important;
    }
    .btn-img2 {
      background-image: url(../assets/Main_Menu_Button.png) !important;
    }
    .btn-return:focus {
      outline: none;
    }
    .input-form {
        background: linear-gradient(to right, rgba(226,72,49,1) 0%, rgba(233,117,55,1) 42%, rgba(233,117,55,1) 58%, rgba(226,72,49,1) 100%);
        border-radius: 38px;
        color: white;
        text-align: center;
        width: 100%;
        height: 75px;
        border: none;
        margin: 6px 0px;
        font-size: 24px;
    }
    .input-form::placeholder {
        color: white;
    }
    .button-form {
        width: 35%;
        box-shadow: 1px 1px 4px 0 #000000c7;
        margin-top: -22px;
        margin-bottom: 0;
    }
</style>
