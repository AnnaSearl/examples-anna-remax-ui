const pages = [
  'pages/index/index',
  'pages/button/index',
  'pages/cell/index',
  'pages/icon/index',
  'pages/checkbox/index',
  'pages/image_upload/index',
];
const title = 'Anna Remax UI';
const backgroundColor = '#FF9999';

exports.wechat = {
  pages,
  window: {
    navigationBarTitleText: title,
    navigationBarBackgroundColor: backgroundColor
  }
};

exports.alipay = {
  pages,
  window: {
    defaultTitle: title,
    titleBarColor: backgroundColor
  }
};
