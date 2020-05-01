const pages = [
  'pages/index/index',
  'pages/button/index',
  'pages/cell/index',
  'pages/icon/index',
  'pages/checkbox/index',
  'pages/image-upload/index',
  'pages/card/index',
  'pages/popup/index',
  'pages/search-bar/index',
  'pages/tabs/index',
  'pages/input/index',
  'pages/picker/index',
  'pages/radio/index',
  'pages/filter/index',
  'pages/selector/index',
  'pages/cascade/index',
  'pages/result/index',
  'pages/switch/index',
  'pages/tag/index',
  'pages/rate/index',
  'pages/steps/index',
];
const title = '';
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
