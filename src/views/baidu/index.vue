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
        height: ''
       }
    },
  mounted() {
    this.initMap();
    let height = window.innerHeight
    this.height = height;
  },
  methods: {
    initMap() {
      var BMap = window.BMap || {};
      var map = new BMap.Map("map");

      var point = new BMap.Point(112.952369, 28.235145); // 创建点坐标
      map.centerAndZoom(point, 12); // 初始化地图，设置中心点坐标和地图级别
      //添加地图类型控件
      // map.addControl(new BMap.MapTypeControl({
      //   mapTypes: [
      //     BMAP_NORMAL_MAP,
      //     BMAP_HYBRID_MAP
      //   ]
      // }));
      // map.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
      //单击获取点击的经纬度
      map.addEventListener("click", function (e) {
        alert(e.point.lng + "," + e.point.lat);
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
