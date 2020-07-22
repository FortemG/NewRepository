<template>
    <div class="main">
        <div class="nav">
            <p class="email">{{email}}</p>
            <button class="signOut" v-on:click="signOut()">sign out</button>
        </div>
        <hr class="hr">
        <div class="container">
            <div class="todoList">
                <vTodoItem @editTask = "editTask(index)" @deleteTask = "deleteTask(index)" v-for="(todo, index) in todos" :todo="todo" :key="index"/>
            </div>
            <vDrawer @indexClearing = "indexClearing" @closeDrawer = "closeDrawer" v-bind:seen="seen"  v-bind:todos="todos" v-bind:newTodo="newTodo" v-bind:index="index" />
            <div class="etc">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
            <button v-on:click="showDrawer()" class="newTask">➕</button>
            <div v-if="confirmation" v-on:click="confClosing()" data-close = "true" class="conf">
                <div class="confContent">
                    <p class="confText">Вы уверенны что хотите удалить задачу?</p>
                    <div class="confButtons">
                        <button @click="closeConfirm(), indexClearing()"  class="accept">Да</button>
                        <button @click="confClose(), indexClearing()" class="reject">Нет</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import vTodoItem from '../components/vTodoItem'
    import vDrawer from '../components/vDrawer'
    export default {
        data(){
            return{
                email: '',
                seen: false,
                confirmation: false,
                index: "",
                newTodo:{
                    todoText: '',
                    todoTitle: '',
                },
                todos: []
            }
        },
        components:{
            vTodoItem,
            vDrawer
        },
        created(){
            if(localStorage.email == ''){
                this.$router.push('/login')
            }
        },
        mounted(){
            this.email = localStorage.email
        },
        methods:{
            indexClearing(){
                this.index = ""
            },
            closeDrawer(){
                this.seen = false;
            },
            editTask(index){
                this.seen = true;
                this.newTodo.todoText = this.todos[index].todoText;
                this.newTodo.todoTitle = this.todos[index].todoTitle;
                this.index = index;
            },
            deleteTask(index){
                this.confirmation = true;
                this.index = index;
            },
            signOut(){
                localStorage.email = ''
                this.email = ''
                this.$router.push('/login')
            },
            showDrawer(){
                this.seen = true;
            },
            confClosing(){
                if (event.target.dataset.close){
                    this.confirmation = false;
                }
            },
            confClose(){
                this.confirmation = false
            },
            closeConfirm(){
                this.todos.splice(this.index,1)
                this.confirmation = false
            }

        }
    }
</script>

<style lang="scss" scoped>
    .container{
        margin: 0 auto;
        max-width: 1200px;
    }
    .nav{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .email{
        margin: 20px;
        padding: 0px;
        display: flex;
        align-items: center;
    }
    .signOut{
        margin: 20px;
        padding: 10px;
    }
    .hr{
        margin: 0px;
    }
    .newTask{
        border-radius: 50%;
        width: 60px;
        height: 60px;
        text-align: center;
        font-size: 25px;
        outline: none;
        position: fixed;
        bottom: 50px;
        right: 50px;
    }
    .todoList{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .conf{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        top: 0px;
        left: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .confContent{
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .confText{
        margin: 10px 10px;
    }
    .confButtons{
        display: flex;
        justify-content: space-around;
        min-width: 100px;
        margin-bottom: 10px;
    }
    .etc{
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
    .dot{
        margin-right: 5px;
        background-color: black;
        width: 10px;
        height: 10px;
    }
</style>