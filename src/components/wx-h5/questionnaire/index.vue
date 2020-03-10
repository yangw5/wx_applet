<!--
 * @File: 
 * @Description: 问卷调查-h5页面
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-06 11:07:00
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-09 21:40:07
 * @FilePath: \vue-h5-ts\src\components\wx-h5\questionnaire\index.vue
 -->
<template>
  <div class="wx_root">
    <!-- <VideoCustom />
    <Audiocoustom />-->
    <UserDo @ok="oschange" v-if="!os" />
    <Postr v-if="os" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VideoCustom from "../../widget/VideoCustom.vue";
import Audiocoustom from "../../widget/Audiocoustom.vue";
import UserDo from "./widget/UserDo.vue";
import Postr from "./widget/Postr.vue";
@Component({
  components: {
    VideoCustom,
    Audiocoustom,
    UserDo,
    Postr
  }
})
export default class Login extends Vue {
  title: string = "问卷调查";
  os: boolean = false;
  mounted() {}
  oschange(): void {
    this.os = !this.os;
  }
}
</script>
<style lang="less" >
.wx_root {
  height: 100%;
  display: flex;
  justify-items: center;
  align-self: center;
}
</style>
