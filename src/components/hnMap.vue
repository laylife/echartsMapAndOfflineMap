<template>
  <div class="echarts-wrapper" ref="province_map"></div>
</template>

<script>
import * as echarts from "echarts";
import { ChinaData, ProvinceData } from "china-map-geojson";
export default {
  data() {
    return {
      myChart: null,
      close: require("../assets/image/map/icon-map-close.png"),
      mapAlert: require("../assets/image/map/map-alert.png"),
      mapLine: require("../assets/image/map/map-line.png"),
      templeToolTip: null,
      // 当前选中的高亮数据
      currentData: null,
      // 默认选项配置
      option: null,
    };
  },
  watch: {
    templeToolTip: {
      handler(newVal, oldVal) {
        // console.log(newVal, oldVal, "---------watch");
        let tooltipButton = document.querySelector("#close");
        tooltipButton.addEventListener("click", this.closeAlert);
        let toBdMap = document.querySelector("#btn");
        toBdMap.addEventListener("click", this.toBaiDuMap);
      },
    },
  },
  mounted() {
    this.initEchartsMap();
  },
  methods: {
    initEchartsMap() {
      let colorArr = ["#EFED1E", "#01F408", "#EE3A3B", "#4ADBEC", "#0FEEFB"];
      var myChart = echarts.init(this.$refs.province_map, null, {
        renderer: "canvas",
        useDirtyRect: false,
      });
      const close = this.close;
      const line = this.mapLine;
      echarts.registerMap("湖南", ProvinceData.Hunan);
      this.myChart = myChart;
      const data = [
        {
          name: "长沙市",
          value: this.randomData(),
          lnglag: [112.937421,28.24431]
        },
        {
          name: "株洲市",
          value: this.randomData(),
          lnglag: [113.139791,27.8403]
        },
        {
          name: "湘潭市",
          value: this.randomData(),
          lnglag: [112.951219,27.844389]
        },
        {
          name: "衡阳市",
          value: this.randomData(),
          lnglag: [112.574075,26.908197]
        },
        {
          name: "常德市",
          value: this.randomData(),
          label: {
            offset: [20, 0],
          },
          lnglag: [111.700203,29.039609]
        },
        {
          name: "张家界市",
          value: this.randomData(),
          lnglag: [110.485981,29.136572]
        },
        {
          name: "益阳市",
          value: this.randomData(),
          lnglag: [112.362506,28.569657]
        },
        {
          name: "郴州市",
          value: this.randomData(),
          lnglag: [113.024808,25.78933]
        },
        {
          name: "永州市",
          value: this.randomData(),
          label: {
            offset: [10, 0],
          },
          lnglag: [111.617415,26.437122]
        },
        {
          name: "怀化市",
          value: this.randomData(),
          lnglag: [109.998453,27.590604]
        },
        {
          name: "娄底市",
          value: this.randomData(),
          lnglag: [111.99456,27.705291]
        },
        {
          name: "岳阳市",
          value: this.randomData(),
          lnglag: [113.135192,29.378577]
        },
        {
          name: "邵阳市",
          value: this.randomData(),
          lnglag:[111.470237,27.25404]
        },
        {
          name: "湘西土家族苗族自治州",
          value: this.randomData(),
          lnglag: [109.739831,28.268767]
        },
      ];
      let that = this;
      /* 地图高亮或选中的区域的颜色渐变*/
      const areaColor = {
        type: "linear",
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0,
            color: "#05FDA6", // 0% 处的颜色
          },
          {
            offset: 1,
            color: "#0CFFD2", // 100% 处的颜色
          },
        ],
        global: false, // 缺省为 false
      };
      // 格式化toolTip样式
      let templeToolTip = `<div class="row">
              <div class="item">
                <div class="num">2021<span>万元</span></div>
                <div class="text">本年交易金额</div>
              </div>
              <div class="item">
                <div class="num">301<span>户</span></div>
                <div class="text">商户规模</div>
              </div>
              </div>
              <div class="row">
              <div class="item">
                <div class="num">184<span>户</span></div>
                <div class="text">月活商户</div>
              </div>
              <div class="item">
                <div class="num">509<span>万元</span></div>
                <div class="text">绑定存款</div>
              </div>
              </div><div id="btn" class="btn">进入地图</div><img class="img" @click="${that.closeAlert}" id="close" src="${close}"/>
              <img class="line" src="${line}"/>
              `;
      const option = {
        // 高亮或选中的弹窗
        tooltip: {
          show: false,
          trigger: "item",
          formatter: function (params, ticket, callback) {
            // var name = e.name ? e.name : '获取中';
            // var value = e.value ? e.value : '暂无数据'
            // return name + "：" + value;
            that.templeToolTip = params;
            let html = templeToolTip;
            return html;
          },
          alwaysShowContent: true,
          renderMode: "html",
          className: "echarts-tooltip echarts-tooltip-dark",
          position: function (point, params, dom, rect, size) {
            console.log(point);
            // 固定在顶部
            return [point[0] + 10, point[1] - 60];
          },
          triggerOn: "click",
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderWidth: 0,
          hideDelay: 0,
          padding: 0,
          enterable: true,
          
        },
        // visualMap: {
        //   show: false,
        //   min: 0,
        //   max: 100,
        //   inRange: {
        //     color: ['#0388FF']
        //   }
        // },
        emphasis: {
          disabled: false,
          label: {
            color: "#FFFFFF",
            fontSize: 16
          },
          itemStyle: {
            borderWidth: 2,
            borderColor: "#36b4bf",
            areaColor: areaColor,
            color: areaColor,
          },
        },
        geo: {
          map: "湖南",
          roam: false,
          zoom: 1.2,
          aspectScale: 0.9,
          itemStyle: {
            borderColor: "#36b4bf",
            areaColor: "#005568",
            color: "#005568",
          },
          emphasis: {
            disabled: false,
            label: {
              color: "#FFFFFF",
              fontSize: 16
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: "#36b4bf",
              areaColor: areaColor,
              color: areaColor,
            },
          },
          select: {
            disabled: false,
            label: {
              color: "#FFFFFF",
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: "#36b4bf",
              areaColor: areaColor,
              color: areaColor,
            },
          },
        },
        series: [
          {
            type: "map",
            map: "湖南",
            zoom: 1.2,
            aspectScale: 0.9,

            label: {
              show: true,
              color: "#00FFDB",
              position: ["50%", "50%"],
              overflow: "break",
              width: 80,
              fontSize: 16,
              fontFamily:'MyFont',
            },
            itemStyle: {
              borderWidth: 2,
              borderColor: "#36b4bf",
              areaColor: "#005568",
              color: "#005568",
            },
            select: {
              disabled: false,
              label: {
                color: "#FFFFFF",
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: "#36b4bf",
                areaColor: areaColor,
                color: areaColor,
              },
            },
            emphasis: {
              disabled: false,
              label: {
                color: "#FFFFFF",
                fontSize: 16
              },
              itemStyle: {
                borderWidth: 2,
                borderColor: "#36b4bf",
                areaColor: areaColor,
                color: areaColor,
              },
            },
            data: data,
          },
        ],
      };

      this.myChart.setOption(option);
      this.option = option;

      this.myChart.on("select", { seriesIndex: 1 }, (e) => {
        const tooltip = {
          tooltip: {
            show: true,
            alwaysShowContent: true,
          },
        };
        this.option = Object.assign(this.option, tooltip);
        this.myChart.setOption(this.option);
        this.currentData = e;
      });
    },
    randomData() {
      return Math.round(Math.random() * 100);
    },
    // 关闭弹窗
    closeAlert() {
      const tooltip = {
        tooltip: {
          show: false,
          alwaysShowContent: false,
        },
      };
      this.option = Object.assign(this.option, tooltip);
      this.myChart.setOption(this.option);
      let that = this;
      that.myChart.dispatchAction({
        type: "unselect",
        dataIndex: that.currentData.dataIndexInside,
      });
      // this.myChart.dispatchAction({
      //     type: 'tooltip.hideTip'
      // });
      // alert('Button clicked!');
    },
    // 进入百度地图
    toBaiDuMap() {
      console.log(this.templeToolTip)
      let lnglat = this.templeToolTip.data.lnglag;
      this.$router.push({path:'/bdMap',query:{ lng: lnglat[0],lat: lnglat[1] }})
      this.closeAlert();
    },
  },
};
</script>

