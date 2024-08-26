// pages/抽号管理/抽号管理.ts
Page({
    data: {
      开放时间: '',
      结束时间: '',
      总钓位数: 0,
      排除号码: '',
      排除号码列表: [] as number[],
    },
  
    onLoad: function () {
      this.加载测试数据();
    },
  
    加载测试数据: function () {
      // 加载一些测试数据
      this.setData({
        开放时间: '2023-03-01 08:00',  // 示例时间
        结束时间: '2023-03-01 20:00',  // 示例时间
        总钓位数: 50,  // 示例钓位数
        排除号码: '13,26,39',  // 示例排除号码
      });
    },
  
    设置开放时间: function (e: any) {
      this.setData({
        开放时间: e.detail.value
      });
    },
  
    设置结束时间: function (e: any) {
      this.setData({
        结束时间: e.detail.value
      });
    },
  
    设置钓位数量: function (e: any) {
      this.setData({
        总钓位数: parseInt(e.detail.value, 10)
      });
    },
  
    设置排除号码: function (e: any) {
      let 排除号码 = e.detail.value;
      let 排除号码列表 = 排除号码.split(',').map((num: string) => parseInt(num.trim(), 10)).filter((num: number) => !isNaN(num));
      this.setData({
        排除号码: 排除号码,
        排除号码列表: 排除号码列表
      });
    },
  
    保存设置: function () {
      console.log('开放时间:', this.data.开放时间);
      console.log('结束时间:', this.data.结束时间);
      console.log('总钓位数:', this.data.总钓位数);
      console.log('排除号码列表:', this.data.排除号码列表);
  
      // 使用这些设置值进行实际的保存操作（比如调用后端 API）
    //   tt.showToast({
    //     title: '设置已保存',
    //     icon: 'success'
    //   });
    }
  });
  