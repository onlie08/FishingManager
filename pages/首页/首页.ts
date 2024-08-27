Page({
  // 生命周期函数 onLoad
  onLoad() {
    // 初始化数据
    console.log("首页加载完成");
  },

  onUserProfile() {
    // 处理用户个人信息入口的逻辑
    tt.navigateTo({
      url: '/pages/index/index' // 用户信息页面
    });
  },

  onScan() {
    // 跳转到抽号页面
    tt.navigateTo({
      url: '/pages/scan/scan' // 抽号页面
    });
  },

  onService() {
    // 跳转到服务页面
    tt.navigateTo({
      url: '/pages/service/service' // 服务页面
    });
  },

  onMyProfile() {
    // 跳转到我的页面
    tt.navigateTo({
      url: '/pages/my/my' // 我的页面
    });
  }
});
