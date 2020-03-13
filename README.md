# H5开发和小程序开发


## 项目结构
1. js
2. wxml
3. wxss
4. json

## 組件事件

* input: 
1. bindconfirm:軟鍵盤搜索
2. bindinput：輸入回調事件
3. bindblur：失去焦點事件
3. bindsumit:表單

## wx相关api:
* 跳转：
1. wx.switchTab:跳转的到tabBar中声明的页面：不能通过系统的返回键回到上一个页面，而是直接退出小程序；
2. wx.redirectTo（{url:'xxx'}）：关闭当前页并跳转到非tabbar页面:tabBar中定义的字段不能超过5个页面，小程序的页面栈层次也不能超过5层，不能通过系统的返回键回到上一个页面，而是直接退出小程序；
3. wx.navigateTo(OBJECT) ：是将原来的页面保存在页面栈中，在跳入到下一个页面的时候目标页面也进栈，只有在这个情况下点击手机的返回按钮才可以跳转到上一个页面，不允许跳转到 tabbar 页面
4. wx.navigateBack(OBJECT):只能返回到页面栈中的指定页面，一般和navigateTo配合使用
* 图片操作
1. wx.createCanvasContext  .drawImage  setFontSize等canvas操作
2. wx.getImageInfo
3. wx.canvasToTempFilePath
4. wx.saveImageToPhotosAlbum 
5.  <canvas class="canvas" style="{{canvasstyle}}" canvas-id="firstCanvas"></canvas>  显示


* 上下拉刷新等事件
1. 上下拉事件： onPullDownRefresh和onReachBottom,设置{ "enablePullDownRefresh": true }
2. 提示:showToast/showLoading 和  wx.hideToast/wx.hideLoading

* button 等设置 open-type='share' 进行分享

## 通信

### 父子通信
1. 父组件给子组件绑定属性，子组件通过 properties接收，直接听过this.data.xxx访问
2. 父组件给子组件绑定事件bin:myevent="" ,子组件通过 this.triggerEvent('myEvent',e.detail.value)调用

### templatem 模板
* 通过 编写相关的wxml wxss文件，在引入组件里面引入相关wxml和wxss,

  <import src="../../templates/xxx.wxml"/>
  @import "../template/xxx.wxss";

.wxml文件中可以定义多个模板，只需要通过name来区分；

  <template name="share">...</template>
  <template is="share" />

* 通过编写js文件 定义相关方法，挂载到引入文件page中去。

## 三方组件
  有点需要自己开发
 * wxparse：微信小程序富文本解析组件
 * apifm-wxapi wxapi提供
