<template>
  <div>
    <input v-model="newTodoText" @keyup.enter="addNewTodo" placeholder="Add a todo">
    <ul>
      <li is="todo-item" v-for="(todo,index) in todos" :key="todo.id" :title="todo.title" @remove="todos.splice(index,1)"></li>
    </ul>
  </div>

</template>

<script>
  import todoItem from './Todo-item';

  export default {
    data() {
      return {
        todos: [
          {
            id: 1,
            title: 'Do the dishes'
          },
          {
            id: 2,
            title: 'Take out the trash'
          },
          {
            id: 3,
            title: 'Mow the lawn'
          }
        ],
        nextTodoId: 4,
        newTodoText:''
      };
    },
    components: {
      todoItem
    },
    methods: {
      addNewTodo() {
        this.todos.push({
          id: this.nextTodoId++,
          title: this.newTodoText
        });
        this.newTodoText = '';
      }
    }
  };
</script>

<style lang="scss" scoped>

</style>

