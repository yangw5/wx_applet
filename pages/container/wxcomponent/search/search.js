// pages/container/wxcomponent/search/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    serchvalue:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindinput: function(e) {
      this.setData({
        serchvalue:e.detail.value
      })
      console.log(this.data.text); 
      this.triggerEvent('sumit', e.detail.value)   //这里的myEvent是自己自定义的事件名字，需要父组件中通过他来接受，
    },
    bindconfirm: function (e) {
      console.log('查询组件')
    }
  },
})