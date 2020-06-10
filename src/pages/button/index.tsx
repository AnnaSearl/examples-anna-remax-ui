import * as React from 'react';
import { View } from 'remax/one';
import { Button as WButton } from 'remax/wechat';
import { Button } from '@/components';
import Block from '../../common/block';
import styles from './index.module.scss';

export default () => {

  const getPhoneNumber = (e: any) => {
    console.log(e)
  }

  const hanldeTap = (e: any) => {
    console.log('tap,', e)
  }

  return (
    <View className={styles.app}>
      <Block title="Type">
        <View className={styles.group}>
          <Button>default</Button>
          <Button type="primary">primary</Button>
        </View>
      </Block>
      <Block title="Plain">
        <View className={styles.group}>
          <Button plain>default</Button>
          <Button type="primary" plain >primary</Button>
        </View>
      </Block>
      <Block title="Hairline">
        <View className={styles.group}>
          <Button plain hairline>default</Button>
          <Button plain hairline type="primary">primary</Button>
          <Button 
            color="#00CC99" 
            plain 
            hairline 
            type="primary"
            wechat-open-type="getUserInfo"
            wechat-bindgetuserinfo={getPhoneNumber}
            onTap={hanldeTap}
          >#00CC99</Button>
          {/* <WButton 
            wechat-open-type="getUserInfo"
            wechat-bindgetuserinfo={getPhoneNumber}
            wechat-bindtap={hanldeTap}
            >原生滚滚滚</WButton> */}
        </View>
      </Block>
      <Block title="Type">
        <View className={styles.group}>
          <Button>default</Button>
          <Button type="primary">primary</Button>
        </View>
      </Block>
      <Block title="Danger">
        <View className={styles.group}>
          <Button danger>danger</Button>
          <Button type="primary" danger>danger</Button>
        </View>
      </Block>
      <Block title="Shape">
        <View className={styles.group}>
          <Button type="primary">round</Button>
          <Button type="primary" square>square</Button>
        </View>
      </Block>
      <Block title="Size">
        <View className={styles.group}>
          <Button type="primary" size="large">large</Button>
          <Button type="primary">default</Button>
          <Button type="primary" size="small">small</Button>
        </View>
      </Block>
      <Block title="Loading">
        <View className={styles.group}>
          <Button 
            type="primary" 
            loading
            loadingText="loading..."
          >
            loading
          </Button>
          <Button 
            type="primary"
            square 
            danger
            loading
            loadingText="Deleting..."
          >
            loading
          </Button>
        </View>
      </Block>
      <Block title="Disabled">
        <View className={styles.group}>
          <Button type="primary" disabled>disabled</Button>
          <Button type="primary" danger disabled>disabled</Button>
        </View>
      </Block>
      <Block title="Block">
        <View className={styles.group}>
          <Button 
            type="primary" 
            size="superlarge"
            block 
            style={{marginBottom: "30rpx"}}
            loading
          >
            block
          </Button>
          <Button 
            type="primary"
            size="superlarge"
            danger 
            square 
            block
          >
            block
          </Button>
        </View>
      </Block>
    </View>
  );
};
