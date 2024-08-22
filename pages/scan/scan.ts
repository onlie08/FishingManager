Page({
    // 生命周期函数 onLoad
    onLoad() {
      // 初始化抽号逻辑
      console.log("抽号页面加载完成");
    },
  
    onScanButtonClick() {
      // 处理扫码抽号的逻辑
      tt.scanCode({
        success: (res) => {
          // 处理扫码结果
          console.log("扫描结果:", res.result);
          // 假设我们会根据扫描的结果进行后续处理，比如获取钓位信息等
        },
        fail: (err) => {
          console.error("扫描失败:", err);
        }
      });
    }
  });
  