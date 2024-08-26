// types.ts
export interface User {
    avatar: string;
    nickname: string;
    points: number; // 积分
  }
  
  export interface 钓位Record {
    钓位号: string;
    date: string;
    location: string;
  }
  
  export interface 预约Record {
    date: string;
    location: string;
    paymentStatus: string;
  }
  
  export interface 赛事Record {
    id: string;
    name: string;
    date: string;
  }
  
  export interface 优惠券Record {
    id: string;
    name: string;
    status: string;
  }
  
  export interface 反馈Record {
    id: string;
    content: string;
  }
  