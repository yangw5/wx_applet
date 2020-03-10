<!--
 * @File: 
 * @Description: 
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-10 11:23:16
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-10 12:07:11
 * @FilePath: \vue-h5-ts\src\components\widget\BackTop.vue
 -->
<template>
  <div @click="goTop" ref="btn" class="goTop_root">
    回到顶部
    <x-icon type="ios-arrow-thin-up" size="30"></x-icon>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class BackTop extends Vue {
  // timer: any = null;
  isTop: boolean = true;
  mounted() {
    this.onSrcoll();
  }
  public goTop() {
    let timer = setInterval(function() {
      let sTop = document.documentElement.scrollTop || document.body.scrollTop;
      let ispeed = Math.floor(-sTop / 5);
      document.documentElement.scrollTop = document.body.scrollTop =
        sTop + ispeed;
      this.isTop = true;
      if (sTop === 0) {
        clearInterval(timer);
        timer = null;
      }
    }, 30);
  }
  public onSrcoll() {
    let clientHeight = document.documentElement.clientHeight;
    let obtn: any = this.$refs.btn;
    window.onscroll = function() {
      let osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (osTop >= clientHeight / 3) {
        obtn.style.display = "block";
      } else {
        obtn.style.display = "none";
      }
      // if (!this.isTop) {
      //   clearInterval(this.timer);
      //   this.timer = null;
      // }
      // this.isTop = false;
    };
  }
}
</script>
<style lang="less">
.goTop_root {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  right: 40px;
  bottom: 100px;
  border: none;
  display: none;
}
</style>
