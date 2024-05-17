<template>
  <div class="overview_erchant">
    <!-- justify-content: space-around; -->
    <div style="">
      <div class="pos">
        <div class="item_currency">
          <img
            src="../../assets/image/shqk/icon-bnjye.png"
            alt=""
            class="imgClass"
          />
          <div>
            <div class="item_1">
              <numByte :num="num5"></numByte>
              <p class="tip">万元</p>
            </div>
            <p class="pos_name">本年交易金额</p>
          </div>
        </div>
      </div>
      <div class="pos" style="margin-top: 37px;">
        <div class="item_currency">
          <img
            src="../../assets/image/shqk/icon-yhshs.png"
            alt=""
            class="imgClass"
            style="margin-right: 20px;"
          />
          <div>
            <div class="item_1">
              <numByte :num="num5"></numByte>
              <p class="tip">户</p>
            </div>
            <p class="pos_name">月活商户数</p>
          </div>
        </div>
      </div>
    </div>

    <div style="">
      <div class="jtm">
        <div class="item_currency">
          <img
            src="../../assets/image/shqk/icon-shgm.png"
            alt=""
            class="imgClass"
          />
          <div>
            <div class="item_1">
              <numByte :num="num6"></numByte>
              <p class="tip">户</p>
            </div>
            <p class="jtm_name">商户规模</p>
          </div>
        </div>
      </div>
      <div class="jtm" style="margin-top: 37px;">
        <div class="item_currency">
          <img
            src="../../assets/image/shqk/icon-bdck.png"
            alt=""
            class="imgClass"
          />
          <div>
            <div class="item_1">
              <numByte :num="num6"></numByte>
              <p class="tip">万元</p>
            </div>
            <p class="jtm_name">绑定存款  </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numByte from "@cp/numByte";
export default {
  data() {
    return {
        num5:100,
        num6:200
    };
  },
  components:{numByte},
  methods: {
  },
  created(){
  },
};
</script>

<style scoped lang="scss">
.overview_erchant{
    position: absolute;
    top: 81px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: space-around;
    // flex-direction: column;
    // align-items: center;
}
.pos {
  // margin-right: 22px;
  display: flex;
}
.item_currency {
  display: flex;
  align-items: center;
  // justify-content: center;
}
.item_1 {
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    font-size: 24px;
color: #00FFDB;
letter-spacing: 0.75px;
text-align: center;
font-weight: 500;
  }
}
.pos_name {
    font-size: 14.4px;
color: #FFFFFF;
letter-spacing: 0;
text-align: center;
font-weight: 500;
}
.jtm_name {
    font-size: 14.4px;
color: #FFFFFF;
letter-spacing: 0;
text-align: center;
font-weight: 500;
}
.imgClass {
  margin-right: 5px;
  width: 72px;
  height: 86px;
}
.tip {
    font-size: 14.4px;
color: #00FFDB;
letter-spacing: 0.66px;
text-align: center;
font-weight: 500;
}
</style>