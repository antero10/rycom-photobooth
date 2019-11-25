<template>
<div class="app">
  <div class="app">
      <div class="hello">
        <img class="img-logo" src="../assets/Orange_Rycom_Logo.png"/>
        <div>
            <div class="check-icon"></div>
            <p class="color-grey">YOU PICTURE HAS BEEN SENT TO YOUR EMAIL!</p>
            <p class="color-orange">THANK YOU FOR VISITING RYCOM´S SMART STATION</p>
        </div>
        <button class="btn-return"></button>
      </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'message',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
        width: 20%;
        margin: 0 auto;
        margin-bottom: 50px;
    }
    .btn-return {
        background-image: url(../assets/Main_Menu_Button.png);
        width: 213px;
        height: 70px;
        background-size: 100%;
        background-repeat: no-repeat;
        margin: 0 auto;
        margin-top: 40px;
        cursor: pointer;
        border: none;
    }
    .btn-return:focus {
        outline: none;
    }
</style>
