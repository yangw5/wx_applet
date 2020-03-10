<!--
 * @File: 
 * @Description: 
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-07 10:45:16
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-07 17:10:18
 * @FilePath: \vue-h5-ts\src\components\widget\VideoCustom.vue
 -->
<template>
  <div class="video_root">
    <video v-if="videoShow" ref="video" src="../../assets/wx1.mp4">你的浏览器不支持video</video>
    <div class="video_open">
      <XButton type="warn" @click.native="videoplay" v-if="!openstatus">播放</XButton>
      <XButton type="warn" @click.native="videopause" v-if="openstatus">暂停</XButton>
      <XButton type="warn" @click.native="videoClose" v-if="videoShow">跳过</XButton>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { XButton } from "vux";
@Component({
  components: {
    XButton
  }
})
export default class Questionnaire extends Vue {
  title: string = "问卷调查";
  video: any = "";
  openstatus: boolean = false;
  videoShow: boolean = true;
  private mounted() {
    this.video = this.$refs.video;
  }
  public videoplay(): void {
    this.videoShow = true;
    this.video = this.$refs.video;
    this.video.play();
    this.openstatus = true;
  }
  public videopause(): void {
    this.video.pause();
    this.openstatus = false;
  }
  public videoClose(): void {
    this.openstatus = false;
    this.videoShow = false;
  }
}
</script>
<style lang="less" scoped>
.video_root {
  position: fixed;
  width: 100%;
  height: 100%;
  .video_open {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    z-index: 10000;
  }
}
</style>
