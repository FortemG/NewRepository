<template>
  <div v-if="seen" v-on:click="fieldClosing()" data-close = "true"  class="drawer">
                <div class="drawerContent">
                    <div class="drawerAdd">
                        <p class="drawerTitle">Title:</p>
                        <input class="drawerInput" v-model="newTodo.todoTitle" type="text">
                        <p>Description:</p>
                        <textarea v-model="newTodo.todoText" name="" id="" cols="30" rows="5"></textarea>
                        <div class="drawerButtons">
                            <button v-on:click="addTask(), formCleaning()" >Add</button>
                            <button v-on:click="closeDrawer(), formCleaning()">❌</button>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    props: ['seen','todos','index','newTodo'],
    methods:{
        addTask(){
                if(this.index === ""){
                    this.todos.push({
                        todoText: this.newTodo.todoText,
                        todoTitle: this.newTodo.todoTitle
                    })
                }else{
                    this.todos.splice(this.index, 1, {
                        todoText: this.newTodo.todoText,
                        todoTitle: this.newTodo.todoTitle
                    })  
                }
                this.$emit("indexClearing")
        },
        closeDrawer(){
                this.$emit("closeDrawer")
                this.$emit("indexClearing")
            },
        fieldClosing(){
            if (event.target.dataset.close){
                this.$emit("closeDrawer")
                this.$emit("indexClearing")
                this.newTodo.todoText = ""
                this.newTodo.todoTitle = ""
            }
        },
        formCleaning(){
            this.newTodo.todoText = ""
            this.newTodo.todoTitle = ""
        }
    }
}
</script>

<style>
    .drawer{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        top: 0px;
        left: 0px;
    }
    .drawerContent{
        max-width: 400px;
        height: 100%;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .drawerAdd{
        margin-top: 300px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
    .drawerInput{
        padding-right: 58px;
    }
    .drawerButtons{
        margin-top: 20px;
        display: flex;
        justify-content: space-around;
        min-width: 233px;
    }
</style>