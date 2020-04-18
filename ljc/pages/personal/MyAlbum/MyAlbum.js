// pages/personal/MyAlbum/MyAlbum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    DateAlbum:[
      {
        imgUrls: [
          '/images/post/beijing.jpg',
          '/images/static/swiper.png',
        ],
        date: '2020-03-25',
      },
      {
        imgUrls: [
          '/images/static/swiper.png',
          '/images/post/beijing.jpg',
        ],
        date: '2019-04-24',
      },
      {
        imgUrls: [
          '/images/post/beijing.jpg',
        ],
        date: '2018-04-23',
      }
    ]
  },
})