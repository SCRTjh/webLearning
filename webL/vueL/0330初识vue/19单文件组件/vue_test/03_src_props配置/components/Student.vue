<template>
  <div>
    <h2>学生名称:{{ name }}</h2>
    <h2>学生年龄:{{ MyAge + 1 }}</h2>
    <h2>学生性别:{{ sex }}</h2>
    <button @click="updateAge">点击修改年龄</button>
  </div>
  <!-- 组件结构 -->
</template>


<script>
export default {
  name: "studentName",
  data() {
    return {
      MyName: "tjh",
      MyAge: this.age,
    };
  },
  methods: {
    updateAge() {
      this.MyAge = this.MyAge + 1;
    },
  },

  //简单声明接收
  // props: ["name", "age", "sex"],

  //接收的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   sex:String
  // },

  //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
  props: {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      default: 18,
    },
    sex: {
      type: String,
      default: "男",
    },
  },
};
</script>



