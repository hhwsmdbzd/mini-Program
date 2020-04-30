var postData = require("../../../data/sds.js");


Page({

  data: {
    title: postData.questions,
    choise: postData.answers,
    radio: ['A', 'B', 'C', 'D'],
    listA: [1, 4, 1, 1, 4, 4, 1, 1, 1, 1, 4, 4, 1, 4, 1, 4, 4, 4, 1, 4],
    listB: [2, 3, 2, 2, 3, 3, 2, 2, 2, 2, 3, 3, 2, 3, 2, 3, 3, 3, 2, 3],
    listC: [3, 2, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2, 3, 2, 3, 2, 2, 2, 3, 2],
    listD: [4, 1, 4, 4, 1, 1, 4, 4, 4, 4, 1, 1, 4, 1, 4, 1, 1, 1, 4, 1],
    score: 0,
    index: 0,
    clear: false
  },
  select: function(e) {
    var tmp = e.detail.value;
    if (tmp == 'A') {
      this.setData({
        score: this.data.score + this.data.listA[this.data.index]
      })
    } else if (tmp == 'B') {
      this.setData({
        score: this.data.score + this.data.listB[this.data.index]
      })
    } else if (tmp == 'C') {
      this.setData({
        score: this.data.score + this.data.listC[this.data.index]
      })
    } else if (tmp == 'D') {
      this.setData({
        score: this.data.score + this.data.listD[this.data.index]
      })
    }

    if (this.data.index < 19) {
      this.setData({
        index: this.data.index + 1,
        clear: false
      })
    } else {
      console.log(this.data.score);
      this.submit();
    }
  },

  submit: function() {
    wx.navigateTo({
      url: '/pages/test/sds3/sds3?score=' + this.data.score,
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
    this.setData({
      score: 0,
    })
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