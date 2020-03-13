// pages/start/start.js
const WXAPI = require('../../miniprogram_npm/apifm-wxapi/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imglist:[],//图片数组
    swiperMaxNumber: 0,//图片张数
    swiperCurrent: 0//当前张数
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this
  WXAPI.banners({
      type: 'app'
    }).then(function (res) {
      console.log('111'+res)
      _this.setData({
        imglist: res.data,
        swiperMaxNumber: res.data.length
      });
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  swiperchange: function (e) {
    //console.log(e.detail.current)
    this.setData({
      swiperCurrent: e.detail.current
  })
  },
  imgClick() {
    if (this.data.swiperCurrent + 1 != this.data.swiperMaxNumber) {
      wx.showToast({
        title: '左滑进入',
        icon: 'none',
      })
    }
  },
  goToIndex:function(e){
    wx.switchTab({
      url: '/pages/face/face',
    })
  }
})