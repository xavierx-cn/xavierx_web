<template>
 
  <!-- <h1>XBox</h1> -->
  <el-row class="tac" :gutter="30">
    <el-col :span="3">
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="vertical"
        @select="handleSelect"
    >
      <el-menu-item index="1" @click="toTimestamp">
        <i class="el-icon-time"></i>
        <template #title>时间戳</template>
      </el-menu-item>
      <el-menu-item index="2" @click="toTranslation">
        <i class="el-icon-document"></i>
        <template #title>翻译</template>
      </el-menu-item>
      <el-menu-item index="3">
      </el-menu-item>
    </el-menu>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
  </el-row>



</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "XBox",
  components: {
  },
  setup() {},
  mounted() {},
  data() {
    return {
        xBoxes: [

        ],
        activeName: ref()
    };
  },
  methods: {
    toTimestamp() {
      this.$router.push({path: "/xbox/timestamp"})
    },
    toTranslation() {
      console.log("timestamp")
      this.$router.push({path: "/xbox/translation"})
    }
  },
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
