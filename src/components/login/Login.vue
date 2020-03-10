<!--
 * @File: 
 * @Description: 
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-06 11:07:00
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-10 11:49:04
 * @FilePath: \vue-h5-ts\src\components\login\Login.vue
 -->
<template>
  <div class="login_root">
    <div class="title">这是自定义-{{ message }}</div>
    <button @click="onClick">戳我一下</button>
    <Form :msg="message2" @bindSend="getCount" v-model="FormVule" />
    <div>
      普通数据双向绑定：
      <input v-model="value" @change="changeFormVue($event.target.value)" />
      输入内容:{{ value }}
    </div>
    <div>通过v-modal实现自定义父子组件的双向绑定：{{ FormVule }}</div>
    <div>watch监控Formval: 老数据：{{ oldv }} 新数据：{{ newv }}</div>
    <div class="hdiv" />
    <BackTop />
  </div>
  <!-- <div></div> -->
</template>

<script lang="ts">
// import Vue from "vue";
// import Component from "vue-class-component";

import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import Form from "./Form.vue";
import BackTop from "../widget/BackTop.vue";
// @Component 修饰符注明了此类为一个 Vue 组件
// @Component({
//   template: '<button @click="onClick">Click!</button>'
// })
@Component({
  ///组件注入
  components: { Form, BackTop },
  //指令
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  }
})
export default class Login extends Vue {
  //@Prop() private msg!: string;
  // private variableName: typeName = variableValue;

  message: string = "自定父组件";
  message2: string = "自定父组件数据";
  value: string = "";
  FormVule: boolean = true; //自定义组件双向绑定值
  private name: string;
  oldv?: string | boolean;
  newv?: string | boolean;
  constructor() {
    super();
    this.name = "xiaoli";
  }

  public onClick(): void {
    alert(`这是${this.message2}`);
  }
  public getCount(n: number) {
    alert("子组件来访问了并传递数据：" + n);
  }
  public changeFormVue(value: string) {
    alert(value);
    if (value.length > 1) {
      this.FormVule = true;
    } else this.FormVule = false;
  }
  mounted() {
    // this.sayHello();
  }
  // computed
  get MyName(): string {
    return `My name is`;
  }
  @Watch("FormVule", { immediate: true, deep: true })
  valueChange(newValue: string, oldValue: string) {
    this.oldv = oldValue;
    this.newv = newValue;
  }
}
</script>
<style lang="less" scoped>
.login_root {
  height: auto;
}
.title {
  color: red;
}
.hdiv {
  height: 1000px;
}
</style>
