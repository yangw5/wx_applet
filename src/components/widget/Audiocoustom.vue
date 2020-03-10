<!--
 * @File: 
 * @Description: 
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-07 10:45:16
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-08 09:44:48
 * @FilePath: \vue-h5-ts\src\components\widget\Audiocoustom.vue
 -->


<template>
  <div class="audio_root">
    <audio ref="audio">
      <!-- <source src="/i/song.ogg" type="audio/ogg" /> -->
      <source src="../../assets/12271.wav" type="audio/mpeg" />Your browser does not support the audio element.
    </audio>
  </div>
</template>

<script lang="ts">
// autoplay 是否自动播放
// loop 循环播放
// muted 静音
// preload 预加载
// controls 显示按钮控制 controls="controls"
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class Audiocoustom extends Vue {
  title: string = "问卷调查";
  audio: any = "";
  openstatus: boolean = false;
  private mounted() {
    this.audio = this.$refs.audio;
    // this.audio.play();
  }
  public audioplay(): void {
    this.audio = this.$refs.video;
    this.audio.play();
    this.openstatus = true;
  }
  public audiopause(): void {
    this.audio.pause();
    this.openstatus = false;
  }
}
</script>
<style lang="less" scoped>
.audio_root {
  position: fixed;
  width: 100%;
}
</style>
