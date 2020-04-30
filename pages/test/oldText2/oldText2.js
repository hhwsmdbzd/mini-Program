var postData = require("../../../data/oldtext.js");
var progressNum = 0;

function timing(that) {
  var seconds = that.data.seconds
  if (seconds > 1800) {
    that.setData({
      time: "Time is up!"
    });
    return;
  }
  setTimeout(function() {
    that.setData({
      seconds: seconds + 1
    });
    timing(that)
  }, 1000)
  formatSeconds(that)
}

function formatSeconds(that) {
  var mins = 0,
    seconds = that.data.seconds,
    time = ''
  if (seconds > 59 && seconds < 3600) {
    mins = parseInt(seconds / 60)
    seconds = seconds % 60
  }
  that.setData({
    time: formatTime(mins) + ":" + formatTime(seconds)
  });
}

function formatTime(num) {
  if (num < 10)
    return '0' + num
  else
    return num + ''
}

Page({
  data: {
    pro: 0,
    index: 0,
    scores: 0,
    clear: false,
    title: postData.questions,
    choise: postData.answers,
    radio: ['(A)', '(B)', '(C)'],
    scorelistA: [0, 2, 0, 4, 4, 4, 2, 0, 1, 0, 0, 0, 2, 2, 2, 2, 4, 2, 4, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    scorelistB: [1, 1, 2, 2, 2, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    scorelistC: [2, 0, 4, 0, 0, 0, 0, 2, 0, 2, 4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    seconds: 0,
    time: '00:00'
  },

  select: function(e) {
    var tmp = e.detail.value;
    progressNum = progressNum + 3.5;
    this.setData({
      pro: progressNum
    })

    if (tmp == '(A)') {
      this.setData({
        scores: this.data.scores + this.data.scorelistA[this.data.index]
      })
    } else if (tmp == '(B)') {
      this.setData({
        scores: this.data.scores + this.data.scorelistB[this.data.index]
      })
    } else if (tmp == '(C)') {
      this.setData({
        scores: this.data.scores + this.data.scorelistC[this.data.index]
      })
    }

    if (this.data.index < 29) {
      this.setData({
        index: this.data.index + 1,
        clear:false
      });
    } else {
      console.log(this.data.scores);
      this.submit();
    }
  },

  submit: function() {
    wx.navigateTo({
      url: '/pages/test/oldText3/oldText3?scores=' + this.data.scores + '&time=' + this.data.time,
    })
  },
  onLoad: function(options) {
    
  },

  onReady: function() {

  },

  onShow: function() {
    timing(this);
    this.setData({
      scores: 0,
    })
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