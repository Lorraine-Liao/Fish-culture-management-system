// pages/feed/feed.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品数据
    fishInfo: 
      {
        image: "/images/fish.png",
   
        name: "金鱼",
        time: "2023/3/17"
  
      },

     cycleSetting:[
      {
        id: 1,
        category: "喂食次数",
        plan: "每日一次",
        lastTime: null,
      },
      {
        id: 2,
        category: "换水周期",
        plan: "7天",
        lastTime: "2023/03/22",
      }
     ],
     record:[
      {
        id: 1,
        recordDate: "06-17 23:15",
        content: "今日已换水",
        type:"换水",
      },
      {
        id: 2,
        recordDate: "06-18",
        content: "今日已喂食",
        type:"喂食",
      }
     ]
    
    

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})