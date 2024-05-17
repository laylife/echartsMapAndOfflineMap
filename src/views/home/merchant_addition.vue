<template>
  <div class="merchant_addition">
    <div class="title_item">今日新增</div>
    <div class="number_box">
      <numByte :num="num1"></numByte>
      <numByte :num="num2"></numByte>
      <numByte :num="num3"></numByte>
      <numByte :num="num4"></numByte>
      <p class="tip">户</p>
    </div>

    <div style="display: flex; margin-bottom: 20px">
      <div class="pos">
        <div class="item_currency">
          <img
            src="../../assets/image/shxz/icon-toaday-pos.png"
            alt=""
            class="imgClass"
          />
          <div>
            <div class="item_1">
              <numByte :num="num5"></numByte>
              <p class="tip">户</p>
            </div>
            <p class="pos_name">pos</p>
          </div>
        </div>
      </div>

      <div class="jtm">
        <div class="item_currency">
          <img
            src="../../assets/image/shxz/icon-today-jtm.png"
            alt=""
            class="imgClass"
          />
          <div>
            <div class="item_1">
              <numByte :num="num6"></numByte>
              <p class="tip">户</p>
            </div>
            <p class="jtm_name">静态码</p>
          </div>
        </div>
      </div>
    </div>

    <div class="title_item">本月新增</div>
    <div class="number_box">
      <numByte :num="num7"></numByte>
      <numByte :num="num8"></numByte>
      <numByte :num="num9"></numByte>
      <numByte :num="nu1"></numByte>
      <numByte :num="nu2"></numByte>
      <p class="tip">户</p>
    </div>

    <div style="display: flex">
      <div class="pos">
        <div class="item_currency">
          <img
            src="../../assets/image/shxz/icon-toaday-pos.png"
            alt=""
            class="imgClass"
          />
          <div>
            <div class="item_1">
              <numByte :num="nu3"></numByte>
              <p class="tip">户</p>
            </div>
            <p class="pos_name">pos</p>
          </div>
        </div>
      </div>

      <div class="jtm">
        <div class="item_currency">
          <img
            src="../../assets/image/shxz/icon-today-jtm.png"
            alt=""
            class="imgClass"
          />
          <div>
            <div class="item_1">
              <numByte :num="nu4"></numByte>
              <p class="tip">户</p>
            </div>
            <p class="jtm_name">静态码</p>
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
      num1: "",
      num2: "",
      num3: "",
      num4: "",
      num5: 60,
      num6: 1000,
      num7: "",
      num8: "",
      num9: "",
      nu1: "",
      nu2: "",
      nu3: "",
      nu4: "",
      monthDate: "125",
      todayDate: "202",
    };
  },
  components: { numByte },
  methods: {
    handleData(data, tip) {
      const arr = data.split("");
      if (tip === 1) {
        switch (arr.length) {
          case 4:
            this.num1 = Number(arr[0]);
            this.num2 = Number(arr[1]);
            this.num3 = Number(arr[2]);
            this.num4 = Number(arr[3]);
            break;
          case 3:
            this.num1 = 0;
            this.num2 = Number(arr[0]);
            this.num3 = Number(arr[1]);
            this.num4 = Number(arr[2]);
            break;
          case 2:
            this.num1 = 0;
            this.num2 = 0;
            this.num3 = Number(arr[0]);
            this.num4 = Number(arr[1]);
            break;
          case 1:
            this.num1 = 0;
            this.num2 = 0;
            this.num3 = 0;
            this.num4 = Number(arr[0]);
            break;
          case 0:
            this.num1 = 0;
            this.num2 = 0;
            this.num3 = 0;
            this.num4 = 0;
            break;
        }
      } else {
        switch (arr.length) {
          case 5:
            this.num7 = Number(arr[0]);
            this.num8 = Number(arr[1]);
            this.num9 = Number(arr[2]);
            this.nu1 = Number(arr[3]);
            this.nu2 = Number(arr[4]);
            break;
          case 4:
            this.num7 = 0;
            this.num8 = Number(arr[0]);
            this.num9 = Number(arr[1]);
            this.nu1 = Number(arr[2]);
            this.nu2 = Number(arr[3]);
            break;
          case 3:
            this.num7 = 0;
            this.num8 = 0;
            this.num9 = Number(arr[0]);
            this.nu1 = Number(arr[1]);
            this.nu2 = Number(arr[2]);
            break;
          case 2:
            this.num7 = 0;
            this.num8 = 0;
            this.num9 = 0;
            this.nu1 = Number(arr[0]);
            this.nu2 = Number(arr[1]);
            break;
          case 1:
            this.num7 = 0;
            this.num8 = 0;
            this.num9 = 0;
            this.nu1 = 0;
            this.nu2 = Number(arr[0]);
            break;
          case 0:
            this.num7 = 0;
            this.num8 = 0;
            this.num9 = 0;
            this.nu1 = 0;
            this.nu2 = 0;
            break;
        }
      }
    },
  },
  created() {
    this.handleData(this.todayDate, 1);
    this.handleData(this.monthDate, 2);
  },
};
</script>

<style scoped lang="scss">
.merchant_addition {
  position: absolute;
  top: 66px;
  left: 22px;
  text-align: left;
}
.title_item {
  font-size: 20px;
  color: #3affdc;
  letter-spacing: 0;
  font-weight: 500;
  margin-bottom: 10px;
}
.number_box {
  display: flex;
  align-items: center;
  // justify-content: center;
  text-align: left;
  div {
    width: 38px;
    height: 38px;
    line-height: 38px;
    text-align: center;
    background: url(../../assets/image/shxz/numberBox.png) no-repeat;
    background-size: 100% 100%;
    margin-right: 12px;
    font-size: 32px;
    color: #3affdc;
    letter-spacing: 1.45px;
    text-align: center;
    font-weight: 500;
  }
}
.pos {
  margin-top: 10px;
  margin-right: 63px;
  display: flex;
}
.jtm {
  margin-top: 24px;
  display: flex;
  // margin-bottom: 41px;
}
.pos_name {
  font-size: 22px;
  color: #dcdcdc;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 500;
}
.item_currency {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item_1 {
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    font-size: 32px;
    color: #00ffdb;
    letter-spacing: 1px;
    text-align: center;
    font-weight: 500;
  }
}
.jtm_name {
  font-size: 18px;
  color: #dcdcdc;
  letter-spacing: 0.82px;
  text-align: center;
  font-weight: 500;
}
.imgClass {
  margin-right: 9px;
  width: 48px;
  height: 48px;
}
.tip {
  font-size: 20px;
  color: #3affdc;
  letter-spacing: 0;
  font-weight: 500;
}
</style>
