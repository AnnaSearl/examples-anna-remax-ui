import * as React from 'react';
import { View } from 'remax/one';
import { Result, Button } from '@/components';
import Block from '@/common/block';
import styles from './index.module.scss';

export default () => {

  return (
    <View className={styles.app}>
      <Block title="Success">
        <Result
          height="60vh"
          status="success"
          title="提交成功"
          subTitle="您的询价需求已经提交成功，有报价时系统会及时通知您进行确认"
          extra={
            <View className={styles.extra}>
              <Button
                type="primary"
                style={{marginRight: "24rpx"}}
              >
                查看需求
              </Button>
              <Button>
                返回看板
              </Button>
            </View>
          }
        />
      </Block>
      <Block title="Info">
        <Result
          height="50vh"
          status="info"
          title="您已经提交过了"
          extra={
            <View className={styles.extra}>
              <Button>
                返回看板
              </Button>
            </View>
          }
        />
      </Block>
      <Block title="Warning">
        <Result
          height="50vh"
          status="warning"
          title="权限不足"
          subTitle="抱歉，您无权访问此页"
        />
      </Block>
      <Block title="Error">
        <Result
          height="70vh"
          status="error"
          title="提交失败"
          subTitle="请仔细检查核对信息后在提交"
        >
          <View className={styles.item}>
            1. 请根据图片信息填写相关信息。
          </View>
          <View className={styles.item}>
            2. 如果您有任何疑问请及时联系客服。
          </View>
        </Result>
      </Block>
    </View>
  );
};
