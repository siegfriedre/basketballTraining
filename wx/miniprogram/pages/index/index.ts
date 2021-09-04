// index.ts
// 获取应用实例
const app = getApp<IAppOption>()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: true,
    canIUseOpenData: false//wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.redirectTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    // if (wx.getUserProfile) {
    //   this.setData({
    //     canIUseGetUserProfile: true
    //   })
    // }
    // onload的时候去异步等userInfo，等到了就更新，有的话直接就更新，在其它页面也可以用，谁要谁就写
    app.globalData.userInfo.then(res => {
      console.log('set data')
      this.setData({
        userInfo: res,
        hasUserInfo: true,
      })
    })
    // this.updateMotto()
  },
  // 现在点击按钮触发的这个函数也不自己setdata了，调用resolveUserInfo之后交给onload的异步去setdata
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        // 这一步就是执行了app.globalData.userInfo的resolve函数，执行完之后上面的then就可以执行了
        app.resolveUserInfo(res.userInfo)
        // this.setData({
        //   userInfo: res.userInfo,
        //   hasUserInfo: true,
        //   canIUseOpenData: true
        // })
      }
    })
  },
  // getUserInfo(e: any) {
  //   // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
  //   console.log(e)
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // },
  updateMotto(){
    let shouldStop = false
    setTimeout(()=>{
      shouldStop = true
    },10000)

    let count = 0
    const update = () => {
      count++
      if(!shouldStop){
        this.setData({
          motto:`Update count:${count}`,
        },() =>{
          update()
        })
      }
    }
    
    update()
  },
  toRegister(){
    wx.navigateTo({
      // url: '../logs/logs',
      url: '../register/register',
    })
  }
})
