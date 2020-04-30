Page({
  data: {
    startTime: '09:00',
    endTime: '17:00',
    unit: 60,
    reserveUnit: 60,
    activedConst: 101,
    disabledConst: 102,
    unreserveTime: [],
    themeColor: '#ffffff',
  },
  toRegister: function(e) {
    if (this.startTimeText != "" && this.endTimeText != "") {
      wx.navigateTo({
        url: '../register/register',
      })
    }
  },
  onSelectTime(e) {
    const {
      startTimeText,
      endTimeText
    } = e.detail;
    this.setData({
      startTimeText,
      endTimeText,
    })
  },
  toMyApm: function(e) {
    wx.navigateTo({
      url: '/pages/appointment/myapm/myapm?startTimeText=' + this.data.startTimeText + '&endTimeText=' + this.data.endTimeText,
    })
    console.log(this.data.startTimeText)
    console.log(this.data.endTimeText)
  },
  callus:function(){
    wx.makePhoneCall({
      phoneNumber: '0755-26978022',
    })
  },
  onLoad: function(options) {
    console.log(options)
    this.setData({
      unreserveTime: [{
        startTime: '2019-09-01 13:00:00',
        endTime: '2019-09-01 14:00:00',
        status: 102,
      }]
    });
  },

  onReady: function() {

  },

  onShow: function() {

  },

  onHide: function() {

  },

  onUnload: function() {

  },

  onPullDownRefresh: function() {

  },

  onReachBottom: function() {

  },

  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: 'SZU心理辅导',
      path: "pages/Home/Home",
      imgurl: "https://szu-xlzxyy2019-1300031739.cos.ap-shenzhen-fsi.myqcloud.com/headPicture.jpg",
      success: function(res) {},
      fail: function(res) {}
    }
  }
})