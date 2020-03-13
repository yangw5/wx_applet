// pages/face/face.js
const WXAPI = require('../../miniprogram_npm/apifm-wxapi/index')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchValue: '',
    banners: [],
    categories: [],
    activeCategoryId: 0,
    curPage: 0,
    goodsRecommend: [],
    goodsList: [],
    goTopstatus: false,
    loading: true

  },

  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function(options) {
    let _this = this
    WXAPI.banners({
      type: 'index'
    }).then(res => {
      _this.setData({
        banners: res.data
      })
    })
    this.categories()


    this.getGoods("goodsRecommend", {
      recommendStatus: 1
    });
    this.getGoods("goodsList", {
      pingtuan: true
    });
    // WXAPI.goods({
    //   recommendStatus: 1
    // }).then(res => {
    //   if (res.code === 0) {
    //     console.log(res.data)
    //     _this.setData({
    //       goodsRecommend: res.data
    //     })
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  bindinput: function(e) {
    this.setData({
      searchValue: e.detail.value
    })
  },
  //输入框搜索
  bindconfirm(e) {
    this.setData({
      inputVal: e.detail.value
    })
    wx.navigateTo({
      url: '/pages/goods/goods?name=' + this.data.inputVal,
    })
  },
  //分类
  async categories() {
    const res = await WXAPI.goodsCategory()
    let categories = [];
    if (res.code == 0) {
      const _categories = res.data.filter(ele => {
        return ele.level == 1
      })
      categories = categories.concat(_categories)
    }
    this.setData({
      categories: categories,
      activeCategoryId: 0,
      curPage: 1
    });
  },
  //商品列表
  getGoods: function(data, type) {
    let _this = this;
    WXAPI.goods(
      type
    ).then(res => {
      console.log(res.data)
      if (res.code === 0) {
        console.log(data)
        if (data === 'goodsRecommend') {
          this.setData({
            goodsRecommend: res.data
          })
        } else if (data === "goodsList") {
          this.setData({
            goodsList: res.data
          })
        }

      }
    })
  },
  togoodpage: function(e) {
    wx.navigateTo({
      url: "/pages/good/index?id=" + e.currentTarget.dataset.id
    })
  },
//回到顶部
goTop: function(e) {
  if (wx.pageScrollTo) {
    wx.pageScrollTo({
      scrollTop: 0
    })
  } else {
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
},
//监听滑动事件
onPageScroll: function(e) {
  let h = e.scrollTop;
  let H = wx.getSystemInfoSync().windowHeight;
  if (h > H / 2) {
    this.setData({
      goTopstatus: true
    })
  } else {
    this.setData({
      goTopstatus: false
    })
  }
},
//下拉加载上拉刷新
onPullDownRefresh: function() {
  wx.showLoading({
    title: '玩命加载中',
  });
  setTimeout(() => {
    wx.stopPullDownRefresh();
    wx.hideLoading()
  }, 2000)
},
onReachBottom: function() {
  // wx.showToast({
  //   title: '没有更多了',
  //   icon: "none"
  // });
  let _this = this
  setTimeout(() => {
    _this.setData({
      loading: false
    })
  }, 2000)
},
})