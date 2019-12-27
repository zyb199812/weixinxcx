// pages/hgauthor/hgauthor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ress: [],
    length:5,
    dan:[
      { "tupian": "/pages/img/001.jpg", "name": "关注" },
      { "tupian": "/pages/img/002.jpg", "name": "不关注" },
      {"tupian":"/pages/img/003.jpg","name":"别关注"}
    ]
  },
  onLoad: function () {
   wx.request({
     url: 'https://wujunhui.xyz/getwriters',
     success:(res) => {
       this.setData({
         list:res.data
       })
     }
   })
    // 动态获取内容
     wx.request({
      url: 'https://wujunhui.xyz/getwriters',
      success: (res) => {
        this.setData({
          ress: res.data
        })
      }
    })
    // console.log(this.data)
  },

  /**
   * 生命周期函数--监听页面加载
   */

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

  }
})