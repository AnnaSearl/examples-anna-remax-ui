import * as React from 'react';
import { View } from 'remax/one';
import Cell from 'anna-remax-ui/esm/cell';
import styles from './index.module.scss';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.group}>
        <View className={styles.title}>Basic</View>
        <View className={styles.content}>
          <Cell label="Cell" border={false}>content</Cell>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Icon</View>
        <View className={styles.content}>
          <Cell label="Music" icon="musicfill" border={false}>content</Cell>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Required</View>
        <View className={styles.content}>
          <Cell label="Cell" required border={false}>content</Cell>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Arrow</View>
        <View className={styles.content}>
          <Cell label="Cell" arrow border={false}>content</Cell>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Border</View>
        <View className={styles.content}>
          <Cell label="Cell">content</Cell>
          <Cell label="Cell" border={false}>content</Cell>
        </View>
      </View>
    </View>
  );
};
