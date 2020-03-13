const WXAPI = require('apifm-wxapi')
let goodinfo;
let poster;
const clientWidth = wx.getSystemInfoSync().screenWidth;

function px(number) {
  return number * clientWidth / 750;
}
//初始化
function init(page) {
  page._createPoster = this._createPoster;
  page._drawQrcode = this._drawQrcode;
  page._saveToMobile = this._saveToMobile;
}

//海报生成
function _createPoster(e) {
  poster = wx.createCanvasContext('firstCanvas');
  wx.showLoading({
    title: '正在生成海报',
  });
  poster.setFillStyle('#fff');
  poster.fillRect(0, 0, px(600), px(1000));
  this._drawQrcode();
}
async function _drawQrcode() {
  const _this = this;
  const qrcodeRes = await WXAPI.wxaQrcode({
    scene: _this.data.goodinfo.basicInfo.id + ',' + wx.getStorageSync('uid'),
    page: 'pages/good/index',
    is_hyaline: false,
    expireHours: 1
  })
  console.log(qrcodeRes);
  if (qrcodeRes.code != 0) {
    wx.showModal({
      title: '错误',
      content: '无法获取小程序码',
      showCancel: false,
    })
    return
  }
  let x = 0,
    y = 0;
  wx.getImageInfo({
    src: _this.data.goodinfo.basicInfo.pic,
    success(res) {
      poster.drawImage(res.path, 0, 0, res.width, res.height, x + px(50), y, px(500), px(500))
      y += px(500)
      x = px(300);
      y = y + 20;
      poster.setFontSize(16)
      poster.setFillStyle('#333333')
      poster.setTextAlign('center')
      let name = _this.data.goodinfo.basicInfo.name
      if (name.length > 16) {
        name = name.substring(0, 16) + '...'
      }
      poster.fillText(name, x, y)
      x = px(300);
      y = y + 30;
      poster.setFontSize(18)
      poster.setFillStyle('#e64340')
      poster.setTextAlign('center')
      name = _this.data.goodinfo.basicInfo.minPrice
      poster.fillText('￥' + name, x, y)
      y = y - 20
      // 写入二维码
      wx.getImageInfo({
        src: _this.data.goodinfo.basicInfo.pic,//qrcodeRes.data
        success(qrRes) {
          x = px(150)
          y = y + 30
          poster.drawImage(qrRes.path, 0, 0, qrRes.width, qrRes.height, x, y, px(300), px(300))
          x = px(300);
          y = y + px(300) + 20;
          poster.setFontSize(12)
          poster.setFillStyle('#aaa')
          poster.setTextAlign('center')
          poster.fillText('长按识别小程序码查看详情', x, y)
          console.log(2)
          poster.draw()
          wx.hideLoading();
          _this.setData({
            posterShow: true
          })
        }
      })

    }

  }) //获取图片信息
}

function _saveToMobile() {
  const _this = this
  wx.canvasToTempFilePath({
    canvasId: 'firstCanvas',
    success: function(res) {
      let tempFilePath = res.tempFilePath
      wx.saveImageToPhotosAlbum({
        filePath: tempFilePath,
        success: (res) => {
          wx.showModal({
            content: '图片已保存到手机相册',
            showCancel: false,
            confirmText: '知道了',
            confirmColor: '#333'
          })
        },
        complete: () => {
          _this.setData({
            posterShow: false
          })
        },
        fail: (res) => {
          wx.showToast({
            title: res.errMsg,
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  })
}
module.exports = {
  init: init,
  _createPoster: _createPoster,
  _drawQrcode: _drawQrcode,
  _saveToMobile: _saveToMobile
}