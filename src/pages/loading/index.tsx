import * as React from 'react';
import { View } from 'remax/one';
import { Loading } from '@/components';
import Block from '@/common/block';
import styles from './index.module.scss';

export default () => {

  const [checked, setChecked] = React.useState(true);
  const [checked1, setChecked1] = React.useState(false);
  const [value, setValue] = React.useState(0)

  return (
    <View className={styles.app}>
      <Block title="Basic">
      <View className={styles.grid}>
          <View className={styles.item}>
            <Loading />
          </View>
        </View>
      </Block>
      <Block title="Type">
        <View className={styles.grid}>
          <View className={styles.item}>
            <View className={styles.main} style={{transform: "translate(16px, 34px)"}}>
              <Loading type="anna" />
            </View>
            <View className={styles.name}>anna</View>
          </View>
          <View className={styles.item}>
            <View className={styles.main}>
              <Loading type="wave" />
            </View>
            <View className={styles.name}>wave</View>
          </View>
          <View className={styles.item}>
            <View className={styles.main}>
              <Loading />
            </View>
            <View className={styles.name}>default</View>
          </View>
        </View>
      </Block>
      <Block title="Color">
        <View className={styles.grid}>
          <View className={styles.item}>
            <View className={styles.main} style={{transform: "translate(16px, 34px)"}}>
              <Loading type="anna" color="#FF9999" />
            </View>
            <View className={styles.name}>#FF9999</View>
          </View>
          <View className={styles.item}>
            <View className={styles.main}>
              <Loading type="wave" color="#000000" />
            </View>
            <View className={styles.name}>#000000</View>
          </View>
          <View className={styles.item}>
            <View className={styles.main}>
              <Loading color="#3D8AF2" />
            </View>
            <View className={styles.name}>#3D8AF2</View>
          </View>
        </View>
      </Block>
    </View>
  );
};
