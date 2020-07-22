<template>
    <div class="vLogin">
        <div class="inputBox">
            <img width="200px" height="200px" src="https://pokrovgold.ru/images/upl/img/1498203727.png" alt="">
            <p class="title">email:</p>
            <input  type="text" id="email" placeholder="Email" v-model="email"> 
            <p class="error" v-if="visible">email is invalid</p>
            <button class="button" v-on:click="signIn(email)" >sign in</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vLogin",
        data(){
            return{
                email: '',
                title: "Login",
                pattern: /[a-zA-Z0-9.+]*@[a-zA-Z]*\.[a-zA-Z]{1,3}/,
                visible: false
            }
        },
        methods: {
            signIn(email){
                if(email.match(this.pattern)){
                    localStorage.email = this.email
                    this.$router.push('/')
                }else{
                    this.visible = true;
                }
            }
        }
    }
</script>

<style lang="scss">
    .vLogin{
        margin-top: 300px;
        padding: 0px;
        display: flex;
        justify-content: center;
    }
    .title{
        margin: 0px;
    }
    .inputBox{
        display: flex;
        flex-direction: column;
        max-width: 200px;
        align-items: flex-start;
    }
    .button{
        margin: 0 auto;
    }
    #email{
        padding-right: 25px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .error{
        padding: 0px;
        margin: 10px;
        background: #73384a;
        color: red;
        max-width: 200px;
    }
</style>