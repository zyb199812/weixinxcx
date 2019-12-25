//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [{}],
    length: 4,

    stss: [{
        "st": "/pages/img/011.jpg",
        'nname': '三体',
        'name': '刘慈心',
        'text': '刘慈欣创作的长篇科幻小说地球的三部曲，第三部'
      },
      {
        'st': '../img/012.jpg',
        'nname': '未来简史',
        'name': '小刘',
        'text': '小刘欣创作的长篇科幻小说地球的三部曲，第三部'
      }
    ]


  },
  //事件处理函数

  onLoad: function() {
    wx: wx.request({
      url: 'https://wujunhui.xyz/getfenleilist',
      success: (res) => {
        this.setData({
          list: res.data
        })
      }
    })
  },
})