//app.js
const AV = require('./utils/leancloud.js');
<<<<<<< HEAD
const User = require('./models/user.js');
=======
>>>>>>> c9288e6deccfb637731de5340764206a4775e5df

// LeanCloud 应用的 ID 和 Key
AV.init({
  appId: 'Ync2m3RPYwWg3vG7pbQzav4P-gzGzoHsz',
  appKey: 'gotmo3bIzYKQIclzqO4I18EW',
});
App({
  onLaunch: function () {
  let current_user = wx.getStorageSync('user')
  // console.log('this is the locally stored user', user)
  new AV.Query('Users')
    .equalTo('objectId', current_user)
    .find()
    .then( function(res) {
      if(res.length > 0){
        console.log('user exists')
      } else {
        wx.getUserInfo({
          success: function (res) {
            const user = res.userInfo
            // console.log(user.userInfo)
            new User('Users', user)
              .save()
              .then(function (res) {
                wx.setStorageSync('user', res.id)
              })
          }
        })
      }
    })

  },
  globalData: {
    user: null
  }
})