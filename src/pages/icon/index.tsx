import * as React from 'react';
import { View } from 'remax/one';
import { Icon } from 'anna-remax-ui';
import styles from './index.module.scss';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.block}>
        <View className={styles.title}>
          Type
        </View>
        <View className={styles.grid}>
          <View className={styles.item}>
            <Icon type="check" size="50rpx"></Icon>
            <View className={styles.name}>check</View>
          </View>
          <View className={styles.item}>
            <Icon type="close" size="50rpx"></Icon>
            <View className={styles.name}>close</View>
          </View>
          <View className={styles.item}>
            <Icon type="comment"  size="50rpx"></Icon>
            <View className={styles.name}>comment</View>
          </View>
          <View className={styles.item}>
            <Icon type="scan" size="50rpx"></Icon>
            <View className={styles.name}>scan</View>
          </View>
          <View className={styles.item}>
            <Icon type="locationfill" size="50rpx"></Icon>
            <View className={styles.name}>likefill</View>
          </View>
          <View className={styles.item}>
            <Icon type="emojifill" size="50rpx"></Icon>
            <View className={styles.name}>emojifill</View>
          </View>
        </View>
      </View>
      <View className={styles.block}>
        <View className={styles.title}>
          Size
        </View>
        <View className={styles.grid}>
          <View className={styles.item}>
            <Icon type="favorfill" size="72rpx"></Icon>
            <View className={styles.name}>72rpx</View>
          </View>
          <View className={styles.item}>
            <Icon type="favorfill" size="50rpx"></Icon>
            <View className={styles.name}>50rpx</View>
          </View>
          <View className={styles.item}>
            <Icon type="favorfill" size="28rpx"></Icon>
            <View className={styles.name}>default</View>
          </View>
        </View>
      </View>
      <View className={styles.block}>
        <View className={styles.title}>
          Color
        </View>
        <View className={styles.grid}>
          <View className={styles.item}>
            <Icon type="likefill" size="50rpx" color="#FF6666"></Icon>
            <View className={styles.name}>#FF6666</View>
          </View>
          <View className={styles.item}>
            <Icon type="likefill" size="50rpx" color="#FFCC33"></Icon>
            <View className={styles.name}>#FFCC33</View>
          </View>
          <View className={styles.item}>
            <Icon type="likefill" size="50rpx"></Icon>
            <View className={styles.name}>default</View>
          </View>
        </View>
      </View>
    </View>
  );
};
