// pages/Letter/Letter.js
var App = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    starTitle:'',
    starTime:'1'
  },
   dateChange:function(e){
     let value=e.detail.value;
     this.setData({date:value});
   },
  onTap:function(e){
    console.log(e)
    var that = this;
    wx.navigateTo({
      url: '../write-Letter/write-Letter?starTitle=' + e.detail.value.starTitle +'&&starTime='+this.data.date,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})