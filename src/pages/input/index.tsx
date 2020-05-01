import * as React from 'react';
import { View } from 'remax/one';
import { Input } from '@/components';
import styles from './index.module.scss';

export default () => {

  return (
    <View className={styles.app}>
      <View className={styles.group}>
        <View className={styles.title}>Basic</View>
        <View className={styles.content}>
          <Input placeholder="Please enter" border={false} />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Label</View>
        <View className={styles.content}>
          <Input label="Text" placeholder="Please enter" border={false} />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>inputAlign</View>
        <View className={styles.content}>
          <Input label="Text" placeholder="Please enter" border={false} inputAlign="right" />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Type</View>
        <View className={styles.content}>
          <Input label="Number" placeholder="Please enter" border={false} type="number" />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Disabled</View>
        <View className={styles.content}>
          <Input label="Text" disabled placeholder="Please enter" value="read only" />
          <Input label="Text" disabled placeholder="Has been disabled" border={false} />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Required</View>
        <View className={styles.content}>
          <Input label="Phone" placeholder="Please enter" border={false} required />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Icon</View>
        <View className={styles.content}>
          <Input label="location" placeholder="Please enter" border={false} icon="location" />
        </View>
      </View>
    </View>
  );
};
