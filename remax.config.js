module.export = {
  one: true,
  // 通过环境变量区分不同平台的输出目录
  output: 'dist/' + process.env.REMAX_PLATFORM,
};