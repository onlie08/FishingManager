// page.ts
import { User, 钓位Record, 预约Record, 赛事Record, 优惠券Record, 反馈Record } from './types';

Page({
  data: {
    user: {} as User,
    抽号records: [] as 钓位Record[],
    预约records: [] as 预约Record[],
    赛事records: [] as 赛事Record[],
    优惠券records: [] as 优惠券Record[],
    反馈records: [] as 反馈Record[],
  },

  onLoad: function () {
    this.fetchUserInfo();
    this.fetch抽号Records();
    this.fetch预约Records();
    this.fetch赛事Records();
    this.fetch优惠券Records();
    this.fetch反馈Records();
  },

  fetchUserInfo: function () {
    tt.request({
      url: 'https://api.example.com/user-info',
      method: 'GET',
      success: (res: tt.RequestSuccessCallbackResult<User>) => {
        this.setData({
          user: res.data
        });
      },
      fail: (error: tt.GeneralCallbackResult) => {
        console.error("Failed to fetch user info", error);
      }
    });
  },

  fetch抽号Records: function () {
    tt.request({
      url: 'https://api.example.com/抽号-records',
      method: 'GET',
      success: (res: tt.RequestSuccessCallbackResult<钓位Record[]>) => {
        this.setData({
          抽号records: res.data
        });
      },
      fail: (error: tt.GeneralCallbackResult) => {
        console.error("Failed to fetch 抽号 records", error);
      }
    });
  },

  fetch预约Records: function () {
    tt.request({
      url: 'https://api.example.com/预约-records',
      method: 'GET',
      success: (res: tt.RequestSuccessCallbackResult<预约Record[]>) => {
        this.setData({
          预约records: res.data
        });
      },
      fail: (error: tt.GeneralCallbackResult) => {
        console.error("Failed to fetch 预约 records", error);
      }
    });
  },

  fetch赛事Records: function () {
    tt.request({
      url: 'https://api.example.com/赛事-records',
      method: 'GET',
      success: (res: tt.RequestSuccessCallbackResult<赛事Record[]>) => {
        this.setData({
          赛事records: res.data
        });
      },
      fail: (error: tt.GeneralCallbackResult) => {
        console.error("Failed to fetch 赛事 records", error);
      }
    });
  },

  fetch优惠券Records: function () {
    tt.request({
      url: 'https://api.example.com/优惠券-records',
      method: 'GET',
      success: (res: tt.RequestSuccessCallbackResult<优惠券Record[]>) => {
        this.setData({
          优惠券records: res.data
        });
      },
      fail: (error: tt.GeneralCallbackResult) => {
        console.error("Failed to fetch 优惠券 records", error);
      }
    });
  },

  fetch反馈Records: function () {
    tt.request({
      url: 'https://api.example.com/反馈-records',
      method: 'GET',
      success: (res: tt.RequestSuccessCallbackResult<反馈Record[]>) => {
        this.setData({
          反馈records: res.data
        });
      },
      fail: (error: tt.GeneralCallbackResult) => {
        console.error("Failed to fetch 反馈 records", error);
      }
    });
  },

  editProfile: function () {
    tt.navigateTo({
      url: '/pages/profile-edit/profile-edit',
    });
  },

  view抽号History: function () {
    tt.navigateTo({
      url: '/pages/history/抽号-history',
    });
  },

  view预约History: function () {
    tt.navigateTo({
      url: '/pages/history/预约-history',
    });
  },

  view费用标准: function () {
    tt.navigateTo({
      url: '/pages/info/费用标准',
    });
  },

  view规章制度: function () {
    tt.navigateTo({
      url: '/pages/info/规章制度',
    });
  },

  view钓场设施: function () {
    tt.navigateTo({
      url: '/pages/info/钓场设施',
    });
  },

  feedback: function () {
    tt.navigateTo({
      url: '/pages/feedback/feedback',
    });
  },

  报名赛事: function (e: tt.Event) {
    const { id } = e.currentTarget.dataset;
    // Implement 报名 logic for 赛事
  },

  view交流平台: function () {
    tt.navigateTo({
      url: '/pages/community/community',
    });
  },

  view个人互动记录: function () {
    tt.navigateTo({
      url: '/pages/community/activity',
    });
  },

  view兑换商品: function () {
    tt.navigateTo({
      url: '/pages/rewards/rewards',
    });
  },

  使用优惠券: function (e: tt.Event) {
    const { id } = e.currentTarget.dataset;
    // Implement 使用 logic for 优惠券
  }
});
