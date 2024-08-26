// types.ts
export interface User {
    avatar: string;
    nickname: string;
  }
  
  Page({
    data: {
      user: {} as User,
      抽号records: [], // Placeholder for actual data
      收费标准: [],   // Placeholder for actual data
      数据分析: [],   // Placeholder for actual data
      赛事records: [], // Placeholder for actual data
      反馈records: []  // Placeholder for actual data
    },
  
    onLoad: function () {
      this.loadTestData();
    },
  
    loadTestData: function () {
      // Load some test data for demonstration purposes
      this.setData({
        user: {
          avatar: '', // Default avatar URL or leave empty
          nickname: '' // Default nickname or leave empty
        },   
      });
    },
  
    editProfile: function () {
      tt.navigateTo({
        url: '/pages/profile-edit/profile-edit'
      });
    },
  
    navigateTo抽号管理: function () {
      tt.navigateTo({
        url: '/pages/抽号管理/抽号管理'
      });
    },
  
    navigateTo收费管理: function () {
      tt.navigateTo({
        url: '/pages/收费管理/收费管理'
      });
    },
  
    navigateTo数据分析: function () {
      tt.navigateTo({
        url: '/pages/数据分析/数据分析'
      });
    },
  
    navigateTo赛事管理: function () {
      tt.navigateTo({
        url: '/pages/赛事管理/赛事管理'
      });
    },
  
    navigateTo反馈管理: function () {
      tt.navigateTo({
        url: '/pages/反馈管理/反馈管理'
      });
    }
  });
  