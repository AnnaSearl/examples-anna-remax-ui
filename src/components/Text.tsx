import * as React from 'react';
import { Text as AlipayText } from 'remax/alipay';
import { Text as WechatText } from 'remax/wechat';
import { Platform } from 'remax';

// 自定义 Props
type Props = any;

export default function Text(props: Props) {
  switch (Platform.current) {
    case 'alipay':
      return <AlipayText {...props} />;
    case 'wechat':
    default:
      return <WechatText {...props} />;
  }
}
