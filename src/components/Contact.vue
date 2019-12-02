<template>
<div class="app" v-bind:style="{ backgroundImage: 'url(' + config.bg + ')' }">
    <div class="container-contact">  
        <div class="container-form">
        <div class="container-form container-form-inputs">
            <img class="img-robot" v-bind:src="config.contact.robot" />
            <div class="container-text-form">
                <p> {{config.contact.text}}</p>
            </div>
        </div>
        <div class="container-form container-form-inputs">
            <input autocomplete="off" class="input-form" id="fullName" :value="inputs['fullName']" @focus="onInputFocus" @input="onInputChange" :placeholder="config.contact.fullName" />    
            <input autocomplete="off" class="input-form" id="company" :value="inputs['company']" @focus="onInputFocus" @input="onInputChange" :placeholder="config.contact.company" />    
            <input autocomplete="off" class="input-form" id="title" :value="inputs['title']" @focus="onInputFocus" @input="onInputChange" :placeholder="config.contact.title" />    
            <input autocomplete="off" class="input-form" id="email" :value="inputs['email']" @focus="onInputFocus" @input="onInputChange" :placeholder="config.contact.email" />
            <div class="container-checkbox">
                <input type="checkbox" id="check" v-model='check' name="check" value="check">
                <label for="check"></label>
                <span class="text-checkBox">{{config.contact.checkConsent}} <br>{{config.contact.checkText}}</span>
            </div>
            <br>
        </div>
    </div>
    <SimpleKeyboard
      @onChange="onChange"
      :input="inputs[inputName]"
      :inputName="inputName"/>
    </div>
    <div class="container-buttons">
        <div v-for="button in config.contact.buttons" v-bind:key="button.name">
            <button :disabled="(button.name === 'Next')? !isComplete : false"
            v-bind:class="{ 'input-form button-form container-center': (button.name === 'Next'), 'btn container-center': (button.name === 'Main') }" 
            v-bind:style="{ backgroundImage: 'url(' + button.url + ')' }" 
            v-on:click="(button.name === 'Next')? camera() : backToPage()">{{button.label}}</button>
        </div>
    </div>
</div>
</template>

<script>
import SimpleKeyboard from "./SimpleKeyboard";
import Config from './configs/config';
export default {
  name: 'Contact',
  components: {
    SimpleKeyboard
  },
  data: () => ({
    inputs: {
      fullName: "",
      company: "",
      title: "",
      email: "",
    },
    check: false,
    inputName: "fullName",
    config: Config
  }),
  props: {
    msg: String
  },
  computed: {
    isComplete () {
      return this.inputs['fullName'] && this.inputs['company'] && this.inputs['title'] && this.inputs['email'] && this.check;
    }
  },
  methods: {
    camera() {
      this.$router.push(
        {
        path: this.config.routes.home, 
        query: this.inputs
        });
    },
    onChange(input) {
      this.inputs[this.inputName] = input;
    },
    onInputChange(input) {
      this.inputs[input.target.id] = input.target.value;
    },
    onInputFocus(input) {
      this.inputName = input.target.id;
    },
    backToPage() {
      window.location.href = this.config.linkBm3group;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .simple-keyboard.hg-theme-default.hg-layout-default {
        margin: 0 auto;
        margin-top: 45px;
    }
    .simple-keyboard {
        max-width: 950px;
    }
    .container-contact {
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        top: 45%;
        width: 74%;
    }
    .input-form:focus {
        outline: 2px solid #0000ff6b;
    }
    .container-form {
        width: 100%;
        margin: 0 auto;
    }
    .container-form-inputs {
        width: 80%;
    }
    .container-text-form {
        float: left;
        flex: 0 0 50%;
        width: calc(100% - 40%);
    }
    .container-text-form p {
        font-size: 59px;
        font-weight: 900;
        text-align: left;
        padding-left: 30px;
        color: white;
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
    .img-robot {
        float: left;
        flex: 0 0 50%;
        max-width: 50%;
        height: 442px;
        width: calc(100% - 60%);
    }
    input[type=checkbox] + label {
        display: inline-flex;
        margin: 0.2em;
        cursor: pointer;
        padding: 0.2em;
        padding-left: 60px;
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
        padding-left: 0.4em;
        padding-bottom: 0.3em;
        margin-right: 0em;
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
        font-size: 17px;
        position: relative;
        top: -17px;
        font-weight: bold;
        text-align: left;
        width: 500px;
        color: white;
    }
    .container-center {
        display: table;
        margin: 0 auto;
    }
    .container-checkbox {
        margin-top: 25px;
        margin-bottom: 25px;
    }
</style>
