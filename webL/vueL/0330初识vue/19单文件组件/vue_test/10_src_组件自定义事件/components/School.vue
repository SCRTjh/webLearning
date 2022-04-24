<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="sendSchoolName">name</button>
  </div>
  <!-- 组件结构 -->
</template>


<script>
export default {
  name: "schoolName",
  props: ["getSchoolName"],
  data() {
    return {
      name: "sgg",
      address: "beijing",
    };
  },
  methods: {
    sendSchoolName() {
      this.getSchoolName(this.name);
    },
  },
};
</script>


<style>
.demo {
  background-color: pink;
}
</style>


