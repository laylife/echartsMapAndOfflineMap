<template>
  <div class="distribution_merchant">
    <div style="margin-right: 23px">
        <div id="waterDroplets" class="waterDroplets"></div>
        <div class="text">10万元以上</div>
    </div>
    <div style="margin-right: 23px">
        <div id="secondCon" class="waterDroplets"></div>
        <div class="text" >50万元以上</div>
    </div>
    <div>
        <div id="lastCon" class="waterDroplets"></div>
        <div class="text">100万元以上</div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-liquidfill";
export default {
  data() {
    return {};
  },

  methods: {
    initLine() {
      var myChart = echarts.init(document.getElementById("waterDroplets"));
      let option = {
        series: [
          {
            type: "liquidFill", //配置echarts图类型
            radius: "100%",
            center: ["50%", "50%"],
            //  shape: 'diamond',
            // 设置水球图类型（矩形[rect]，菱形[diamond]，三角形[triangle]，水滴状[pin],箭头[arrow]...） 默认为圆形
            data: [0.62], //设置波浪的值（或当前要显示的数据变量）
            //waveAnimation:false, //静止的波浪
            backgroundStyle: {
              borderWidth: 0,
              color: "transparent", //水球图内部背景色,设置为空，背景由父级设置bg
            },
            rich: {
              content: {
                fontSize: 20,
                align: "center",
                color: "#fff",
              },
            },
            label: {
              //标签设置
              position: ["50%", "50%"],
              //   formatter: "50%", //显示文本,
              fontSize: "20px", //文本字号,
              color: "#fff",
              fontFamily:'MyFont'
            },
            outline: {
              show:false,
              // borderDistance: 0,
              // itemStyle: {
              //   borderWidth: 0,
              //   borderColor: "#174240",
              //   shadowColor: "#2C7176",
              // },
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#3EEFAF", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#9AFFDB", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              }, //波浪的颜色
            //   color:"#3EEFAF",
              shadowBlur: 10,
              opacity: 0.7,
            },
            silent: true, //可以去除小手的效果和默认样式
          },
        ],
      };
      myChart && myChart.setOption(option);
    },
    initSecondLine() {
      var myChart = echarts.init(document.getElementById("secondCon"));
      let option = {
        series: [
          {
            type: "liquidFill", //配置echarts图类型
            radius: "100%",
            center: ["50%", "50%"],
            //  shape: 'diamond',
            // 设置水球图类型（矩形[rect]，菱形[diamond]，三角形[triangle]，水滴状[pin],箭头[arrow]...） 默认为圆形
            data: [0.55], //设置波浪的值（或当前要显示的数据变量）
            //waveAnimation:false, //静止的波浪
            backgroundStyle: {
              borderWidth: 1,
              color: "transparent", //水球图内部背景色
            },
            // rich: {
            //   content: {
            //     fontSize: 20,
            //     align: "center",
            //     color: "#fff",
            //   },
            // },
            label: {
              //标签设置
              position: ["50%", "50%"],
              //   formatter: "50%", //显示文本,
              fontSize: "20px", //文本字号,
              color: "#fff",
              fontFamily:'MyFont'
            },
            outline: {
              show:false,
              // borderDistance: 0,
              // itemStyle: {
              //   borderWidth: 1,
              //   borderColor: "#174240",
              //   shadowColor: " #2C7176 ",
              // },
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#FDE153", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#F3D51D", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              }, //波浪的颜色
              // color:"#F3D51D",
              shadowBlur: 10,
              opacity: 0.7,
            },
            silent: true, //可以去除小手的效果和默认样式
          },
        ],
      };
      myChart && myChart.setOption(option);
    },
    initLastLine() {
      var myChart = echarts.init(document.getElementById("lastCon"));
      let option = {
        series: [
          {
            type: "liquidFill", //配置echarts图类型
            radius: "100%",
            center: ["50%", "50%"],
            //  shape: 'diamond',
            // 设置水球图类型（矩形[rect]，菱形[diamond]，三角形[triangle]，水滴状[pin],箭头[arrow]...） 默认为圆形
            data: [0.11], //设置波浪的值（或当前要显示的数据变量）
            //waveAnimation:false, //静止的波浪
            backgroundStyle: {
              borderWidth: 1,
              color: "transparent", //水球图内部背景色
            },
            // rich: {
            //   content: {
            //     fontSize: 20,
            //     align: "center",
            //     color: "#fff",
            //   },
            // },
            label: {
              //标签设置
              position: ["50%", "50%"],
              //   formatter: "50%", //显示文本,
              fontSize: "20px", //文本字号,
              color: "#fff",
              fontFamily:'MyFont'
            },
            outline: {
              show:false,
              // borderDistance: 0,
              // itemStyle: {
              //   borderWidth: 1,
              //   borderColor: "#174240",
              //   shadowColor: " #2C7176 ",
              // },
            },
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#6DCDE6", // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#38A0D6", // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              }, //波浪的颜色
            //   color:"#3EEFAF",
              shadowBlur: 10,
              opacity: 0.7,
            },
            silent: true, //可以去除小手的效果和默认样式
          },
        ],
      };
      myChart && myChart.setOption(option);
    },
  },
  mounted() {
    this.initLine();
    this.initSecondLine()
    this.initLastLine()
  },
};
</script>

<style scoped lang="scss" >
.distribution_merchant {
  position: absolute;
  top: 77px;
  left: 50%;
  display: flex;
  width: 100%;
justify-content: center;
  transform: translateX(-50%);
  >div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
.waterDroplets {
  width: 73px;
  height: 73px;
  background: url(../../assets/image/ty_bg.png) no-repeat;
  background-size: 100% 100%;
}
.text{
    font-size: 18px;
color: #DCDCDC;
letter-spacing: 0;
text-align: center;
font-weight: 500;
margin-top: 9px;
}
</style>