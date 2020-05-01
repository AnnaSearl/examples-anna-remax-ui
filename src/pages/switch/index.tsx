import * as React from 'react';
import { View } from 'remax/one';
import { Switch, Cell } from '@/components';
import Block from '@/common/block';
import styles from './index.module.scss';

export default () => {

  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(true);
  const [value, setValue] = React.useState(false)

  return (
    <View className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <Switch 
            checked={checked} 
            onChange={v => setChecked(v)} 
          />
        </View>
      </Block>
      <Block title="Small">
        <View className={styles.container}>
          <Switch
            small
            checked={checked1} 
            onChange={v => setChecked1(v)} 
          />
        </View>
      </Block>
      <Block title="Disabled">
        <View className={styles.container}>
          <Switch 
            disabled
            checked={false}
          />
          <View style={{display: 'inline-block', width: "30rpx", height: "24rpx"}} />
          <Switch 
            disabled
            checked
          />
        </View>
      </Block>
      <Block title="With Cell">
        <Cell
          label="设为默认地址"
          valueStyle={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <Switch 
            checked={value} 
            onChange={v => setValue(v)} 
          />
        </Cell>
      </Block>
    </View>
  );
};
