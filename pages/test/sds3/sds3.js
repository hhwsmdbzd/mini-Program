Page({
  data: {
    totalScore: 0,
    result: ['正常', '有抑郁症状', '轻度抑郁', '中度抑郁', '重度抑郁', ''],
    sds: 5
  },
  result: function(e) {

    if (this.data.totalScore < 50) {
      this.setData({
        sds: 0
      })
    } else if (this.data.totalScore < 53) {
      this.setData({
        sds: 1
      })
    } else if (this.data.totalScore < 62) {
      this.setData({
        sds: 2
      })
    } else if (this.data.totalScore < 72) {
      this.setData({
        sds: 3
      })
    } else if (this.data.totalScore < 100) {
      this.setData({
        sds: 4
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      totalScore: ((options.score - 0) * 125) / 100,
    })

    var data = this.data;
    console.log(options.score)
    console.log(this.data.totalScore)
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
  onShareAppMessage: function() {

  }
})