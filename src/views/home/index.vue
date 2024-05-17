<template>
  <ScreenAdapter>
    <div class="bgc">
      <div class="flex">
        <div class="hn_name">
          <img src="../../assets/image/hn_name.png" alt="" class="imgClass" />
        </div>

        <div class="platform_name">
          <img
            src="../../assets/image/platform_name.png"
            alt=""
            class="imgClass"
          />
        </div>
        <!-- 设置倒计时 -->
        <div class="date">
          <div>{{ curDate }}</div>
          <div class="week">{{ week }}</div>
          <div class="time">{{ time }}</div>
        </div>
      </div>
    </div>
    <div class="bg">
      <div class="left_module">
        <!-- 商户新增情况 -->
        <div class="merchant_addition_situation_bg">
          <div class="title">商户新增情况</div>
          <merchant_addition />
        </div>
        <!-- 商户分布情况 -->
        <div class="merchant_distribution_bg">
          <div class="title">商户分布</div>
          <merchant_distribution></merchant_distribution>
        </div>
      </div>
      <hnMap></hnMap>
      <div class="center_module">
        <div class="t_title">收单业务发展情况</div>
        <div class="line-wrapper" ref="line"></div>
      </div>

      <div class="right_module">
        <!-- 商户存款等级分布 -->
        <div class="distribution_merchant_deposit_levels_bg">
          <div class="title">商户存款等级分布</div>
          <Pie></Pie>
        </div>

        <!-- 商户交易额等级分布 -->
        <div class="distribution_merchant_transaction_volume_levels_bg">
          <div class="title">商户年交易额等级分布</div>
          <distribution_merchant></distribution_merchant>
        </div>

        <!-- 商户情况概览 -->
        <div class="overview_erchant_ituation_bg">
          <div class="title">商户情况概览</div>
          <overview_erchant></overview_erchant>
        </div>
      </div>
    </div>
  </ScreenAdapter>
</template>

<script>
import ScreenAdapter from "../../components/ScreenAdapter.vue";
import * as echarts from "echarts";
import Pie from "./pie.vue"; //商户存款等级分布
import merchant_distribution from "./merchant_distribution.vue"; //商户分布情况
import merchant_addition from "./merchant_addition.vue"; //商户新增
import overview_erchant from "./overview_erchant.vue"; //商户情况概览
import distribution_merchant from "./distribution_merchant.vue"; //商户情况概览
// 地图
import hnMap from "@/components/hnMap.vue";
import moment from "moment";
export default {
  data() {
    return {
      time: "",
      week:"",
      curDate:"",
      // curDate: moment(new Date()).format("YYYY年MM月DD日"),
      // week: moment().locale("zh-cn").format("dddd"),
      // time:moment().get('hours')+':'+moment().get('minutes')+':'+moment().get('seconds')
    };
  },
  components: {
    ScreenAdapter,
    Pie,
    merchant_addition,
    overview_erchant,
    merchant_distribution,
    distribution_merchant,
    hnMap,
  },
  mounted() {
    this.initLine();
    this.currentTime();
  },
// 销毁定时器
beforeDestroy() {
    // if (this.formatDate) {
    //   clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
    // }
  },
  methods: {
    formatDate() {
      //获取当前时间
      let myDate = new Date();
      let wk = myDate.getDay();
      let yy = String(myDate.getFullYear());
      let month = myDate.getMonth() + 1;
      let mm = String(
        month < 10 ? "0" + month : month
      );
      let dd = String(
        myDate.getDate() < 10 ? "0" + myDate.getDate() : myDate.getDate()
      );
      let hou = String(
        myDate.getHours() < 10 ? "0" + myDate.getHours() : myDate.getHours()
      );
      let min = String(
        myDate.getMinutes() < 10
          ? "0" + myDate.getMinutes()
          : myDate.getMinutes()
      );
      let sec = String(
        myDate.getSeconds() < 10
          ? "0" + myDate.getSeconds()
          : myDate.getSeconds()
      );
      let weeks = [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ];
      let week = weeks[wk];
      this.curDate = yy + ' 年 ' + mm + ' 月 ' + dd + ' 日'
      this.time = hou + ":" + min + ":" + sec;
      this.week = week
    },
    currentTime() {
      setInterval(this.formatDate);
    },
    // 中间得折线图初始化
    initLine() {
      var myChart = echarts.init(this.$refs.line);
      var option;

      option = {
        tooltip: {
          trigger: "axis",
        },
        legend: {
          align: "left",
          right: "2%",
          textStyle: {
            color: "#FFF",
            fontSize: 18,
            fontFamily: "MyFont",
          },
          data: [
            {
              name: "POS",
              itemStyle: {
                opacity: 0,
                color: "#3EEFAF",
              },
              lineStyle: {
                color: "#3EEFAF",
              },
            },
            {
              name: "静态码",
              itemStyle: {
                opacity: 0,
                color: "#FDE153",
              },
              lineStyle: {
                color: "#FDE153",
              },
            },
            {
              name: "交易额/百万元",
              itemStyle: {
                opacity: 0,
                color: "#C900F4",
              },
              lineStyle: {
                color: "#C900F4",
              },
            },
            {
              name: "绑定存款/十万元",
              itemStyle: {
                opacity: 0,
                color: "#7D3BFD",
              },
              lineStyle: {
                color: "#7D3BFD",
              },
            },
            {
              name: "商户规模",
              itemStyle: {
                opacity: 0,
                color: "#EF8F3E",
              },
              lineStyle: {
                color: "#EF8F3E",
              },
            },
          ],
        },
        grid: {
          left: "2%",
          right: "2%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: ["2%", "2%"],
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "10月"],
          // min: 5,
          axisLine: {
            onZero: false,
            lineStyle: {
              type: "solid",
              color: "#06FBED",
              width: 3,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            width: 12,
            color: "#FFF",
            fontSize: 18,
            fontFamily: "MyFont",
          },
        },
        yAxis: {
          type: "value",
          boundaryGap: false,
          axisLine: {
            show: true,
            onZero: false,
            lineStyle: {
              type: "solid",
              color: "#06FBED",
              width: 3,
            },
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            width: 12,
            color: "#FFF",
            fontSize: 18,
            fontFamily: "MyFont",
          },
          splitLine: {
            lineStyle: {
              type: [6, 30],
              color: "#06FBED",
              width: 1,
              opacity: 0.6,
              dashOffset: 12,
            },
            interval: 50,
          },
        },
        series: [
          {
            name: "POS",
            type: "line",
            stack: "Total",
            data: [120, 132, 101, 134, 90, 230, 210],
            itemStyle: {
              color: "#3EEFAF",
            },
          },
          {
            name: "静态码",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
            itemStyle: {
              color: "#FDE153",
            },
          },
          {
            name: "交易额/百万元",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
            itemStyle: {
              color: "#C900F4",
            },
          },
          {
            name: "绑定存款/十万元",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
            itemStyle: {
              color: "#7D3BFD",
            },
          },
          {
            name: "商户规模",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            itemStyle: {
              color: "#EF8F3E",
            },
          },
        ],
      };

      option && myChart.setOption(option);
    },
  },
};
</script>

