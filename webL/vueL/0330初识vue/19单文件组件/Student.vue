<template>
  <div>
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ age }}</h2>
  </div>
  <!-- 组件结构 -->
</template>


<script>
export default {
  name: "student",
  data() {
    return {
      name: "tjh",
      age: 21,
    };
  },
};
</script>



