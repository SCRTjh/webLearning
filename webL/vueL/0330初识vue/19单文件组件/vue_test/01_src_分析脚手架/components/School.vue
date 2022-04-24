<template>
  <div class="demo">
    <h2>学校名称:{{ schoolName }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
  <!-- 组件结构 -->
</template>


<script>
export default {
  name: "schoolName",
  data() {
    return {
      schoolName: "sgg",
      address: "beijing",
    };
  },
  methods: {
    showName() {
      alert(this.schoolName);
    },
  },
};
</script>


<style>
.demo {
  background-color: pink;
}
</style>


