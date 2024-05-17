<template>
    <div>
      <CountTo :start-val="startVal" :end-val="endVal" :duration="2000" separator=""></CountTo>
    </div>
  </template>
  
  <script>
  import CountTo from "vue-count-to";
  export default {
    name: "numByte",
    components: {
      CountTo,
    },
    props: {
      num: 0,
    },
    watch: {
      num: {
        handler(newVal, oldVal) {
          if (newVal) {
            this.endVal = newVal;
          }
          if (oldVal) {
            this.startVal = oldVal;
          }
        },
        deep: true,
        immediate: true,
      },
    },
    data() {
      return {
        startVal: 0,
        endVal: 0,
      };
    },
  };
  </script>
  <style scoped>
  div {
    display: inline-block;
  }
  </style>