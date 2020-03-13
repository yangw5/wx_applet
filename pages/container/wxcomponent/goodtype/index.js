// pages/container/wxcomponent/goodtype/index.js
const order = ['red', 'yellow', 'blue', 'green', 'red']
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    toView: 'green',
    scrollTop: 100,
    scrollLeft: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    upper: function (e) {
      console.log(e)
    },
    // 滚动条滚到底部的时候触发
    lower: function (e) {
      console.log(e)
    },
    // 滚动条滚动后触发
    scroll: function (e) {
      console.log(e)
    },
    // 点击按钮切换到下一个view
    tap: function (e) {
      for (var i = 0; i < order.length; ++i) {
        if (order[i] === this.data.toView) {
          this.setData({
            toView: order[i + 1]
          })
          break
        }
      }
    },
    //通过设置滚动条位置实现画面滚动
    tapMove: function (e) {
      this.setData({
        scrollTop: this.data.scrollTop + 10
      })
    }
  }
})
