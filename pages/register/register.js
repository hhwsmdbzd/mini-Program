Page({
  data: {
    confuse: [{
        name: '心理适应',
        checked: false
      },
      {
        name: '心理困惑',
        checked: false
      },
      {
        name: '心理疑难',
        checked: false
      },
      {
        name: '亲密关系',
        checked: false
      }, {
        name: '工作学业',
        checked: false
      }, {
        name: '情绪管理',
        checked: false
      }, {
        name: '人际关系',
        checked: false
      }, {
        name: '个人成长',
        checked: false
      }, {
        name: '未来规划',
        checked: false
      }, {
        name: '性心理',
        checked: false
      }, {
        name: '人格问题',
        checked: false
      }, {
        name: '人生问题',
        checked: false
      }
    ],
    thchecked: false,
    index: 0,
    collage: ['点击选择', '师范学院（教育学部）', '艺术学部', '医学部', '马克思主义学院', '经济学院', '法学院', '人文学院', '外国语学院', '传播学院', '数学与统计学院', '物理与光电工程学院', '化学与环境工程学院', '生命与海洋科学学院', '机电与控制工程学院', '材料学院', '电子与信息工程学院', '计算机与软件学院', '建筑与城市规划学院', '土木与交通工程学院', '管理学院', '高等研究院', '深圳南特商学院', '国际交流学院', '继续教育学院'],
    fileid: ''
  },
  collagePick: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    const db = wx.cloud.database();
    db.collection('info').add({
      data: {
        collage: e.detail.value.sdcollage,
        cofuse: e.detail.value.otherConfuse,
        confuse_select: e.detail.value.confuseChoise,
        wantget: e.detail.value.wantToGet,
        name: e.detail.value.sdName,
        sdnum: e.detail.value.sdNumber,
        sex: e.detail.value.sdSex,
        tel:e.detail.value.sdTel
      },
      success: function(res) {
        console.log(res)
        wx.redirectTo({
          url: '/pages/register/success/success',
        })
      },
      fail: console.error
    })
    console.log(e.detail.value)
    console.log(e.detail.value.sdName)
  },
  formReset: function() {
    console.log('form发生了reset事件')
  },
  bindKeyInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  getInfo: function(e) {

  },
  toSuccess: function(e) {
    wx.showToast({
      title: '预约成功！',
      icon: 'success',
      duration: 5000
    })
  },

  toReturn: function() {
    wx.navigateTo({
      url: '/pages/appointment/appointment',
    })
  },

  checkedButton: function(e) {
    this.setData({
      thchecked: !this.data.thchecked,
    })
  },

  confuseClick(e) {
    let index = e.currentTarget.dataset.index
    this.data.confuse[index].checked = !this.data.confuse[index].checked
    this.setData({
      confuse: this.data.confuse
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      fileid: options.fileid
    })
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