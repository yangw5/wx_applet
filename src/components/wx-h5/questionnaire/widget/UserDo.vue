<!--
 * @File: 
 * @Description: 问卷调查-h5页面
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-06 11:07:00
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-10 08:59:25
 * @FilePath: \vue-h5-ts\src\components\wx-h5\questionnaire\widget\UserDo.vue
 -->
<template>
  <div class="userdo_root">
    <div>
      <div class="userdo_form">
        <div>
          <checklist
            :title="`${nowdata+1 }:${datas[nowdata].title}`"
            required
            :max="1"
            :options="datas[nowdata].selectItems"
            v-model="data"
            @on-change="change"
          ></checklist>
          <!-- <li v-for="item in datas[nowdata].selectItems" :key="item.id">{{item.value}}</li> -->
        </div>
        <div class="userdo_buttons">
          <XButton v-if="nowdata!==0" type="warn" @click.native="lastTest">上一题</XButton>
          <XButton v-if="nowdata!==datas.length-1" type="warn" @click.native="nextTest">下一题</XButton>
          <XButton v-if="nowdata===datas.length-1" type="warn" @click.native="sumit">提交</XButton>
        </div>
      </div>
    </div>
    {{showFormItem()}}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from "vue-property-decorator";
import { XButton, Checklist } from "vux";
@Component({
  components: { XButton, Checklist }
})
export default class Login extends Vue {
  title: string = "用户问卷调查操作";
  data: number[] = []; //当前题数据绑定
  datas: object[] = [
    {
      title: "你的年龄",
      fiter: "old",
      selectItems: [
        {
          key: 1,
          value: "6~10"
        },
        {
          key: 2,
          value: "10~218"
        },
        {
          key: 3,
          value: "18~25"
        },
        {
          key: 4,
          value: "25以上"
        }
      ]
    },
    {
      title: "你想学啥",
      fiter: "like",
      selectItems: [
        {
          key: 1,
          value: "前端"
        },
        {
          key: 2,
          value: "java开发工程师"
        },
        {
          key: 3,
          value: "测试"
        },
        {
          key: 4,
          value: "运维"
        },
        {
          key: 5,
          value: "产品"
        }
      ]
    },
    {
      title: "工作经验",
      fiter: "workYears",
      selectItems: [
        {
          key: 1,
          value: "应届毕业生"
        },
        {
          key: 2,
          value: "1-3年"
        },
        {
          key: 3,
          value: "3-5年"
        },
        {
          key: 4,
          value: "5以上"
        }
      ]
    },
    {
      title: "期望薪资",
      fiter: "money",
      selectItems: [
        {
          key: 1,
          value: "4-6k"
        },
        {
          key: 2,
          value: "6-8k"
        },
        {
          key: 3,
          value: "8-10k"
        },
        {
          key: 4,
          value: "10k以上"
        }
      ]
    }
  ];
  checkData: object = {}; //选择表单
  nowdata: number = 0; //题序号
  creact() {}
  mounted() {}
  showFormItem(): any {}
  //选择事件
  change(val: any, label: any): void {
    // console.log(val, label);
    let value: string = val[0];
    // console.log(this.checkData[this.datas[this.nowdata]["fiter"]]);
    let fiter = this.datas[this.nowdata]["fiter"];
    console.log(fiter);
    this.checkData[fiter] = value;
    console.log(this.checkData);
    // this.data = [...this.checkData[this.datas[this.nowdata]["fiter"]]];
    // console.log(this.data);
  }
  //选择后表单数据记录
  setevalue(): void {
    this.data.length = 0;
    let fiter = this.datas[this.nowdata]["fiter"];
    this.data.push(this.checkData[fiter]);
  }
  nextTest(): void {
    this.nowdata += 1;
    this.setevalue();
  }
  lastTest(): void {
    this.nowdata -= 1;
    this.setevalue();
  }
  sumit(): void {
    console.log(this.checkData);
    this.ok();
  }
  @Emit("ok")
  ok() {}
}
</script>
<style lang="less" >
.userdo_root {
  z-index: 100;
  width: 100%;
  height: 100%;
  background-image: url("../../../../assets/bj.jpg");
  .userdo_form {
    margin-top: 20%;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background-color: transparent;
    .weui-cells__title {
      font-size: 18px;
      color: white;
    }
    .weui-cells_checkbox {
      background-color: transparent;
      color: #ffffff;
    }
    .userdo_buttons {
      width: 50%;
    }
  }
}
</style>
