// pages/myde/myde.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'../img/ft5.jpg'

  },
  // 分享功能
  // fenxiang:function(){
  //   wx.showActionSheet({
  //     itemList: [
  //       '分享给好友',
  //       '分享到朋友圈',
  //       '分享到QQ'
  //     ]
  //   })
  // },

  // 分享功能
  fenxiang:function(){
    var itemList=[
      '分享到好友',
      '分享到朋友圈',
      '分享到QQ',
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor:'#405f80',
      success:function(res){
        wx.showModal({
          title: '用户' + itemList[res.tapIndex], 
          content: '是否进行分享',
        })
      }
    })
  },

  // 换图像------注意WXSS里要使用插值表达式才可以
  huantuxiang:function() {
    var thisname = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths[0];
        console.log(tempFilePaths);
        // this = tempFilePaths;
        this.setData({
          src: tempFilePaths
        })
      }
    })
  },

  
  shezhi:function(eve){
    wx.navigateTo({
      url: '../ste/ste',
    })
  },
  chongzhi:function(eve){
    wx.navigateTo({
      url: '../chongzhi/chongzhi',
    })
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

  }
})