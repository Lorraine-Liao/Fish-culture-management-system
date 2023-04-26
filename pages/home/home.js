const APP = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [
      {id: 1, url: '/images/banner1.jpg'},
      {id: 2, url: '/images/banner2.jpg'},
      {id: 3, url: '/images/banner3.jpg'},
    ],
    recommendArticles:[
    {
      id:0,
      cover: '/images/info.png',
      title: '这是标题',
      author: 'user',
      published_at: '12:11:56',
      content: '折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！',
    },
    {
      id:1,
      cover: '/images/info.png',
      title: '这是标题',
      author: 'user',
      published_at: '12:11:56',
      content: '222222222',
    },
  ]
  },

    /**
   * 切换 Tab
   */
  switchTab(event) {
    console.log(event);
    wx.switchTab({
      url: event.currentTarget.dataset.url,
    });
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.setStorageSync('articleData', this.data.recommendArticles)
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