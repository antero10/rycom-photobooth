<template>
<div class="app" v-bind:style="{ backgroundImage: 'url(' + config.bg + ')' }">
  <img class="img-logo" v-bind:src="config.logo"/>
  <div class="container-home">
      <div class="container-cam" ref="printMe">
        <p class="count-number" v-if="numberActive">{{number}}</p>
        <video ref="video" autoplay="true" id="videoElement"/>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        <div class="background-cam" v-bind:style="{ backgroundImage: 'url(' + config.home.bgCam + ')' }">
        </div>
      </div>
    </div>
    <div class="container-buttons">
      <div v-for="button in config.home.buttons" v-bind:key="button.name">
        <button
      v-if="(button.name === 'Main') ? true : (button.name === 'Take') ? cameraActive  : !cameraActive " 
      v-bind:class="{ 'input-form button-form container-center m-top-34': (button.name === 'send'), 'btn m-top-30 container-center': (button.name !== 'send') }"  
      v-bind:style="{ backgroundImage: 'url(' + button.url + ')' }" 
      v-on:click="(button.name === 'Main')? goMain() : (button.name === 'Take')? capture()  : (button.name === 'send')? created() : retake() ">{{button.label}}</button>
    </div>
  </div>
</div>
</template>

<script>
import Config from './configs/config';
import axios from 'axios';
export default {
  name: 'home',
  props: {
    msg: String
  },
  data() {
    return {
        video: {},
        canvas: {},
        cameraActive: true,
        captures: [],
        config: Config,
        number: 4,
        numberActive: false,
        setInterval: null
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
      this.number = 4;
      this.setInterval = setInterval(() => {
        this.numberActive = true;
        this.number--
        if (this.number <= 0) {
          this.numberActive = false;
          this.clearSetInterval()
          this.canvas = this.$refs.canvas;
          this.canvas.getContext("2d").webkitImageSmoothingEnabled = false;
          this.canvas.getContext("2d").mozImageSmoothingEnabled = false;
          this.canvas.getContext("2d").imageSmoothingEnabled = false;
          this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
          this.captures.push(this.canvas.toDataURL("image/png"));
          this.cameraActive = false;
        }
      }, this.config.waitTime);
    },
    clearSetInterval() {
      clearInterval(this.setInterval);
    },
    async created() {      
      const el = this.$refs.printMe;
      const options = {
       type: 'dataURL',
       dpi: 144,
      }
      const output = await this.$html2canvas(el, options);
      const imageb64 = output.replace('data:image/png;base64,' , ''); 
      const msg = {
        to: this.$route.query.email,
        from: this.config.emailSendGrid,
        subject: this.$route.query.title,
        html: `<p>Company: ${this.$route.query.company}</p>`,
        attachments: [
          {
            content: imageb64,
            filename: 'some-attachment.jpg',
            type: 'image/jpg',
            disposition: 'attachment',
            contentId: 'mytext',
          },
        ],
      };
      
      try {
        await axios.post(this.config.urlApi, msg)
        this.$router.push(this.config.routes.message);
      } catch (e) {
        console.log(e);
      }
    },
    retake() {
      this.canvas = this.$refs.canvas;
      this.canvas.getContext("2d").clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.cameraActive = true;
    },
    goMain() {
      this.$router.push(this.config.routes.contact);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p.count-number {
      position: absolute;
      top: 50%;
      left: 50%;
      font-size: 200px;
      z-index: 3;
      transform: translate(-50%, -50%);
      margin: 0;
      color: white;
    }
    .m-top-34 {
      margin-top: 34px !important;
    }
    .container-home {
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      top: 44%;
    }
    video#videoElement {
      position: absolute;
      top: 25px;
      left: -8px;
      width: 821px;
      height: 563px;
      z-index: 0;
    }
    canvas#canvas {
      position: absolute;
      top: 22px;
      left: 27px;
      width: 751px;
      height: 565px;
      z-index: 0;
    }
    .container-cam {
      background-color: transparent;
      width: 796px;
      height: 590px;
      margin: 0 auto;
      box-shadow: 0 0 7px 0 #676767;
      position: relative;
    }
    .background-cam {
      width: calc(100% + 7px);
      height: 100%;
      z-index: 1;
      background-size: 100% 100%;
      background-repeat: no-repeat;
      position: relative;
      margin-left: -3px;
    }
    .m-top-30 {
      margin-top: 30px;
    }
</style>
