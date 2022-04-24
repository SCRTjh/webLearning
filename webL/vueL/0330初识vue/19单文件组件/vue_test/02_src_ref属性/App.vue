<template>
  <div>
    <School ref="sch"></School>
    <Student></Student>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDOM">点我输出上方的dom元素</button>
  </div>
</template>

<script>
import School from "./components/School.vue";
import Student from "./components/Student.vue";

export default {
  name: "App",
  data() {
    return {
      msg: "欢迎学习Vue!",
    };
  },
  components: {
    School,
    Student,
  },
  methods: {
    showDOM() {
      console.log(this.$refs.title);
      console.log(this.$refs.sch);
    },
  },
};
</script>

<style>
</style>