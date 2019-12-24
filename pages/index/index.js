//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
list:[{}],
    length:4
  },
  //事件处理函数
  
  onLoad: function () {
    wx:wx.request({
      url: 'https://wujunhui.xyz/getfenleilist',
      success:(res) =>{
        this.setData({
          list:res.data
        })
      }
    })
  },
})
