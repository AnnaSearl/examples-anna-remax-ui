import React, { useState } from 'react';
import { View } from 'remax/one';
import { Checkbox, Textarea } from 'anna-remax-ui';
import Block from '@/common/block';
import styles from './index.module.scss';

const radioStyle={paddingBottom: '30rpx'}

export default () => {

  const [isTrue, setIsTrue] = useState(true);
  const [option, setOption] = useState('0');

  return (
    <View className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <Checkbox label="checkbox" checked />
        </View>
      </Block>
      <Block title="Label">
        <View className={styles.container}>
          <Checkbox 
            label="NO" 
            checked={!isTrue}
            onChange={() => setIsTrue(v => !v)}
          />
          <Checkbox 
            label="YES" 
            checked={isTrue}
            onChange={() => setIsTrue(v => !v)}
          />
        </View>
      </Block>
      <Block title="Group && Extra">
        <View className={styles.container}>
          <Checkbox.Group
            direction="column"
            value={option}
            onChange={(checked: boolean, value: any) => setOption(value)}
          >
            <Checkbox
              value={'0'}
              label="时效问题"
              style={radioStyle}
            />
            <Checkbox
              value={'1'}
              label="价格问题"
              style={radioStyle}
            />
            <Checkbox
              value={'2'}
              label="其他"
              extra={
                <View className={styles.radioExtra}>
                  <Textarea
                    className={styles.remarks}
                    placeholder='若为其他，请填写备注（注：此处为extra）'
                    value={''}
                    showCount={false}
                  />
                </View>
              }
            />
          </Checkbox.Group>
        </View>
      </Block>
    </View>
  );
};
