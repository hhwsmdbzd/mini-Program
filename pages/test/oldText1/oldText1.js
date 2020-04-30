Page({
  data: {
   
  },
  tooldText2:function(e){
    wx.redirectTo({
      url: '/pages/test/oldText2/oldText2',
    })
  },
    /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: 'SZU心理辅导',
      path: "pages/Home/Home",
      imgurl: "https://szu-xlzxyy2019-1300031739.cos.ap-shenzhen-fsi.myqcloud.com/headPicture.jpg",
      success: function (res) { },
      fail: function (res) { }
    }
  }
})