// pages/good/index.js
const WXAPI = require('apifm-wxapi');
const ApifmShare = require('../../template/share/index.js');
var WxParse = require('../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodinfo:{},//商品数据
    reputation:{},//评价
    goodsId:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
     ApifmShare.init(this);
     this.data.goodsId = e.id;//获取页面切换传递的id
     const _this = this;
    // wx.getStorageSync('uid') 本地缓存
    this.getgoodinfo(e.id)//获取商品数据
    // this.reputation(e.id)//
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
  getgoodinfo:function(goodid){
    WXAPI.goodsDetail(goodid).then((res)=>{
      WxParse.wxParse('goodcontent', 'html', res.data.content, this, 5);
      this.setData({
        goodinfo:res.data
      })
    })
  },
  reputation:function(goodid){
    var that = this;
    WXAPI.goodsReputation({
      goodsId: goodsId
    }).then(function (res) {
      if (res.code == 0) {
        that.setData({
          reputation: res.data
        });
      }
    })
  },
  closePop() {
    this.setData({
      posterShow: false
    })
  },
})