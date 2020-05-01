import * as React from 'react';
import { View } from 'remax/one';
import { SearchBar } from '@/components';
import styles from './index.module.scss';

export default () => {

  const [value, setValue] = React.useState('');
  const [value1, setValue1] = React.useState('');
  const [value2, setValue2] = React.useState('');

  return (
    <View className={styles.app}>
      <View className={styles.group}>
        <View className={styles.title}>Basic</View>
        <View className={styles.content}>
          <SearchBar
            placeholder="搜索"
            value={value}
            onInput={(v: any) => setValue(v)}
            onClear={() => setValue('')}
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Show action button</View>
        <View className={styles.content}>
          <SearchBar
            placeholder="搜索"
            keepShowActionButton
            value={value1}
            onInput={(v: any) => setValue1(v)}
            onClear={() => setValue1('')}
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Custom action text</View>
        <View className={styles.content}>
          <SearchBar
            placeholder="搜索"
            actionName="搜索"
            value={value2}
            onInput={(v: any) => setValue2(v)}
            onClear={() => setValue2('')}
            onSubmit={() => {}}
            onActionClick={() => console.log('action')}
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Size</View>
        <View className={styles.content}>
          <SearchBar
            size="large"
            placeholder="large"
            style={{marginBottom: '30rpx'}}
          />
          <SearchBar
            placeholder="default"
            style={{marginBottom: '30rpx'}}
          />
          <SearchBar
            size="small"
            placeholder="small"
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Custom input style</View>
        <View className={styles.content}>
          <SearchBar
            placeholder="搜索"
            inputStyle={{
              backgroundColor: "#333",
            }}
          />
        </View>
      </View>
    </View>
  );
};
