<!--
 * @File: 
 * @Description: 
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-10 14:36:57
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-10 14:39:52
 * @FilePath: \vue-h5-ts\src\components\wx-h5\questionnaire\widget\Result.vue
 -->
<template>
  <div>
    <msg
      :title="$t('Yeah! You make it')"
      :description="$t('Msg description')"
      icon="success"
    ></msg>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Msg } from "vux";

@Component({
  components: {
    Msg
  }
})
export default class componentName extends Vue {
  public methodName() {}
}
</script>
<style lang="less" scoped></style>
