Page({
  data: {
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    circular: false,
    current: 0,
    interval: 2000,
    duration: 500,
    truncatedSummary: '',
    isExpanded: false,
  },

  onImageClick(event: any) {
    const newsId = event.currentTarget.dataset.newsid;
    // 在这里实现进入新闻详情页的逻辑
  },
  navigateTo(event: any) {
    const target = event.currentTarget.dataset.target;
    // 根据target导航到不同的页面
  }
});
