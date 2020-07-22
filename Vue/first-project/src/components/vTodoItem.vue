<template>
    <div>   
        <div class="task">
            <div class="header">
                <button @click="editTask()" class="edit">edit</button>
                <button @click="deleteTask()" class="delete">delete</button>
            </div>
            <div class="main">
                <p class="taskTitle">{{todo.todoTitle}}</p>
                <p class="taskDesc">{{todo.todoText}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['todo'],
    methods:{
        editTask(){
            this.$emit("editTask")
        },
        deleteTask(){
            this.$emit("deleteTask");
        }
    }
}
</script>

<style lang="scss">
    .task{
        min-width: 310px;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
        word-break: break-all;
        padding: 0px;
        margin-top: 20px;
    }
    .header{
        border-bottom: 1px solid black;
        margin-top: 5px;
        padding-bottom: 5px;
        display: flex;
        justify-content: flex-end;
    }
    .taskDesc{
        max-width: 310px;
    }
    .delete{
        margin: 0px 10px;
    }
    .edit{
        margin-left: 10px;
    }

</style>