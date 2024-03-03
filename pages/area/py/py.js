// pages/Attractions/Attractions.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },


  goback() {
    wx.navigateBack()
  },

  // 区域间切换
  gototh() {
    wx.navigateTo({
      url: '/pages/Attractions/Attractions',
    })
  },

  gotohp() {
    wx.navigateTo({
      url: '/pages/area/hp/hp',
    })
  },

  gotoyx() {
    wx.navigateTo({
      url: '/pages/area/yx/yx',
    })
  },

  gotopy() {
    wx.navigateTo({
      url: '/pages/area/py/py',
    })
  },

  gotohz() {
    wx.navigateTo({
      url: '/pages/area/hz/hz',
    })
  },

  gotoby() {
    wx.navigateTo({
      url: '/pages/area/by/by',
    })
  },

  gotons() {
    wx.navigateTo({
      url: '/pages/area/ns/ns',
    })
  },

  gotohd() {
    wx.navigateTo({
      url: '/pages/area/hd/hd',
    })
  },

  gotozc() {
    wx.navigateTo({
      url: '/pages/area/zc/zc',
    })
  },

  gotolw() {
    wx.navigateTo({
      url: '/pages/area/lw/lw',
    })
  },

  gotoch() {
    wx.navigateTo({
      url: '/pages/area/ch/ch',
    })
  },
  // 区域详细景点跳转
  thLnyxy() {
    wx.navigateTo({
      url: '/pages/Attractions_ex/Attractions_ex',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})