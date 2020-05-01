import * as React from 'react';
import { View } from 'remax/one';
import { Picker } from '@/components';
import styles from './index.module.scss';


const options = [
  {key: '1', value: 'Remax'},
  {key: '2', value: 'Taro'},
  {key: '3', value: 'Nanachi'},
  {key: '4', value: 'Uni-app'},
  {key: '4', value: 'Mpvue'}
]

const option2 = [
  {key: '1', value: '春'},
  {key: '2', value: '夏'},
  {key: '3', value: '秋'},
  {key: '4', value: '冬'}
]

export default () => {

  const [value, setValue] = React.useState("0");
  const [value1, setValue1] = React.useState("0");
  const [value2, setValue2] = React.useState("0");
  const [value3, setValue3] = React.useState("0");
  const [value4, setValue4] = React.useState("0");

  return (
    <View className={styles.app}>
      <View className={styles.group}>
        <View className={styles.title}>Basic</View>
        <View className={styles.content}>
          <Picker
            value={value}
            onChange={v => setValue(v.key)}
            options={options} 
            placeholder="Please choose"
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Label</View>
        <View className={styles.content}>
          <Picker
            label="Scheme"
            value={value1}
            onChange={v => setValue1(v.key)}
            options={options} 
            placeholder="Please choose"
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>pickerAlign</View>
        <View className={styles.content}>
          <Picker
            label="Scheme"
            value={value2}
            onChange={v => setValue2(v.key)}
            options={options} 
            placeholder="Please choose"
            pickerAlign="right"
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Disabled</View>
        <View className={styles.content}>
          <Picker
            label="Scheme"
            options={options} 
            placeholder="Has been disabled"
            disabled
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Required</View>
        <View className={styles.content}>
          <Picker
            required
            label="Scheme"
            value={value3}
            onChange={v => setValue3(v.key)}
            options={options} 
            placeholder="Please choose"
          />
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Icon</View>
        <View className={styles.content}>
          <Picker
            icon="likefill"
            label="最爱的"
            value={value4}
            onChange={v => setValue4(v.key)}
            options={options} 
            placeholder="Please choose"
          />
        </View>
      </View>
    </View>
  );
};
