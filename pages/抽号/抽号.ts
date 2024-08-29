// import { getLocation } from 'tt';

// 定义抽号结果类型
interface DrawResult {
    number: number;
    position: number;
}

Page({
    data: {
        isDrawing: false as boolean,
        drawResult: null as DrawResult | null,
        fishPondName: "示例鱼塘" as string, // 鱼塘名称
        fishCondition: "鱼情良好，适合垂钓" as string, // 鱼情介绍
        latitude: null as number | null, // 默认纬度
        longitude: null as number | null, // 默认经度
    },

    onLoad() {
        this.getCurrentLocation(); // 页面加载时获取当前位置
    },

    getCurrentLocation() {
        // getLocation({
        //     type: 'wgs84',
        //     success: (res: tt.GetLocationSuccessCallbackResult) => {
        //         this.setData({
        //             latitude: res.latitude,
        //             longitude: res.longitude
        //         });
        //     },
        //     fail: (error: any) => {
        //         console.error('获取当前位置失败', error);
        //         // 设置默认位置
        //         this.setData({
        //             latitude: 30.6586, // 默认纬度
        //             longitude: 104.0648 // 默认经度
        //         });
        //     }
        // });
    },

    startDraw() {
        if (this.data.isDrawing) return; // 防止重复点击
        this.setData({ isDrawing: true });

        // 模拟抽号过程
        setTimeout(() => {
            // 假设抽号结果
            const result: DrawResult = {
                number: Math.floor(Math.random() * 100) + 1, // 随机号码
                position: Math.floor(Math.random() * 10) + 1, // 随机钓位
            };
            this.setData({ drawResult: result, isDrawing: false });
        }, 2000); // 模拟2秒的抽号时间
    },
});
