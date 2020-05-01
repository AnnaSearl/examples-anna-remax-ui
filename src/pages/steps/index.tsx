import * as React from 'react';
import { View } from 'remax/one';
import { Steps } from '@/components';
import Block from '@/common/block';
import styles from './index.module.scss';

export default () => {

  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(false);
  const [value, setValue] = React.useState(0)

  return (
    <View className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <Steps 
            current={1}
            steps={[{
              title: "客户下单"
            }, {
              title: "商城发货"
            }, {
              title: "买家确认"
            }]} 
          />
        </View>
      </Block>
      <Block title="Status">
        <View className={styles.container}>
          <Steps
            current={1}
            status={"error"}
            steps={[{
              title: "客户下单"
            }, {
              title: "商城发货",
              errorTitle: "发货失败",
            }, {
              title: "买家确认"
            }]} 
          />
        </View>
      </Block>
      <Block title="Direction">
        <View 
          className={styles.container}
          style={{
            padding: "60px 80px",
          }}
        >
          <Steps
            direction="vertical"
            steps={[{
              title: "报价成功"
            }, {
              title: "询价中"
            }, {
              title: "待处理",
            }]} 
          />
        </View>
      </Block>
      <Block title="Description & Extra">
        <View 
          className={styles.container}
          style={{
            padding: "60px 80px",
          }}
        >
          <Steps
            direction="vertical"
            steps={[{
              title: "报价成功",
              description: "客户已接受报价",
              extra: "2020-5-1"
            }, {
              title: "询价中",
              description: "销售以向采购提交询价请求",
              extra: "2020-4-27"
            }, {
              title: "待处理",
              description: "客户已下单，订单等待销售处理",
              extra: "2020-4-23"
            }]} 
          />
        </View>
      </Block>
    </View>
  );
};
