<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll" /> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>{{ doneTotal }}</span
      >/{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">清楚所有已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todoList"],
  computed: {
    total() {
      return this.todoList.length;
    },
    doneTotal() {
      return this.todoList.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0);
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value) {
        // this.checkAllTodo(value);
        this.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    // checkAll(e) {
    //   this.checkAllTodo(e.target.checked);
    // },
    clearAll() {
      // this.clearAllTodo();
      this.$emit("clearAllTodo");
    },
  },
};
</script>

<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin: 5px;
}
</style>