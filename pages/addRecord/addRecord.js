const APP = getApp();
const SubscribeMessage = require('../../libraries/subscribe-message.js');

Page({
  data: {
    content: null,
    uploading: false,

  
    typeList:[
      {id: 0, name: '喂食'},
      {id: 1, name: '换水'},
      {id: 2, name: '增氧'},
      {id: 3, name: '照明'},
      {id: 4, name: '其他'},
    ],
    typeId:null,
  },

    // 选择类型
    chooseType(event) {
      //console.log(event)
      //console.log(event.currentTarget.dataset.index)
      // 获取当前点击的商品下标值
      var index = event.currentTarget.dataset.index
      console.log(index)
      // 获取当前点击的商品

      var data = this.data.typeList[index]
      this.setData({
        typeId: data.id
      })
      // console.log(data)
      // // 将当前数据添加到缓存
      // wx.setStorageSync('detailsData', data)
      // // 跳转页面
      // wx.navigateTo({
      //   url: '/pages/details/details',
      // })
    },

  /**
   * onLoad
   */
  onLoad() {
  },

  /**
   * setInputValue
   */
  setInputValue(event) {
    let field = event.currentTarget.dataset.field;
    this.data[field] = event.detail.value;
  },

  /**
   * 发布动态
   */
  createPostHandler(event) {
    wx.hideKeyboard();

    let _this = this;

    // 内容不能为空
    if (! _this.data.content) {
      wx.showModal({
        content: '请说点什么',
        showCancel: false,
      });

      throw 'post content can\'t be null';
    }


    let params = {
      content: _this.data.content,
      typeId: _this.data.content.typeId,
    };

    // wx.showLoading({mask: true, title: '发布中'});

    // 发布请求，设为存到本地
    
    // APP.REQUEST.POST('posts', params, {requestFailModalTitle: '动态发布失败'}).then((result) => {
    //   // 订阅微信通知
    //   SubscribeMessage.specifyTemplates(['thumb_up', 'comment', 'reply']).finally(function() {
    //     wx.navigateBack({
    //       success() {
    //         if (result.data.status) {
    //           APP.OnFire.fire('newPost', result.data);
    //           APP.Notify({message: '动态发布成功', type: 'primary'});
    //         } else {
    //           APP.Notify({message: '动态创建成功 \n 管理审核通过后将发布', type: 'warning'});
    //         }
    //       }
    //     });
    //   });
    // }).finally(() => {
    //   wx.hideLoading();
    // });


    console.log(event)
      console.log(_this.data)
      
  
     let addRecordData = {
        created_time: "2023/04/23",
        content_preview: this.data.content,
        typeId: this.data.typeId,
      };

      // // 将当前数据添加到缓存
      wx.setStorageSync('addRecordData', addRecordData)
      // // 跳转页面
      wx.switchTab({
        url: '/pages/feed/feed',
      })
  },
});
