<template>
  <ul class="todo-main">
    <MyItems v-for="todoObj in todoList" :key="todoObj.id" :todo="todoObj" />
  </ul>
</template>

<script>
import MyItems from "./MyItems";

export default {
  name: "MyList",
  components: { MyItems },
  props: ["todoList", "checkTodo", "deleteTodo"],
};
</script>

<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>