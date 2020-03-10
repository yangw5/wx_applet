/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-03-10 09:28:06
 * @LastEditors: yangw5
 * @LastEditTime: 2020-03-10 10:12:55
 * @FilePath: \vue-h5-ts\src\utils\tools.ts
 */
import axios from "axios";
import wx from "weixin-js-sdk";
//可以在继承到vue的原型上  Vue.prototype.WXConfig = wxTranspond()
//直接调用  this.wxTranspond().wxShowMenu();
export const wxTranspond = function() {
  return {
    wxShowMenu: function() {
      let data = location.href.split("#")[0]; //获取当前页面地址

      axios.post("后台接口地址", { url: data }).then(function(res: any) {
        var getMsg = res.data.data;
        wx.config({
          debug: false, //生产环境需要关闭debug模式
          appId: getMsg.appId, //appId通过微信服务号后台查看
          timestamp: getMsg.timestamp, //生成签名的时间戳
          nonceStr: getMsg.nonceStr, //生成签名的随机字符串
          signature: getMsg.signature, //签名
          jsApiList: [
            //需要调用的JS接口列表
            "onMenuShareTimeline", //分享给好友
            "onMenuShareAppMessage", //分享到朋友圈
            "showMenuItems",
            "hideMenuItems"
          ]
        });

        wx.ready(function() {
          //判断当前客户端版本是否支持指定JS接口
          wx.checkJsApi({
            jsApiList: ["showMenuItems"],
            success: function(res) {
              wx.showMenuItems({
                menuList: [
                  "menuItem:share:appMessage", //发送给朋友
                  "menuItem:share:timeline" //分享到朋友圈
                ]
              });
            }
          });

          //分享到朋友圈
          wx.onMenuShareTimeline({
            title: "", // 分享标题
            desc: "", //分享描述
            link: location.href.split("#")[0], // 分享链接，一定要获取当前页面的URL
            imgUrl: "" // 分享图标
          });

          //分享给朋友
          wx.onMenuShareAppMessage({
            title: "", // 分享标题
            desc: "", // 分享描述
            link: location.href.split("#")[0], // 分享链接
            imgUrl: "" // 分享图标
          });
        });
      });
    }
  };
};

// 微信分享功能实现
//要在index.html引入http://res.wx.qq.com/open/js/jweixin-1.4.0.js  // 注意协议
/**
 * @function  getData
 * 微信配置数据请求,获取分享配置
 */
let getData = function() {
  //后台请求数据  location.href.split('#')[0]; //获取当前页面地址
  let url = encodeURIComponent(location.href.split("#")[0]);
  axios.post("后台接口地址", { url: url }).then((res: any) => {
    if (res.code === 1) {
      let data = res.data;
      // localStorage.setItem('followUrl',data.followUrl);//本地缓存
      this.wxstart(data);
    } else {
      // alert({
      //     message: res.msg,
      //     center: true,
      //     duration:2000,
      //     customClass:'mesTip'
      // });
    }
  });
};
//转发配置

//
/**
 *  @interface wxobject
 * 微信配置接口
 */
interface wxobject {
  appId: number;
  timestamp: any;
  nonceStr: any;
  signature: any;
}

let wxstart = function(data: wxobject) {
  //   var url = location.href; //分享的文章地址
  var appId = data.appId;
  var timestamp = data.timestamp;
  var nonceStr = data.nonceStr;
  var signature = data.signature;
  // 判断当前客户端版本是否支持指定JS接口 ,这步可无
  wx.checkJsApi({
    jsApiList: [
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "onMenuShareQQ",
      "onMenuShareWeibo",
      "onMenuShareQZone"
    ], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function(res) {
      console.log(res);
      // 以键值对的形式返回，可用的api值true，不可用为false
      // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    }
  });
  //微信分享配置设置
  wx.config({
    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，
    //可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: appId, // 必填，公众号的唯一标识
    timestamp: timestamp, // 必填，生成签名的时间戳
    nonceStr: nonceStr, // 必填，生成签名的随机串
    signature: signature, // 必填，签名，见附录1
    jsApiList: [
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "onMenuShareQQ",
      "onMenuShareWeibo"
    ]
    // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  });
  //分享显示设置
  wx.ready(function() {
    var shareData = {
      title: document.title,
      desc: "分享简介",
      link: location.href,
      imgUrl:
        "http://file.puhuijinfu.com/imgLoader/test/phjf/img/2018/10/11/xyswkVTROKdq1xBzEYMB.jpeg",
      type: "link",
      success: function() {
        console.log("success");
      },
      cancel: function() {
        console.log("failf");
      }
    };
    wx.onMenuShareAppMessage(shareData); //分享给朋友
    wx.onMenuShareTimeline(shareData); // 分享到朋友圈
    wx.onMenuShareQQ(shareData); // 分享到QQ
    wx.onMenuShareWeibo(shareData); // 分享到微博
  });
  // 如果失败 , 获取失败信息
  wx.error(function(res) {
    console.log("错误", res);
  });
};
//特别注意，需要在公众号中添加js安全域名。开发公众号中，好像只能添加一个；生产公众号，最多可以添加3个。 不加安全域名，会报错的。

//特别注意url需要动态获取，传递给后台，否则会报错。因为二次分享的时候，微信会自动在url后面追加一串。如果不传递，就会造成url不对，那么签名就不正确
