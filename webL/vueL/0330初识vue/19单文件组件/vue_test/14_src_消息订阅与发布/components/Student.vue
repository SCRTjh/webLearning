<template>
  <div class="demo">
    <h2>学生名称:{{ name }}</h2>
    <h2>学生年龄:{{ MyAge }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="sendStudentName">把学生名给School组件</button>
  </div>

  <!-- 组件结构 -->
</template>


<script>
import pubsub from "pubsub-js";
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
      // this.$bus.$emit("hello", this.name);
      pubsub.publish("hello", 666);
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

