<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
  <!-- 组件结构 -->
</template>


<script>
export default {
  name: "schoolName",
  data() {
    return {
      name: "sgg",
      address: "beijing",
    };
  },
  mounted() {
    this.$bus.$on("hello", (data) => {
      console.log("我是School组件，收到了数据", data);
    });
  },
  beforeDestroy() {
    this.$bus.$off("hello");
  },
};
</script>


<style>
.demo {
  background-color: pink;
}
</style>


