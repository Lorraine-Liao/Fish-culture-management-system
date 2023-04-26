// pages/profile/profile.js
var app = getApp();
// var gender = [{
//     "id": "0",
//     "sex": "男"
//   }, 
Page({

    data: {
        avatarUrl: '/images/info.png',
        nickname: '',
        columns: ["未知","男", "女"],
        gender: 0 || wx.getStorageSync("gender") * 1,
        
        feedPicker: ['每日一次', '每日两次', '每日三次'],
        waterPicker: ['三天一次','一周一次','半个月一次',],
        startDate: '2018-12-25',
        lastFeedDate: '2018-12-25',
        lastWaterDate: '2018-12-25',
        feedIndex: '0',
        waterIndex: '0',
    },

    startDateChange(e) {
      this.setData({
        startDate: e.detail.value
      })
    },
    lastFeedDateChange(e) {
      this.setData({
        lastFeedDate: e.detail.value
      })
    },
    lastWaterDateChange(e) {
      this.setData({
        lastWaterDate: e.detail.value
      })
    },
    feedPickerChange(e) {
      console.log(e);
      this.setData({
        index: e.detail.value,
        feedIndex:e.detail.value
      })
    },
    waterPickerChange(e) {
      console.log(e);
      this.setData({
        index: e.detail.value,
        waterIndex:e.detail.value
      })
    },
//------------------------------选择头像-------------------    
    onChooseAvatar(e) {
        const { avatarUrl } = e.detail 
        this.setData({
          avatarUrl,
        })
        console.log('携带数据为：', e.detail)
      },

//------------------------------选择性别-------------------
      pickSex: function(e) {
        // var gender = this.data.columns[e.detail.value];
        this.setData({
            gender:  e.detail.value
        });
        console.log("当前选择性别-sex", e.detail);
    },

//------------------------------提交表单数据到后端-------------------    
//---------------！！！！！！先存到全局变量，性别有点问题-------------------    

    formSubmit(e) {
     
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        console.log('发生了submit事件，携带数据为：', this.data)

        app.globalData.user.avatarUrl = this.data.avatarUrl;
        app.globalData.user.nickname = e.detail.value.nickname;
        app.globalData.user.gender = e.detail.value.gender;
      },

 
//-------------------------------------------------
    onLoad: function (options) {
        
            this.setData({
                nickname: getApp().globalData.user.nickname,
                avatarUrl:getApp().globalData.user.avatarUrl,
                gender:getApp().globalData.user.gender,

             });
         
        console.log("22222222")  
    },

    // onShow: function () {
    //     //获取用户缓存数据并渲染页面
    //     this.setData({
    //       goodsList: wx.getStorageSync('likeData')
    //     })
    //   },
 
});