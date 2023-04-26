const APP = getApp();
const PAGINATION = require('../../libraries/pagination.js');

Page({
  pagination: null,
  data: {
    appGlobalData: null,
    posts: [
      {
        id:2023,
        user_id: 0, 
        user_avatar: '/images/info.png',
        user_nickname: 'test',
        created_at_for_humans: '12:11:56',
        content_preview: 'good',
        images: [
          {file_path: '/images/info.png',
        },
        {file_path: '/images/info.png',
      },
        ],
        video: null,
        i_have_thumb_up: false,
        thumb_up_num: 2,
        i_have_comment: false,
        comment_num: 2,
      },
    
    ],

    entityClass: 'Modules\\Post\\Entities\\Post',
  },

  /**
   * onLoad
   */
  onLoad() {
    let _this = this;
    // wx.setStorageSync('communityData', this.data.posts)

    // this.pagination = new PAGINATION({
    //   apiPath: 'posts',
    //   dataKeyName: 'posts',
    //   pageThis: this,
    // });

    // this.pagination.getFirstPageData();

    // APP.authInitedCallback = function() {
    //   _this.setData({appGlobalData: APP.globalData});
    //   _this.pagination.getFirstPageData();
    // };

    // 订阅创建页面的 newPost 事件，把新创建的动态添加到动态列表中
    // APP.OnFire.on('newPost', function(post) {
    //   _this.data.posts.unshift(post);
    //   _this.setData({posts: _this.data.posts});
    // });
  },

  /**
   * onShow
   */
  onShow() {
    this.setData({appGlobalData: APP.globalData});
    var postData = wx.getStorageSync('postData')
    this.data.posts.unshift(postData)
  
  // 修改全部用户的社区的缓存数据
  wx.setStorageSync('posts', this.data.posts)
  wx.removeStorageSync('postData')
  this.setData({posts: wx.getStorageSync('posts')});
      // //获取缓存数据
      // this.setData({
      //   posts: wx.getStorageSync('postData')
      // })
  },

  /**
   * 监听 post 数据更新事件
   */
  listenUpdatePostDataEvent(event) {
    let post = event.detail.post;
    let postIndex = event.detail.postIndex;
    let dataKeyName = 'posts[' + postIndex + ']';

    this.setData({[dataKeyName]: post});
  },

  /**
   * goto 页面
   */
  gotoPage(event) {
    let url = event.currentTarget.dataset.url;

    wx.navigateTo({url: url});
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
      title: '动态 - ' + APP.globalData.wxappName,
    }
  },

  /**
   * 分享到朋友圈
   */
  onShareTimeline() {
    return {
      title: '动态 - ' + APP.globalData.wxappName,
    };
  },
});
