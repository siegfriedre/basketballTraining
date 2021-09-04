/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    // userInfo?: WechatMiniprogram.UserInfo,
    userInfo: Promise<WechatMiniprogram.UserInfo>,
    openId:''
  }
  // userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
  resolveUserInfo(userInfo : WechatMiniprogram.UserInfo):void,
}