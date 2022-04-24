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
};
</script>


<style>
.demo {
  background-color: pink;
}
</style>


