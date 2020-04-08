import * as React from 'react';
import { Navigator as AlipayNavigator } from 'remax/alipay';
import { Navigator as WechatNavigator } from 'remax/wechat';
import { Platform } from 'remax';

// 自定义 Props
type Props = any;

export default function Image(props: Props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayNavigator {...props} />;
    case 'wechat':
    default:
      return <WechatNavigator {...props} />;
  }
}
