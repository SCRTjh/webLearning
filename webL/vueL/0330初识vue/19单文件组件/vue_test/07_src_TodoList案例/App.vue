<template>
  <div id="root" class="todo-container">
    <div class="todo-wrap">
      <MyHeader :addTodo="addTodo" />
      <MyList
        :todoList="todoList"
        :checkTodo="checkTodo"
        :deleteTodo="deleteTodo"
      >
      </MyList>
      <MyFooter
        :todoList="todoList"
        :checkAllTodo="checkAllTodo"
        :clearAllTodo="clearAllTodo"
      />
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyList from "./components/MyList";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todoList: [
        { id: "001", things: "抽烟", done: true },
        { id: "002", things: "喝酒", done: false },
      ],
    };
  },
  methods: {
    addTodo(todoObj) {
      this.todoList.unshift(todoObj);
      console.log("app,收到数", todoObj);
    },
    checkTodo(id) {
      this.todoList.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    deleteTodo(id) {
      this.todoList = this.todoList.filter((todo) => todo.id !== id);
    },
    checkAllTodo(done) {
      this.todoList.forEach((todo) => {
        todo.done = done;
      });
    },
    clearAllTodo() {
      this.todoList = this.todoList.filter((todo) => {
        return !todo.done;
      });
    },
  },
};
</script>

<style>
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>