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
            <br>
            <button class="input-form button-form">Next</button>
        </div>
    </div>
    <div class="btn-return"></div>
    </div>
</template>

<script>
export default {
  name: 'contact',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn-return {
        background-image: url(../assets/Main_Menu_Button.png);
        width: 15%;
        height: 56px;
        background-size: 100%;
        background-repeat: no-repeat;
        margin: 0 auto;
        cursor: pointer;
        margin-top: 10px;
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
        font-size: 34px;
        font-weight: bold;
        text-align: left;
        padding-left: 30px;
        color: #6c6d71;
    }
    .input-form {
        background: linear-gradient(to right, rgba(226,72,49,1) 0%, rgba(233,117,55,1) 42%, rgba(233,117,55,1) 58%, rgba(226,72,49,1) 100%);
        border-radius: 30px;
        color: white;
        text-align: center;
        width: 100%;
        height: 42px;
        border: none;
        margin: 6px 0px;
        font-size: 15px;
    }
    .input-form::placeholder {
        color: white;
    }
    .button-form {
        width: 34%;
        box-shadow: 1px 1px 4px 0 #000000c7;
        font-size: 15px;
        margin-top: 10px;
        margin-bottom: 0;
    }
    .img-robot {
        float: left;
        flex: 0 0 50%;
        max-width: 50%;
        height: 300px;
    }
</style>
