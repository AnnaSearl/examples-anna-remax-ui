import * as React from 'react';
import { View } from 'remax/one';
import { Rate } from '@/components';
import Block from '@/common/block';
import styles from './index.module.scss';

export default () => {

  const [value, setValue] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(4);
  const [value4, setValue4] = React.useState(3);
  const [value5, setValue5] = React.useState(2);
  const [value6, setValue6] = React.useState(2);
  const [value7, setValue7] = React.useState(2);

  return (
    <View className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <Rate
            value={value}
            onChange={(v) => setValue(v)}
          />
        </View>
      </Block>
      <Block title="Custome Icon">
        <View className={styles.container}>
          <Rate
            icon="evaluate"
            iconFill="evaluate_fill"
            value={value5}
            onChange={(v) => setValue5(v)}
          />
        </View>
      </Block>
      <Block title="Color">
        <View className={styles.container}>
          <Rate
            color="#FF9999"
            icon="appreciate"
            iconFill="appreciatefill"
            value={value6}
            onChange={(v) => setValue6(v)}
          />
        </View>
      </Block>
      <Block title="Size">
        <View className={styles.container}>
          <Rate
            size="60px"
            value={value7}
            onChange={(v) => setValue7(v)}
          />
        </View>
      </Block>
      <Block title="Count">
        <View className={styles.container}>
          <Rate
            count={6}
            value={value3}
            onChange={(v) => setValue3(v)}
          />
        </View>
      </Block>
      <Block title="ReadOnly">
        <View className={styles.container}>
          <Rate
            readOnly
            value={value4}
            onChange={(v) => setValue4(v)}
          />
        </View>
      </Block>
      <Block title="With Label">
        <View className={styles.container}>
          <View style={{marginBottom: "20rpx"}}>
            <Rate
              label="物流服务"
              value={value1}
              onChange={(v) => setValue1(v)}
            />
          </View>
          <View>
            <Rate
              label="服务态度"
              value={value2}
              onChange={(v) => setValue2(v)}
            />
          </View>
        </View>
      </Block>
    </View>
  );
};
