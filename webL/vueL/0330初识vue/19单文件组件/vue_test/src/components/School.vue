<template>
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
  </div>
  <!-- 组件结构 -->
</template>


<script>
import pubsub from "pubsub-js";
export default {
  name: "schoolName",
  data() {
    return {
      name: "sgg",
      address: "beijing",
    };
  },
  methods: {
    demo(msgName, data) {
      console.log("有人发布了hello消息，回调执行了", data);
    },
  },
  mounted() {
    // this.$bus.$on("hello", (data) => {
    //   console.log("我是School组件，收到了数据", data);
    // });
    this.pubid = pubsub.subscribe("hello", this.demo);
  },
  beforeDestroy() {
    // this.$bus.$off("hello");
    pubsub.unsubcribe(this.pubid);
  },
};
</script>


<style>
.demo {
  background-color: pink;
}
</style>


