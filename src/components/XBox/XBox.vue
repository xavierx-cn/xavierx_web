<template>
 
  <!-- <h1>XBox</h1> -->
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="时间戳" name="timestamp">
        <Timestamp/>
    </el-tab-pane>
    <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->
  </el-tabs>

</template>

<script>
import { defineComponent } from "vue";
import Timestamp from "./XBoxes/Timestamp.vue";

export default defineComponent({
  name: "XBox",
  components: {
      Timestamp
  },
  setup() {},
  mounted() {},
  data() {
    return {};
  },
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #ffffff;
  color: #70a1ff;
  /* line-height: 60px; */
}
</style>
