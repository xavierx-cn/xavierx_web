<template>
  <div class="hello">
    <h1>时间戳</h1>
    <div>{{ nowTimestamp }} - {{ nowStringTime }}</div>
    <el-row :gutter="20">
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-input
            placeholder="请输入时间戳"
            v-model="timestamp"
          ></el-input></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <el-select v-model="timeUnit" placeholder="请选择">
            <el-option
              v-for="item in timeUnitOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select></div
      ></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple"></div>
        <el-button @click="transToTimestamp">转换</el-button>
      </el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple">
          <p>{{ stringTime }}</p>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import moment from "moment";

export default defineComponent({
  name: "Timestamp",
  setup() {
  },
  mounted() {
      var now = moment()
      this.nowTimestamp = now.unix()
      this.nowStringTime = now.format()
  },
  data() {
    return {
      nowTimestamp: ref(0),
      nowStringTime: ref(''),
      timestamp: ref(0),
      stringTime: ref(""),
      timeUnit: ref(1),
      timeUnitOptions: [
        { value: 1, label: "秒" },
        { value: 2, label: "毫秒" },
        { value: 3, label: "纳秒" },
      ],
    };
  },
  methods: {
    transToTimestamp() {
      let tsu = this.timeUnit;
      let ts = this.timestamp;
      if (tsu == 1) {
        ts *= 1000;
      } else if (tsu == 2) {
        ts *= 1;
      } else if (tsu == 3) {
        ts /= 100000;
      }

      this.stringTime = moment().unix(ts).format();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