<style lang="scss">
.echarts-wrapper {
  margin-top: 50px;
  margin-left: -118px;
  width: 600px;
  height: 634px;
}
.echarts-tooltip-dark {
  background-image: url(../assets/image/map/map-alert.png) !important;
  width: 348px !important;
  height: 160px !important;
  position: absolute;
  display: none;
}
.echarts-tooltip-dark .row {
  display: flex;
  width: 207px;
  justify-content: space-around;
  color: #00ffdb;
  margin-left: 60px;
  margin-top: 32px;
}
.echarts-tooltip-dark .row .item {
  width: 50%;
}
.echarts-tooltip-dark .row .item .num {
  font-family:'MyFont';
  font-size: 20px;
  color: #00ffdb;
  letter-spacing: 0.62px;
  text-align: center;
  font-weight: 500;
}
.echarts-tooltip-dark .row .item .num span {
  font-family:'MyFont';
  font-size: 12px;
  color: #00ffdb;
  letter-spacing: 0.55px;
  text-align: center;
  font-weight: 500;
}
.echarts-tooltip-dark .row .item .text {
  font-family:'MyFont';
  font-size: 13px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  font-weight: 500;
}
.echarts-tooltip-dark .row:nth-child(2) {
  margin-top: 3px;
}
.echarts-tooltip-dark .btn {
  background-image: linear-gradient(180deg, #00ffdb 0%, #3eefaf 100%);
  border-radius: 15.5px;
  width: 74px;
  height: 26px;
  font-family:'MyFont';
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.32);
  font-weight: 500;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  line-height: 26px;
  cursor: pointer;
}
.echarts-tooltip-dark .img {
  position: absolute;
  top: 30px;
  right: 20px;
  width: 18px;
  height: 18px;
  cursor: pointer;
}
.echarts-tooltip-dark .line {
  position: absolute;
  top: -15px;
  left: -30px;
  width: 159px;
  height: 100px;
}
</style>