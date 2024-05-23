<template>
  <div class="wrapper">
    <div id="map" :style="'height:'+height+'px;' "></div>
    
  </div>
</template>
<script>
export default {
    name: 'bd_map',
    data(){
       return{
        height: '',
        lnglat: [],
        isReload: false
       }
    },
    
  mounted() {
    console.log(this.$route.query)
    
    if(this.$route.query.lng){
      this.lnglat = [this.$route.query.lng,this.$route.query.lat]
    }else{
      // 默认长沙
      this.lnglat = [112.937421,28.24431]
    }
    
    
    let height = window.innerHeight
    this.height = height;
    let that = this;
    setTimeout(function(){
      that.initMap(that.lnglat);
    },300);
  },
 
  methods: {
    initMap(center) {
      var BMap = window.BMap || {};
      var map = new BMap.Map("map");

      var point = new BMap.Point(center[0], center[1]); // 创建点坐标
      map.centerAndZoom(point, 10); // 初始化地图，设置中心点坐标和地图级别
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
        // 创建点
      let markerPoint = new BMap.Point(center[0], center[1]);
      var marker = new BMap.Marker(markerPoint);
      map.addOverlay(marker); // 增加点

      // 创建图文信息窗口
      var opts = {
      width : 200,     // 信息窗口宽度
      height: 100,     // 信息窗口高度
      title : "海底捞王府井店" , // 信息窗口标题支持html
      enableAutoPan: false,// 是否开启信息窗口打开时地图自动移动
      enableMessage:false,//设置允许信息窗发送短息
    }
    var infoWindow = new BMap.InfoWindow("地址：北京市东城区王府井大街88号乐天银泰百货八层",opts);  // 创建信息窗口对象 
    // 添加覆盖物事件
    marker.addEventListener('click',e=>{
      // alert('该点的经纬度：'+e.point.lng + "," + e.point.lat);
      marker.openInfoWindow(infoWindow);
    })
     // 清除覆盖物
     function removeOverlay() {
        map.clearOverlays();
    }
      //单击获取点击的经纬度
      
      map.addEventListener("click", function (e) {
        // alert(e.point.lng + "," + e.point.lat);
        map.panTo(new BMap.Point(e.point.lng,e.point.lat));
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100vh;
  .map{
    width: 100%;
    height: 100vh;
  }
}
</style>
