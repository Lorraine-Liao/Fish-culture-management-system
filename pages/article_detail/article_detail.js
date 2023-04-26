const APP = getApp();
const MODEL = require('../../libraries/model.js');
const THUMB = require('../../components/thumb/index.js');

Page({
  data: {
    appGlobalData: null,
    tabType: 'comment',

    entityClass: 'Modules\\Article\\Entities\\Article',
    modelId: null,
    // model: null,
    model:{
      cover: '/images/info.png',
      title: '这是标题',
      author: 'user',
      published_at: '12:11:56',
      content: '11111111111111111111111',
    },
    i_have_like: false
    },

  /**
   * onLoad
   */
  onLoad(options) {
    this.setData({modelId: options.id});
    this.getModelData();
    // wx.showLoading({title: '加载中'});
    // this.getModelData().finally(function() {
    //   wx.hideLoading()
    // })
  },

    /**
   * 获取模型数据
   */
  getModelData() {

    // let config = {
    //   apiPath: 'articles/' + this.data.modelId,
    //   dataKeyName: 'model',
    //   pageThis: this,
    // };

    // return new Promise(function(resolve, reject) {
    //   MODEL.getModel(config).then(function(result) {
    //     resolve(result);
    //   }).catch(function(res) {
    //     reject(res);
    //   });
    // });


    ////////
    
    var articles = wx.getStorageSync('articleData')
    var likes = wx.getStorageSync('likeData')
    console.log(articles)
    console.log(likes)
    for(var i = 0; i < articles.length; i++){
    if(articles[i].id == this.data.modelId)
    //  this.data.model=articles[i];
     this.setData({
      model: articles[i]
    })
  }
  for(var j = 0; j < likes.length; j++){
    if(likes[j].id == this.data.modelId)
    //  this.data.model=articles[i];
     this.setData({
      i_have_like: true
    })
  }
    
  
  },


 /**
   * 收藏处理
   */
  likeHandler(event) {
    console.log(event.currentTarget.dataset.value)
    
    this.setData({
      i_have_like: event.currentTarget.dataset.value
    })
    var likes = wx.getStorageSync('likeData')
    var model = this.data.model
    var islike = this.data.i_have_like
    if(likes.length){
    if(islike) {
      likes.unshift(model)
      console.log("222222")
    }
    else{
        // 1、收藏中有商品
        for (var i = 0; i < likes.length; i++) {
          if (likes[i].id == this.data.model.id) {
          
            likes.splice(this.data.model.id, 1);
            console.log(likes)
            console.log("444444")
          }
        }
      }
      wx.setStorageSync('likeData', likes)
    } else if(islike&&!likes.length){
      // 2、购物车中没有商品，直接将当前商品添加到收藏中
      var model = this.data.model
      console.log("55555")
      wx.setStorageSync('likeData', [model])
    }
    
    // let _this = this;

    // let params = {
    //   entity_id: this.data.modelId,
    //   entity_class: this.data.entityClass,
    //   type: 'thumb_up',
    //   value: event.currentTarget.dataset.value,
    // };

    // THUMB.thumbHandler(params, this.data.model).then(function() {
    //   _this.setData({model: _this.data.model});
    //   _this.getModelData();
    // });
  },

  /**
   * 点赞处理
   */
  thumbHandler(event) {
    let _this = this;

    let params = {
      entity_id: this.data.modelId,
      entity_class: this.data.entityClass,
      type: 'thumb_up',
      value: event.currentTarget.dataset.value,
    };

    THUMB.thumbHandler(params, this.data.model).then(function() {
      _this.setData({model: _this.data.model});
      _this.getModelData();
    });
  },



  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    this.getModelData().finally(function() {
      wx.stopPullDownRefresh();
    });
  },

  /**
   * 下拉加载更多
   */
  onReachBottom() {
  },

  /**
   * 分享到聊天
   */
  onShareAppMessage() {
    let config = {
      title: this.data.model.title,
    };

    if (this.data.model.cover) config.imageUrl = this.data.model.cover;

    return config;
  },

  /**
   * 分享到朋友圈
   */
  onShareTimeline() {
    let config = {
      title: this.data.model.title,
    };

    if (this.data.model.cover) config.imageUrl = this.data.model.cover;

    return config;
  },
});
