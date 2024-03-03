// index.js
Page({
  gotoattraction() {
    wx.navigateTo({
      url: '/pages/Attractions/Attractions',
    })
  },
  gotodelicacies() {
    wx.navigateTo({
      url: '/pages/delicacies/delicacies',
    })
  }
})
