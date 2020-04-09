import * as React from 'react';
import { View } from 'remax/one';
import Popup from 'anna-remax-ui/esm/popup';
import Button from 'anna-remax-ui/esm/button'
import styles from './index.module.scss';

export default () => {

  const [show, setShow] = React.useState(false);
  const [show1, setShow1] = React.useState(false);
  const [show2, setShow2] = React.useState(false);

  return (
    <View className={styles.app}>
      <View className={styles.group}>
        <View className={styles.title}>Basic</View>
        <View className={styles.content}>
          <Button 
            type="primary" 
            size="superlarge"
            block
            onTap={() => setShow(true)}
          >
            Click here
          </Button>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>With Title</View>
        <View className={styles.content}>
          <Button 
            type="primary" 
            size="superlarge"
            block
            onTap={() => setShow1(true)}
          >
            Click here
          </Button>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Closeable</View>
        <View className={styles.content}>
          <Button 
            type="primary" 
            size="superlarge"
            block
            onTap={() => setShow2(true)}
          >
            Click here
          </Button>
        </View>
      </View>
      <Popup
        open={show}
        onClose={() => {setShow(false)}}
      >
        <View 
          style={{
            height: "400rpx",
            padding: "30rpx 24rpx"
          }}
        >
          content
        </View>
      </Popup>
      <Popup
        title="title"
        open={show1}
        onClose={() => {setShow1(false)}}
      >
        <View 
          style={{
            height: "400rpx",
            padding: "0 24rpx"
          }}
        >
          content
        </View>
      </Popup>
      <Popup
        title="title"
        closeable
        open={show2}
        onClose={() => {setShow2(false)}}
      >
        <View 
          style={{
            height: "400rpx",
            padding: "0 24rpx"
          }}
        >
          content
        </View>
      </Popup>
    </View>
  );
};
