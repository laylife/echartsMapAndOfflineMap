<template>
  <div class="pie-wrapper" ref="pie"></div>
</template>
<script>
import Highcharts, { color } from "highcharts/highstock";
import HighchartsMore from "highcharts/highcharts-more";
import HighchartsDrilldown from "highcharts/modules/drilldown";
import Highcharts3D from "highcharts/highcharts-3d";
HighchartsMore(Highcharts);
HighchartsDrilldown(Highcharts);
Highcharts3D(Highcharts);
export default {
  mounted() {
    this.initPie();
    // this.initVPie();
  },
  methods: {
    initPie() {
      var chart = Highcharts.chart(this.$refs.pie, {
        chart: {
          type: "pie",
          options3d: {
            enabled: true,
            alpha: 60,
            beta: 0,
          },
          backgroundColor: "transparent",
        },
        tooltip: {
          // pointFormat: "{point.percentage:.1f}%",
          pointFormat: '<b>{point.y}</b> ({point.percentage:.1f}%)<br/>'
        },
        credits:{
          enabled: false
        },
        title:{
          text: ''
        },
        // colors: ["#3EEFAF", "#33ADE8", "#FDE153"],
        legend:{
          enabled: true,
          margin: 10,
          itemDistance: 10,
          itemStyle:{
                  fontSize: 16,
                  color: '#DCDCDC',
                  fontFamily:'MyFont'
                 },
                 verticalAlign: 'top'
                //  y: -100
          // itemStyle:{
          //   color:"#fff"
          // }

        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            depth: 35,
            legendSymbol: 'rectangle',
            showInLegend: true,
            dataLabels: {
              enabled: true,
              shadow: false,
              backgroundColor: 'transparent',
              formatter(){ 
                console.log(this.point)
                return this.point.isNull ? void 0 : this.point.y+'%'; },
            },
          },
        },
        series: [
          {
            type: "pie",
            name: "",
            colorByPoint: true,
            data: [
              {
                name: '1万元以上',
                color: "#3EEFAF",
                y: 45,
                dataLabels:{
                  color: "#3EEFAF",
                  shadow: false,
                 style:{
                  fontSize: 16,
                  fontFamily:'MyFont',
                  textOutline: 'transparent'
                 }
                },
              },
              {
                name: '5万元以上',
                color: "#33ADE8",
                y: 45,
                dataLabels:{
                  color: "#33ADE8",
                  shadow: false,
                  style:{
                  fontSize: 16,
                  fontFamily:'MyFont',
                  textOutline: 'transparent'
                 }
                }
              },
              {
                name: "10万元以上",
                y: 10,
                color: "#FDE153",
                sliced: true,
                dataLabels:{
                  color: "#FDE153",
                  shadow: false,
                  style:{
                  fontSize: 16,
                  fontFamily:'MyFont',
                  textOutline: 'transparent'
                 }
                }
                // selected: true
              },
            ],
          },
        ],
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.pie-wrapper {
  width: 100%;
  height: 252px;
}
</style>