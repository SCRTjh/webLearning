<template>
  <div class="demo">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生年龄:{{ MyAge }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">sendStudent</button>
    <button @click="unbind">解绑</button>
    <button @click="death">西内</button>
  </div>
  <!-- 组件结构 -->
</template>


<script>
export default {
  name: "studentName",
  data() {
    return {
      name: "tjh",
      MyAge: 18,
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      this.$emit("atguigu", this.name, 555, 666);
      this.$emit("demo");
    },
    unbind() {
      // this.$off("atguigu"); //解绑一个自定义事件
      this.$off(["atguigu", "demo"]);
      // this.$off()
    },
    death() {
      this.$destroy(); //销毁了当前student组件的实例，销毁后所有Student实例的自定义事件全都不奏效
    },
  },
};
</script>

// npm view webpack versions
<style scoped>
.demo {
  background-color: orange;
}
</style>

