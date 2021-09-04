const app = getApp<IAppOption>()
Page({
    data: {
        userName:'',
        studyTime:'',
        phone:'',
        sex:''
    },
    onLoad(){

    },
    bindInputUserName: function(e:WechatMiniprogram.Input) {
        this.setData({
            userName: e.detail.value
        })
    },
    bindInputStudyTime(e:WechatMiniprogram.Input){
        this.setData({
            studyTime:e.detail.value
        })
    },
    bindInputPhone(e:WechatMiniprogram.Input){
        this.setData({
            phone: e.detail.value
        })
    },
    bindInputSex(e:WechatMiniprogram.TouchEvent){
        if(e.detail.value === true)
            this.data.sex = '男'
        else
            this.data.sex = '女'
    },
    register(){
        // var that = this
        let openId = app.globalData.openId
        let username = this.data.userName
        let studyTime = this.data.studyTime
        let phone = this.data.phone
        let sex=  this.data.sex
        console.log(username+studyTime+phone+sex)
        // formdata:{
        //     openId:openId,
        //     username: username,
        //     studyTime: studyTime,
        //     phone: phone,
        //     sex: sex,
        // }
    }
})