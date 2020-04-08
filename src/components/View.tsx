import * as React from 'react';
import { View as AlipayView } from 'remax/alipay';
import { View as WechatView } from 'remax/wechat';
import { Platform } from 'remax';

// 自定义 Props
type Props = any;

export default function Image(props: Props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayView {...props} />;
    case 'wechat':
    default:
      return <WechatView {...props} />;
  }
}
