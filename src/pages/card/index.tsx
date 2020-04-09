import * as React from 'react';
import { View } from 'remax/one';
import Card from 'anna-remax-ui/esm/card';
import styles from './index.module.scss';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.group}>
        <View className={styles.title}>Basic</View>
        <View className={styles.content}>
          <Card>content</Card>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Title</View>
        <View className={styles.content}>
          <Card title="title">content</Card>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With extra</View>
        <View className={styles.content}>
          <Card 
            title="title" 
            extra={
              <View className={styles.extra}>status</View>
            }
          >
            I'll admit I was wrong, What else can I say girl, Can't you blame my head and not my heart, I was drunk I was gone,That don't make it right but
            
          </Card>
        </View>
      </View>
    </View>
  );
};
