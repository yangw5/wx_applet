<!--
 * @File: 
 * @Description: 
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-08 09:41:32
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-10 14:50:11
 * @FilePath: \vue-h5-ts\src\components\wx-h5\questionnaire\widget\Postr.vue
 -->

<template>
  <div class="postr_root" ref="imageToFile">
    <span class="vux-close" style="color:red;" v-if="pstatus" @click="close">
      <!-- <icon type="cancel"></icon> -->
    </span>
    <div class="qr-code-box">
      <!-- <vue-qr
        :logoSrc="config.logo"
        :text="config.value"
        class="qr-code-pic"
        :correctLevel="3"
        :margin="0"
        :dotScale="0.5"
      ></vue-qr>-->

      <div class="p_buttons" v-if="flog">
        <XButton @click.native="screenShot" type="warn">生成海报</XButton>
        <XButton type="warn">转发分享</XButton>
      </div>
      <div :class="pstatus ? 'p_show' : 'p_hide'">
        <XImg :src="imgsrc" />
      </div>

      <!-- <div class="pimg">
        <img :src="imgsrc" alt="截图" />
      </div>-->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import html2canvas from "html2canvas";
import { XButton, XImg, Icon } from "vux";

@Component({
  components: {
    XButton,
    XImg,
    Icon
  }
})
export default class Login extends Vue {
  title: string = "海报生成";
  imgsrc: any = "../../../../assets/bj.jpg";
  pstatus: boolean = false;
  flog: boolean = true;
  mounted() {}
  screenShot(): any {
    this.flog = false;
    setTimeout(() => {
      html2canvas(this.$refs.imageToFile as HTMLCanvasElement, {
        width:
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth,
        height:
          window.innerHeight ||
          document.documentElement.clientHeight ||
          document.body.clientHeight
      }).then(canvas => {
        // 第一个参数是需要生成截图的元素,第二个是自己需要配置的参数,宽高等
        var url = canvas.toDataURL(); //图片路径
        // this.imgsrc = canvas.toDataURL("image/png");
        this.imgsrc = canvas.toDataURL();
        console.log("yang");
        console.log(url);
        this.pstatus = true;
        // console.log(this.imgsrc);
      });
    }, 0);
  }
  close(): void {
    this.pstatus = false;
    this.flog = true;
    // location.reload();
    // this.$router.go(0);
  }
}
</script>
<style lang="less">
@import "~vux/src/styles/close.less";
.postr_root {
  width: 100%;
  background-image: url("../../../../assets/bj.jpg");
  .vux-close {
    position: fixed;
    top: 0;
    right: 10px;
    z-index: 1000;
  }
}
.qr-code-box {
  height: 100%;
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  // flex-direction: column;
  .p_buttons {
    width: 100%;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    button {
      width: 100px;
    }
  }
  .p_show {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 100%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 90%;
      height: 90%;
    }
  }
  .p_hide {
    opacity: 0;
    width: 0;
    height: 0;
  }
}
</style>
