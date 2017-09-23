//app.js
const AV = require('./utils/leancloud.js');

// LeanCloud 应用的 ID 和 Key
AV.init({
  appId: 'Ync2m3RPYwWg3vG7pbQzav4P-gzGzoHsz',
  appKey: 'gotmo3bIzYKQIclzqO4I18EW',
});


App({
  onLaunch: function () {
    wx.getUserInfo({
      success: function(res) {
        console.log(res.userInfo)
      }
    })
  globalData: {
    userInfo: null
  }
  }
});