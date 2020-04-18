// pages/personal/MyAlbum/MyAlbum.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    DateAlbum:[
      {
        imgUrls: [
          '/images/static/swiper1.jpg',
          '/images/static/swiper2.jpg',
          '/images/static/swiper3.jpg',
          '/images/static/swiper4.jpg',
        ],
        date: '2020-03-25',
      },
      {
        imgUrls: [
          '/images/static/swiper2.jpg',
          '/images/static/swiper4.jpg',
          '/images/static/swiper1.jpg',
        ],
        date: '2019-04-24',
      },
      {
        imgUrls: [
          '/images/static/swiper1.jpg',
          '/images/static/swiper2.jpg',
        ],
        date: '2018-04-23',
      }
    ]
  },
})