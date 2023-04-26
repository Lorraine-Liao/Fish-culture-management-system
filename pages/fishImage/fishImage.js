const app = getApp();
const { request } = require('../../utils/request')
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    icon: [{ name: 'appreciate', isShow: true }, { name: 'check', isShow: true }, { name: 'close', isShow: true }, { name: 'edit', isShow: true }, { name: 'emoji', isShow: true }, { name: 'exit', isShow: true },{ name: 'pick', isShow: true }, { name: 'wenzi', isShow: true }, { name: 'ellipse', isShow: true }, { name: 'qr_code', isShow: true }, { name: 'dianhua', isShow: true }, { name: 'icon', isShow: true }, { name: 'loading2', isShow: true }, { name: 'btn', isShow: true }],
    // fish: [
    // { url: "/images/jinyu.jpg", name: "金鱼" , isShow: true }, 
    // { url: "/images/douyu.jpg", name: "斗鱼" , isShow: true }, 
    // { url: "/images/dituyu.jpg", name: "地图鱼" , isShow: true }, 
    // { url: "/images/jinli.jpeg", name: "锦鲤" , isShow: true },
    // { url: "/images/kongqueyu.jpeg", name: "孔雀鱼" , isShow: true },
    // { url: "/images/longyu.jpeg", name: "龙鱼" , isShow: true },
    // { url: "/images/qicaishenxianyu.jpg", name: "七彩神仙鱼" , isShow: true },
    // { url: "/images/yingwuyu.jpg", name: "鹦鹉鱼" , isShow: true }

    // ]

    fish: [],
  
  },
  

  // 加载列表数据
	onLoad() {
    const that = this

    // let params = {
    //   url: '/fishimages', 
    //   method: 'GET'
    // }
    


		this.getList().then(res => {
			if (res) {
				console.log(res);
				// let listData = res.data;
				// if (listData == null) {
				// 	wx.showToast({
				// 		title: '获取数据失败' + res.data.msg,
				// 		icon: 'error',
				// 		duration: 2000
				// 	});
				// } else {
				// 	that.setData({
				// 		showItem: true,
				// 		itemList: res.data.items
				// 	})
				// }
			}
		}).catch(err => {
			console.log('error: ', err);
			that.setData({
				showItem: false
			})
		})
	},

      // 获取全部数据
getList() {
  return request({
    url: '/fishimages', 
    method: 'GET'
  })
},

  searchFish(e) {
    let key = e.detail.value.toLowerCase();
    let list = this.data.fish;
    for (let i = 0; i < list.length; i++) {
      let a = key;
      let b = list[i].name.toLowerCase();
      if (b.search(a) != -1) {
        list[i].isShow = true
      } else {
        list[i].isShow = false
      }
    }
    this.setData({
      fish: list
    })
  }
})