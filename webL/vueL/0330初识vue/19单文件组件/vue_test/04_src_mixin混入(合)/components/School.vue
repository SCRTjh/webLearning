<template>
  <div class="demo">
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
  <!-- 组件结构 -->
</template>


<script>
// import { mixin, mixin2 } from "../mixin";

export default {
  name: "schoolName",
  data() {
    return {
      name: "sgg",
      address: "beijing",
    };
  },
  // mixins: [mixin, mixin2],
};
</script>


<style>
.demo {
  background-color: pink;
}
</style>


