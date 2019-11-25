<template>
<div class="app">
    <div class="hello">
      <img class="img-logo" src="../assets/Orange_Rycom_Logo.png"/>
      <div class="container-cam">
          <video autoplay="true" id="videoElement"/>
          <div class="background-cam">
            
          </div>
      </div>
      <div class="btn-return"></div>
    </div>
</div>
</template>

<script>
export default {
  name: 'home',
  props: {
    msg: String
  },
  mounted() {
    var video = document.querySelector("#videoElement");
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    video#videoElement {
      position: absolute;
      top: 25px;
      left: 28px;
      width: 798px;
      height: 578px;
      z-index: 0;
    }
    .img-logo {
      width: 20%;
      margin: 0 auto;
      margin-bottom: 50px;
    }
    .container-cam {
      background-color: black;
      width: 1066px;
      height: 626px;
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
      width: 15%;
      height: 100px;
      background-size: 100%;
      background-repeat: no-repeat;
      margin: 0 auto;
      margin-top: 40px;
      cursor: pointer;
    }
</style>
