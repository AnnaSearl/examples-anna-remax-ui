import * as React from 'react';
import { Navigator as AlipayNavigator } from 'remax/ali';
import { Navigator as WechatNavigator } from 'remax/wechat';

// 自定义 Props
type Props = any;

export default function Image(props: Props) {
  switch (process.env.REMAX_PLATFORM) {
    case 'ali':
      return <AlipayNavigator {...props} />;
    case 'wechat':
      return <WechatNavigator {...props} open-type="navigate" />;
    default:
      return <WechatNavigator {...props} />;
  }
}
