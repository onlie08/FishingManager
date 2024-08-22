Page({
    // 生命周期函数 onLoad
    onLoad() {
      // 初始化服务相关数据
      console.log("服务页面加载完成");
      this.loadServiceItems();
    },
  
    loadServiceItems() {
      // 模拟加载服务项目
      console.log("加载钓场服务项目...");
      // 实际情况下，可以从后端 API 获取服务数据
    },
  
    onPurchase() {
      // 处理商品购买逻辑
      tt.navigateTo({
        url: '/pages/purchase/purchase' // 商品购买页面
      });
    }
  });
  