<template>
  <div>
    <h2>学生名称:{{ name }}</h2>
    <h2>学生年龄:{{ MyAge }}</h2>
    <h2>学生性别:{{ sex }}</h2>
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
};
</script>



