import * as React from 'react';
import { Navigator } from '@/base';
import { View } from 'remax/one';
import styles from './index.module.scss';

export default () => {
  return (
    <View className={styles.app}>
      <View className={styles.name}>
        Anna Remax UI
      </View>
      <View className={styles.title}>
        General
      </View>
      <Navigator className={styles.navBlock} url="/pages/button/index">
        Button
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/cell/index">
        Cell
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/icon/index">
        Icon
      </Navigator>
      <View className={styles.title}>
        Data Entry
      </View>
      <Navigator className={styles.navBlock} url="/pages/input/index">
        Input
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/picker/index">
        Picker
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/radio/index">
        Radio
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/checkbox/index">
        Checkbox
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/switch/index">
        Switch
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/selector/index">
        Selector
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/cascade/index">
        Cascade
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/image-upload/index">
        ImageUpload
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/search-bar/index">
        SearchBar
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/rate/index">
        Rate
      </Navigator>
      <View className={styles.title}>
        Data Display
      </View>
      <Navigator className={styles.navBlock} url="/pages/card/index">
        Card
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/steps/index">
        Steps
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/tag/index">
        Tag
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/tabs/index">
        Tabs
      </Navigator>
      <View className={styles.title}>
        Feedback
      </View>
      <Navigator className={styles.navBlock} url="/pages/filter/index">
        Filter
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/loading/index">
        Loading
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/popup/index">
        Popup
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/result/index">
        Result
      </Navigator>
    </View>
  );
};
