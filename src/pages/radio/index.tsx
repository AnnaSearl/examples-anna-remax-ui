import * as React from 'react';
import { View } from 'remax/one';
import { Radio } from '@/components';
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
          <Radio checked={checked} onChange={(v) => setChecked(v)} />
        </View>
      </Block>
      <Block title="Label">
        <View className={styles.container}>
          <Radio
            checked={checked1}
            onChange={() => setChecked1(v => !v)}
          >
            Remax
          </Radio>
          <Radio
            checked={!checked1}
            onChange={() => setChecked1(v => !v)}
          >
            Taro
          </Radio>
        </View>
      </Block>
      <Block title="Group">
        <View className={styles.container}>
          <Radio.Group
            value={value}
            onChange={(c, v) => setValue(v)}
          >
            <Radio
              value={0}
            >
              Apple
            </Radio>
            <Radio
              value={1}
            >
              Cherry
            </Radio>
            <Radio
              value={2}
            >
              Watermelon
            </Radio>
          </Radio.Group>
        </View>
      </Block>
    </View>
  );
};
