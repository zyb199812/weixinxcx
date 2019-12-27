// pages/santidetails/santidetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFavorite: "false",
    avorite: true,
    floag: true,

  },
  // 三体死神，点击弹出页面
  qwe: function() {
    this.setData({
      floag: false
    })
  },
  // 三体死神，点击取消页面
  goodhao: function() {
    this.setData({
      floag: true
    })
  },

  
  // 点击分享
  fenxiang: function (ev) {
    wx.showActionSheet({
      itemList: [
        '分享给朋友',
        '分享给家人',
        '分享到朋友圈',
      ],
    })
  },



  // 点击收藏
  collect: function() {
    this.setData({
      avorite: false
    })
    var that = this;
    var isFavorite = that.data.isFavorite;
    //收藏
    if (isFavorite == 'false') {
      var roomId = that.data.roomId;
      that.setData({
        isFavorite: 'true'

      })
      wx.showToast({
        title: '收藏成功',
        icon: 'none'
      })
    }
    //取消收藏
    else if (isFavorite == 'true') {
      var roomId = that.data.roomId;
      that.setData({
        isFavorite: 'false'
      })
      wx.showToast({
        title: '取消成功',
        icon: 'none'
      })
    }

  },
  pinglun: function(eve) {
    wx.navigateTo({
      url: '../comment/comment',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

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

  }
})