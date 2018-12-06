// pages/face/face.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [
      {
        "name": "暹罗猫",
        "id": 1,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m1.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "布偶猫",
        "id": 2,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m2.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "苏格兰折耳猫",
        "id": 3,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m3.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "英国短毛猫",
        "id": 4,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m4.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "波斯猫",
        "id": 5,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m5.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "俄罗斯蓝猫",
        "id": 6,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m6.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "美国短毛猫",
        "id": 7,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m7.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "异国短毛猫",
        "id": 8,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m8.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "挪威森林猫",
        "id": 9,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m9.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "孟买猫",
        "id": 10,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m10.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "缅因猫",
        "id": 11,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m11.jpg",
        "good_num": "112",
        "comment_num": "18"
      },
      {
        "name": "埃及猫",
        "id": 12,
        "feed_source_txt": "这个猫咪很可爱",
        "feed_source_img": "../../image/m12.jpg",
        "good_num": "112",
        "comment_num": "18"
      }
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  bindItemTap: function () {
    wx.navigateTo({
      url: '../faceitem/faceitem'
    })
  },
})