<template>
  <div class="merchant_distribution">
    <transition name="fade" mode="out-in">
      <div class="lx_con" v-if="activeName === '1'">
        <div style="display: flex">
          <div class="all pos">
            <div class="text">
              <numByte :num="num1"></numByte>
              <p>户</p>
            </div>
            <div class="name">pos</div>
          </div>
          <div class="all">
            <div class="text">
              <numByte :num="num2"></numByte>
              <p>户</p>
            </div>
            <div class="other_name">静态码</div>
          </div>
        </div>
        <div style="display: flex; margin-top: 11px">
          <div class="all pos">
            <div class="text">
              <numByte :num="num3"></numByte>
              <p>户</p>
            </div>
            <div class="other_name">个人</div>
          </div>
          <div class="all">
            <div class="text">
              <numByte :num="num4"></numByte>
              <p>户</p>
            </div>
            <div class="other_name">对公</div>
          </div>
        </div>
      </div>
    </transition>
    <transition name="fade-transform" mode="in-out">
      <div v-if="activeName === '2'" class="dq_con">
        <div id="barChart"></div>
      </div>
    </transition>
    <div class="btn">
      <div
        class="left_btn"
        @click="activeName = '1'"
        :class="{ isClick: activeName === '1' }"
      >
        类型分布
      </div>
      <div
        class="right_btn"
        @click="activeName = '2'"
        :class="{ isClick: activeName === '2' }"
      >
        地区分布
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import numByte from "@cp/numByte";
export default {
  data() {
    return {
      activeName: "1",
      num1: 2020,
      num2: 1010,
      num3: 333,
      num4: 44,
      dataList: [
        "长沙",
        "株洲",
        "岳阳",
        "娄底",
        "湘潭",
        "张家界",
        "怀化",
        "衡阳",
        "永州",
        "湘西",
        "益阳",
        "常德",
        "邵阳",
      ],
      list: [120, 100, 150, 80, 70, 110, 130, 120, 100, 150, 80, 70, 110],
    };
  },
  components: { numByte },
  watch: {
    activeName(n) {
      if (n === "2") {
        this.$nextTick(() => {
          this.initLine();
        }, 1000);
      } else {
        echarts.init(document.getElementById("barChart")).dispose(); //销毁
      }
    },
  },
  mounted() {},
  methods: {
    initLine() {
      var myChart = echarts.init(document.getElementById("barChart"));
      let option = {
        yAxis: [
          {
            type: "category",
            data: this.dataList,
            axisLabel: {
              color: "#fff",
              fontFamily: "MyFont",
            },
          },
          {
            type: "category",
            name: "市级分行",
            position: "left",
            axisLine: {
              show: true,
              lineStyle: {
                color: "#fff",
              },
            },
          },
        ],
        // 防止标签文字长度过长溢出
        grid: {
          left: "0%", // 增大 left 值可以增加 y 轴宽度
          // right: "10%", // 减小 right 值可以减少 y 轴宽度
          containLabel: true,
        },
        xAxis: {
          type: "value",
          axisLabel: {
            color: "#ACB6B9 ",
            fontWeight: "bolder",
            fontFamily: "MyFont",
          },
          splitLine: {
            lineStyle: {
              // 设置背景刻度横线
              color: "#A8A8A8",
            },
          },
        },
        series: [
          {
            data: this.list,
            type: "bar",
            showBackground: false,
            barMaxWidth: 9,
            itemStyle: {
              borderRadius: 4.5,
              color: function (params) {
                let colorList = [
                  ["#05FDA6", "#0CFFD0"],
                  // ['#FF516D', '#FFD1D9'],
                  // ['#DF67F5', '#F4C7FC'],
                  // ['#7245FF', '#D6C9FF'],
                  // ['#4964FF', '#C4CDFF'],
                  // ['#56BDED', '#CBE5F1'],
                  // ['#4EE0B6', '#B7EBDC'],
                  // ['#6AE34C', '#CAF3C0'],
                  // ['#FFD140', '#FFEEBA'],
                  // ['#FA8941', '#FED1B4'],
                  // ['#FF2B2B', '#FFC4C4']
                ];
                // let index = params.dataIndex;
                // if (index >= colorList.length) {
                //   index = params.dataIndex - colorList.length;
                // }
                return new echarts.graphic.LinearGradient(0, 0, 1, 1, [
                  {
                    offset: 0,
                    color: colorList[0][0],
                  },
                  {
                    offset: 1,
                    color: colorList[0][1],
                  },
                ]);
              },
            },
            label: {
              show: true,
              position: "right",
              fontSize: 12,
              color: "#fff",
              fontFamily: "MyFont",
            },
            // emphasis: {
            //   itemStyle: {
            //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            //       { offset: 0, color: "#0CFFD0" },
            //       { offset: 1, color: "#05FDA6" },
            //     ]),
            //   },
            // },
          },
        ],
      };
      myChart && myChart.setOption(option);
    },
  },
  created() {},
};
</script>

<style scoped lang="scss">
.lx_con {
  position: absolute;
  left: 50%;
  top: 68px;
  transform: translateX(-50%);
}
.all {
  background: url(../../assets/image/shfb_bg.png) no-repeat;
  background-size: 100% 100%;
  width: 110px;
  height: 134px;
  position: relative;
}
.pos {
  margin-right: 67px;
}
.text {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
  color: #00ffdb;
  letter-spacing: 0.75px;
  text-align: center;
  font-weight: 500;
  p {
    font-size: 14.4px;
    color: #00ffdb;
    letter-spacing: 0.66px;
    font-weight: 500;
  }
}
.name {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 22px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}
.other_name {
  position: absolute;
  bottom: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 17px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}
.btn {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  cursor: pointer;
}
.left_btn,
.right_btn {
  border: 1px solid #00ffdb;
  font-size: 14px;
  width: 76px;
  height: 22px;
  line-height: 22px;
  text-align: center;
  color: #00ffdb;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}
.left_btn {
  border-radius: 13.5px 0 0 13.5px;
  // border-right: 0px solid #00FFDB;;
}
.right_btn {
  border-radius: 0 13.5px 13.5px 0;
}
.isClick {
  color: #fff;
  background-color: #00ffdb;
}

.dq_con {
  position: absolute;
  top: 20px;
  left: 13px;
  width: 100%;
  height: 389px;
}
#barChart {
  height: 100%;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-100px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.fade-leave-active,
.fade-enter-active {
  transition: all 0.3s;
}
.fade-enter {
  opacity: 0;
  transform: translateX(100px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>