<style lang="scss" scoped>
.bgc {
  position: relative;
  background: url("../../assets/image/header_bg.png") no-repeat;
  background-size: 100% 100%;
  height: 109px;
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
.imgClass {
  width: 100%;
  height: 100%;
}
.flex {
  display: flex;
  justify-content: space-between;
}
.hn_name {
  width: 180px;
  height: 56px;
  margin-top: 16px;
  margin-left: 47px;
}
.platform_name {
  width: 320px;
  height: 40px;
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
}
.date {
  margin-right: 47px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  font-size: 26px;
  color: #3affdc;
  letter-spacing: 0;
  font-weight: 500;
}
.week {
  margin-left: 13px;
}
.time {
  margin-left: 33px;
  // margin-top: 5px;
}
.bg {
  background: url(../../assets/image/bg.png) no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 973px;
  margin-top: -2px;
  display: flex;
  justify-content: space-between;
}
.center_module {
  position: absolute;
  bottom: 46px;
  left: 50%;
  width: 1030px;
  height: 319px;
  transform: translateX(-50%);
  z-index: 9;
  background: url(../../assets/image/development-situation-bg.png) no-repeat;
  background-size: 100% 100%;
  .t_title {
    // font-family: 'MyFont';
    font-size: 22px;
    color: #3affdc;
    letter-spacing: 1px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.61);
    font-weight: 500;
    position: absolute;
    top: 5px;
    left: 22px;
  }
  .line-wrapper {
    width: 100%;
    height: 268px;
    margin-top: 51px;
  }
}
.left_module {
  margin-top: 22px;
  margin-left: 20px;
}
.right_module {
  margin-top: 22px;
  margin-right: 20px;
}
.merchant_addition_situation_bg {
  background: url(../../assets/image/merchant_addition_situation_bg.png)
    no-repeat;
  background-size: 100% 100%;
  width: 379px;
  height: 462px;
  margin-bottom: 32px;
  position: relative;
}
.title {
  position: absolute;
  top: 5px;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
  font-size: 22px;
  // font-family: 'MyFont';
  color: #3affdc;
  letter-spacing: 1px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.61);
  font-weight: 500;
}
.merchant_distribution_bg {
  background: url(../../assets/image/merchant_distribution_bg.png) no-repeat;
  background-size: 100% 100%;
  width: 379px;
  height: 409px;
  position: relative;
}
.distribution_merchant_deposit_levels_bg {
  background: url(../../assets/image/distribution_merchant_deposit_levels_bg.png)
    no-repeat;
  background-size: 100% 100%;
  width: 379px;
  height: 310px;
  margin-bottom: 32px;
  position: relative;
  padding-top: 58px;
}
.distribution_merchant_transaction_volume_levels_bg {
  background: url(../../assets/image/distribution_merchant_transaction_volume_levels_bg.png)
    no-repeat;
  background-size: 100% 100%;
  width: 379px;
  height: 210px;
  margin-bottom: 32px;
  position: relative;
}
.overview_erchant_ituation_bg {
  background: url(../../assets/image/overview_erchant_ituation_bg.png) no-repeat;
  background-size: 100% 100%;
  width: 379px;
  height: 319px;
  position: relative;
}
</style>>
