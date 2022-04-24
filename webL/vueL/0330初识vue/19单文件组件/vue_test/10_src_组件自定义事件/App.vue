<template>
  <div>
    <!-- 通过父组件给子组件传递函数类型的props实现:子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件实现:子给父传递数据(第一种写法，使用@或v-on) -->
    <!-- <Student @atguigu="getStudentName"> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
    <Student ref="student"></Student>
    <h1 v-text="msg"></h1>
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
  methods: {
    getSchoolName(name) {
      console.log("app收到了学校名", name);
    },
    getStudentName(name) {
      console.log("getStudentName被调用了", name);
    },
    getDemo() {
      console.log("demo被调用了");
    },
  },
  components: {
    School,
    Student,
  },
  mounted() {
    setTimeout(() => {
      this.$refs.student.$on("atguigu", this.getStudentName);
      this.$refs.student.$on("demo", this.getDemo);
      // this.$refs.student.$once("atguigu", this.getStudentName);
    }, 3000);
  },
};
</script>

<style>
</style>