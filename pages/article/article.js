const APP = getApp();
const PAGINATION = require('../../libraries/pagination.js');

Page({
  pagination: null,
  data: {
    appGlobalData: null,

    models: [],
    tabs: [
     {
      id:0,
        name: '推荐'
     },
     {
      id:1,
      name: '饲养繁育'
   },
   {
    id:2,
    name: '鱼类品系'
 },
 {
  id:3,
  name: '养鱼器具'
},
{
  id:4,
  name: '防治鱼病'
}
    ],
    tabId: 0,
    allTabItem: {id: 0, name: '推荐'},
  },

  /**
   * onLoad
   */
  onLoad() {
    // let _this = this;

    // this.pagination = new PAGINATION({
    //   apiPath: 'articles',
    //   dataKeyName: 'models',
    //   pageThis: this,
    // });

    // this.getModelsData();

    // // 文章分类
    // APP.REQUEST.GET('article-categories').then(function(result) {
    //   _this.data.tabs = [_this.data.allTabItem].concat(result.data);
    //   _this.setData({tabs: _this.data.tabs});
    // });
  },

  /**
   * onShow
   */
  onShow() {
    this.setData({appGlobalData: APP.globalData});
  },

  /**
   * 切换 Tab
   */
  tabSelectHandler(event) {
    this.setData({
      models: [],
      tabId: event.currentTarget.dataset.id,
    });
    this.getModelsData();
  },

  /**
   * 获取 Models
   */
  getModelsData(params) {
    if (params === undefined) params = {category_id: this.data.tabId};
    this.setData ({
      models: wx.getStorageSync('articleData')
    })
    // this.pagination.getFirstPageData(params);
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    this.pagination.getFirstPageData().finally(function() {
      wx.stopPullDownRefresh();
    });
  },

  /**
   * 下拉加载更多
   */
  onReachBottom() {
    this.pagination.getNextPageData();
  },

  /**
   * 分享到聊天
   */
  onShareAppMessage() {
    return {
      title: '文章 - ' + APP.globalData.wxappName,
    }
  },

  /**
   * 分享到朋友圈
   */
  onShareTimeline() {
    return {
      title: '文章 - ' + APP.globalData.wxappName,
    };
  },
});
