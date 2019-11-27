<template>
    <div>  
        <div class="container-form">
        <div class="container-form container-form-inputs">
            <img class="img-robot" src="../assets/robot.png" />
            <div class="container-text-form">
                <p> Fill out the form below and take a picture with me.</p>
            </div>
        </div>
        <div class="container-form container-form-inputs">
            <input class="input-form" type="text" placeholder="Full Name" />    
            <input class="input-form" type="text" placeholder="Company" />    
            <input class="input-form" type="text" placeholder="Title" />    
            <input class="input-form" type="text" placeholder="E-mail" />
            <div class="container-checkbox">
                <input type="checkbox" id="fruit1" name="fruit-1" value="Apple">
                <label for="fruit1"></label>
                <span class="text-checkBox">Consent* <br>I agree to receive email messages from RYCOM Corporation</span>
            </div>
            <br>
            <button class="input-form button-form" v-on:click="camera()">Next</button>
        </div>
    </div>
    <button class="btn-return"></button>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  props: {
    msg: String
  },
  methods: {
    camera() {
      this.$router.push('/home');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
    .container-form {
        width: 50%;
        margin: 0 auto;
    }
    .container-form-inputs {
        width: 80%;
    }
    .container-text-form {
        float: left;
        flex: 0 0 50%;
        max-width: 64%;
        
    }
    .container-text-form p {
        font-size: 59px;
        font-weight: bold;
        text-align: left;
        padding-left: 30px;
        color: #6c6d71;
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
    .img-robot {
        float: left;
        flex: 0 0 50%;
        max-width: 50%;
        height: 442px;
    }
    input[type=checkbox] + label {
        display: inline-flex;
        margin: 0.2em;
        cursor: pointer;
        padding: 0.2em;
    }

    input[type=checkbox] {
        display: none;
    }

    input[type=checkbox] + label:before {
        content: "\2714";
        border: 0.1em solid #e34d32;
        border-radius: 0.2em;
        display: inline-block;
        width: 1.5em;
        height: 1.5em;
        padding-left: 0.2em;
        padding-bottom: 0.3em;
        margin-right: 0.2em;
        vertical-align: bottom;
        color: transparent;
        -webkit-transition: .2s;
        transition: .2s;
        line-height: 1.8;
        font-size: 28px;
    }

    input[type=checkbox]:checked + label:before {
        background-color: #e24c32;
        border-color: #e45332;
        color: #fff;
    }

    input[type=checkbox]:disabled + label:before {
        border-color: #aaa;
    }

    input[type=checkbox]:checked:disabled + label:before {
        background-color: #bfb;
        border-color: #bfb;
    }
    .text-checkBox {
        display: inline-flex;
        font-size: 19px;
        position: relative;
        top: -17px;
        font-weight: bold;
        text-align: left;
    }
</style>
