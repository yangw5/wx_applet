<!--
 * @File: 
 * @Description: 
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-06 11:32:23
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-06 17:27:06
 * @FilePath: \vue-h5-ts\src\components\login\Form.vue
 -->
<template>
  <div class="root">
    <div>子组件</div>
    <div>{{ count }}</div>
    <div>{{ msg }}</div>
    <button @click="getPful">点我调用父组件的方法</button>
    <div>
      <input type="checkbox" v-model="FormValue" @change="checkchange" />
      父子组件双向绑定的值{{ FormValue }}
    </div>
    <div>
      使用vux:
      <group>
        <cell title="title" value="value"></cell>
        <XButton type="warn">按钮</XButton>
      </group>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Model, Emit } from "vue-property-decorator";
import { Group, Cell, XButton } from "vux";
// import  from '@/components/ .vue'
@Component({
  components: {
    Group,
    Cell,
    XButton
  }
})
// ({
//     components: {}
// })
export default class componentName extends Vue {
  //   @Prop() public msg: string;
  //   @Prop({ default: "default value" }) propB: string;
  //   @Prop([String, Boolean]) propC: string | boolean;

  @Prop({
    type: String, // 父组件传递给子组件的数据类型
    required: false, // 是否必填
    default: " " // 默认值， 如果传入的是 Object，则要 default: ()=>({}) 参数为函数
  })
  private msg!: string; //string | undefined
  private variableName: string = "子组件";
  private count: number = 1;
  private checked!: boolean;
  private created() {
    this.checked = this.FormValue;
  }
  private mounted() {
    this.checked = this.FormValue;
  }

  public getPful() {
    this.getCount(1);
    alert("获取父组件数据--" + this.msg);
  }

  checkchange() {
    this.updataFormVue(this.FormValue);
  }
  //   model: {
  //     prop: "value", //绑定的值，通过父组件传递
  //     event: "update" //自定义事件名
  //   },
  //自定义组件的双向绑定
  @Model("changeFormVue") FormValue!: boolean;
  @Emit("changeFormVue")
  updataFormVue(value: boolean) {}

  //this.$emit 调用父组件方法
  @Emit("bindSend")
  getCount(n: number) {
    this.count += 1;
  }
}
</script>
<style lang="less" scoped>
.root {
  background-color: #eee;
  border: 1px salmon solid;
}
</style>
