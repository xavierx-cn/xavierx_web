<template>
  <div class="row">
    <h1>时间戳</h1>

    <!-- 当前时间 -->
    <div id="timeNow" class="row">
      <el-row :gutter="20">
        <el-col :span="9">
          <div>{{ timeNow.timestamp }} - {{ timeNow.stringTime }}</div>
        </el-col>
        <el-col :span="6">
          <div>
            <el-button type="primary" @click="updateNow">刷新</el-button>
          </div>
        </el-col>
      </el-row>
    </div>

    <!-- 时间戳转字符串 -->
    <div id="tsTransString" class="row">
      <el-row :gutter="20">
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <el-input
              placeholder="请输入时间戳"
              v-model="toStringTime.timestamp"
            >
            </el-input>
          </div>
        </el-col>
        <el-col :span="3"
          ><div class="grid-content bg-purple">
            <el-select v-model="toStringTime.timeUnit" placeholder="时间单位">
              <el-option
                v-for="item in timeUnitOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="2"
          ><div class="grid-content bg-purple"></div>
          <el-button type="primary" @click="transToStringTime">转换</el-button>
        </el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <p>{{ toStringTime.stringTime }}</p>
          </div></el-col
        >
      </el-row>
    </div>

    <!-- 字符串转时间戳 -->
    <div id="stringTransTs" class="row">
      <el-row :gutter="20">
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <el-input
              placeholder="请输入字符串时间"
              v-model="toTimestamp.stringTime"
            >
            </el-input>
          </div>
        </el-col>
        <el-col :span="3"
          ><div class="grid-content bg-purple">
            <el-select v-model="toTimestamp.timeUnit" placeholder="时间单位">
              <el-option
                v-for="item in timeUnitOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
        </el-col>
        <el-col :span="2"
          ><div class="grid-content bg-purple"></div>
          <el-button type="primary" @click="tansToTimestamp">转换</el-button>
        </el-col>
        <el-col :span="6"
          ><div class="grid-content bg-purple">
            <p>{{ toTimestamp.timestamp }}</p>
          </div></el-col
        >
      </el-row>
    </div>
  </div>
</template>

<!--suppress JSIncompatibleTypesComparison -->
<script>
import { defineComponent, ref } from "vue";
import Moment from "moment";

export default defineComponent({
  name: "Timestamp",
  setup() {},
  mounted() {
    this.updateNow();
  },
  data() {
    return {
      timeNow: {
        timestamp: ref(),
        stringTime: ref(""),
      },
      toStringTime: {
        timestamp: ref(),
        stringTime: ref(""),
        timeUnit: ref(1),
      },
      toTimestamp: {
        timestamp: ref(),
        stringTime: ref(""),
        timeUnit: ref(1),
      },
      timeUnitOptions: [
        { value: 1, label: "秒" },
        { value: 2, label: "毫秒" },
        { value: 3, label: "纳秒" },
      ],
    };
  },
  methods: {
    // 时间戳转换成字符串时间
    transToStringTime() {
      let tsu = this.toStringTime.timeUnit;
      let ts = this.toStringTime.timestamp;
      let timeFormat = Moment.defaultFormat

      // noinspection JSIncompatibleTypesComparison
      if (tsu === 1) {
        ts *= 1000;
      } else if (tsu === 2) {
        ts *= 1;
      } else if (tsu === 3) {
        ts /= 100000;
      }

      this.toStringTime.stringTime = Moment.moment(ts).format(timeFormat);
    },

    // 字符串时间转换成时间戳
    tansToTimestamp() {
      let tsu = this.toTimestamp.timeUnit;
      let st = this.toTimestamp.stringTime;

      if (tsu === 1) {
        this.toTimestamp.timestamp = Moment.moment(st).format("X");
      } else if (tsu === 2) {
        this.toTimestamp.timestamp = Moment.moment(st).format("x");
      } else if (tsu === 3) {
        this.toTimestamp.timestamp = Moment.moment(st).format("x") * 1000000;
      }
    },

    // 更新当前时间
    updateNow() {
      let now = Moment();
      this.timeNow.timestamp = now.unix();
      this.timeNow.stringTime = now.format();
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  margin-bottom: 15px;
}
</style>
