Page({
  data: {
    name: "秃头的科比",
    age: '18',
    students: [
      {id: 1001, name: 'kobe', age: 19},
      {id: 1001, name: 'kobe', age: 19 },
      {id: 1001, name: 'kobe', age: 19 }
    ],
    counter: 0
  },
  add(){
    this.setData({
      counter: this.data.counter + 1
    })
  },
  sub(){
    this.setData({
      counter: this.data.counter - 1
    })
  }
})