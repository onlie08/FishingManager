import { Page } from 'taro';

interface DrawRecord {
    username: string;
    number: number;
    position: string;
    drawTime: string;
    isRedraw: boolean; // 是否重抽
}

interface SettingState {
    date: string;
    fishingSpots: number;
    excludeOdd: boolean;
    excludeEven: boolean;
    manualExclude: boolean;
    manualExclusions: string;
    drawDetails: DrawRecord[];
    username: string; // 用户名
}

class DrawingSettingsPage extends Page {
    state: SettingState = {
        date: new Date().toISOString().split('T')[0], // 默认当天
        fishingSpots: 0,
        excludeOdd: false,
        excludeEven: false,
        manualExclude: false,
        manualExclusions: '',
        drawDetails: [],
        username: '' // 初始化用户名
    };

    onDateChange = (event: any) => {
        this.setState({ date: event.detail.value });
    };

    onExcludeOddChange = (event: any) => {
        this.setState({ excludeOdd: event.detail.value });
    };

    onExcludeEvenChange = (event: any) => {
        this.setState({ excludeEven: event.detail.value });
    };

    onManualExcludeChange = (event: any) => {
        this.setState({ manualExclude: event.detail.value });
    };

    // 假设有方法设置用户名
    onUsernameChange = (event: any) => {
        this.setState({ username: event.detail.value });
    };

    onSubmit = () => {
        const { fishingSpots, excludeOdd, excludeEven, manualExclusions, date, username } = this.state;

        // 验证钓位数量是否设置
        if (!fishingSpots) {
            Taro.showToast({ title: '请设置钓位数量！', icon: 'none' });
            return;
        }

        // 抽号逻辑
        const exclusions: string[] = [];
        if (excludeOdd) exclusions.push('odd');
        if (excludeEven) exclusions.push('even');
        if (manualExclusions) {
            exclusions.push(...manualExclusions.split(',').map(num => num.trim()).filter(Boolean));
        }

        // 假设抽号并记录
        const newRecord: DrawRecord = {
            username, // 记录用户名
            number: this.getRandomNumber(exclusions),
            position: `钓位 ${fishingSpots}`,
            drawTime: date,
            isRedraw: false // 默认不是重抽
        };

        this.setState({ drawDetails: [...this.state.drawDetails, newRecord] });

        // 重置设置
        this.setState({
            date: new Date().toISOString().split('T')[0],
            fishingSpots: 0,
            excludeOdd: false,
            excludeEven: false,
            manualExclusions: '',
            username: '' // 清空用户名
        });
    };

    getRandomNumber = (exclusions: string[]): number => {
        let number;
        do {
            number = Math.floor(Math.random() * 100) + 1; // 假设号码范围是 1 到 100
        } while (this.isExcluded(number, exclusions));
        return number;
    };

    isExcluded = (number: number, exclusions: string[]): boolean => {
        const isOdd = number % 2 !== 0;
        const isEven = number % 2 === 0;

        if (exclusions.includes('odd') && isOdd) return true;
        if (exclusions.includes('even') && isEven) return true;
        if (exclusions.includes(number.toString())) return true;

        return false;
    };
}

export default DrawingSettingsPage;
