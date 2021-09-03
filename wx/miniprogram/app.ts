import {  getUserProfile } from "./utils/util"

let resolveUserInfo : (value: WechatMiniprogram.UserInfo | PromiseLike<WechatMiniprogram.UserInfo>) => void
let rejectUserInfo : (reason?: any) => void

// app.ts
App<IAppOption>({
  globalData: {
    userInfo: new Promise((resolve,reject) => {
      // 获取用户信息 - Promise版
      // getsetting可去？
      // getSetting().then(res => {
      //   if(res.authSetting['scope.userInfo']){
      //     return getUserProfile()
      //   }
      //   return undefined
      // })
      console.log('只调用一次')
      // getUserProfile().then(res => {
      //   if(!res){
      //     return 
      //   }
      //   // 通知外面我获得了用户信息
      //   resolve(res.userInfo)
      // }).catch(err => reject(err))
      // 存储两个函数
      resolveUserInfo = resolve
      rejectUserInfo = reject
    }),
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },

  //暴露给外面，让其他页面也可以调用该函数，最好不用export
  //需要在index.d.ts声明
  resolveUserInfo(userInfo : WechatMiniprogram.UserInfo) :void {
    resolveUserInfo(userInfo) // 虽然重名，但没加this就调全局变量
  }
})