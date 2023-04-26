// pages/profile/profile.js
const APP = getApp();
// var gender = [{
//     "id": "0",
//     "sex": "男"
//   }, 
Page({

    data: {
        index: 0,
        // avatarUrl: '/images/info.png',
        nickname: '',
        genderIndex: null,
        columns: ["保密","男", "女"],
        // gender: 0 || wx.getStorageSync("gender") * 1,
        userData: {},
        userInfo: null,
    },

//------------------------------选择头像-------------------    
    onChooseAvatar(e) {
      // console.log(e.detail.avatarUrl)
        // const { avatarUrl } = e.detail.avatarUrl 
        this.setData({
          ['userInfo.avatarUrl']:e.detail.avatarUrl,
        })
        console.log('携带数据为：', e.detail)
      },

//------------------------------选择性别-------------------
      pickSex: function(e) {
        // var gender = this.data.columns[e.detail.value];
        this.setData({
          genderIndex:  e.detail.value
        });
        console.log("当前选择性别-sex", e.detail.value);
    },

//------------------------------提交表单数据到后端-------------------    
//---------------！！！！！！先存到全局变量，性别有点问题-------------------    

    formSubmit(e) {
     
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
        console.log('发生了submit事件，携带数据为：', this.data)

        APP.globalData.userInfo.avatarUrl = this.data.userInfo.avatarUrl;
        APP.globalData.userInfo.nickname = e.detail.value.nickname;
        APP.globalData.userInfo.genderIndex = e.detail.value.sex;

        if(this.data.index==0){
        
          this.data.userData.avatarUrl = this.data.userInfo.avatarUrl;
          this.data.userData.nickname = e.detail.value.nickname;
          this.data.userData.genderIndex = e.detail.value.sex;
          this.data.userData.post_num = '0';
          this.data.userData.got_post_comment_num = '0';
          this.data.userData.got_post_thumb_up_num = '0';
          // ID应该由数据库自增长，这里以后要修改
          this.data.userData.id = '000000';

          wx.setStorageSync('userData', this.data.userData)


            wx.showToast({
                icon: 'success',
                title: '填写资料成功',
                mask: true,
                duration: 1500,
                complete(res) {
                  setTimeout(function() {
                    wx.switchTab({
                        url: '/pages/my/my',
                     })
                  }, 1500);
                },
              });
        }
        else{
        wx.showToast({
            icon: 'success',
            title: '更新资料成功',
            mask: true,
            duration: 1500,
            complete(res) {
              setTimeout(function() {
                wx.navigateBack();
              }, 1500);
            },
          });
        }
      },

 
//-------------------------------------------------
    onLoad: function (options) {
        if (options.index != 'undefined') {
            this.setData({
               index: options.index
            })
         };

            this.setData({
                userInfo: APP.globalData.userInfo
                // nickname: APP.globalData.user.nickname,
                // avatarUrl:APP.globalData.user.avatarUrl,
                // gender:APP.globalData.user.gender,
             });
             if (this.data.index == 0) {
             APP.Notify({type: 'primary', message: '请填写基本信息'});
             }
        console.log("22222222")  
    },

    onShow: function () {
        //获取用户缓存数据并渲染页面
        // this.setData({
        //   userData: wx.getStorageSync('userData')
        // })
        // console.log(this.data.userData.avatarUrl+"1111122222");

      },
 
});