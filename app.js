// app.js
const OnFire = require('./libraries/onfire.js');
import Notify from './miniprogram_npm/@vant/weapp/notify/notify.js';

App({
  Notify: Notify,

  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    wxappName: '观赏鱼小程序',
    userInfo: {
      id: '',
      is_admin: true,
      avatarUrl: '/images/info.png',
      nickname: '',
      genderIndex: '0',
      post_num: '0',
      got_post_comment_num: '0',
      got_post_thumb_up_num: '0'
    },
    wechatUserInfo:{},

  OnFire: OnFire,
  isAuth: false,
  }
})
