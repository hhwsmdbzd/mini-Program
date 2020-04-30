// pages/oldText3/oldText3.js
Page({
  data: {
    totalScore: 0,
    time: '00:00',
    result: ['你的心理年龄为20—29岁', '你的心理年龄为30—39岁', '你的心理年龄为40—49岁', '你的心理年龄为50—59岁', '你的心理年龄为60岁以上',''],
    old: 5
  },
  result: function(e) {

    if (this.data.totalScore < 30) {
      this.setData({
        old: 0
      })
    } else if (this.data.totalScore < 50) {
      this.setData({
        old: 1
      })
    } else if (this.data.totalScore < 65) {
      this.setData({
        old: 2
      })
    } else if (this.data.totalScore < 74) {
      this.setData({
        old: 3
      })
    } else if (this.data.totalScore < 76) {
      this.setData({
        old: 4
      })
    }
  },
  onLoad: function(options) {
    this.setData({
      totalScore: options.scores - 0,
      time: options.time
    })

    var data = this.data;
    console.log(options.scores)
    console.log(options.time)
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