import * as React from 'react';
import { Navigator } from '@/components';
import { View } from 'remax/one';
import styles from './index.module.scss';

export default () => {
  return (
    <View className={styles.app}>
      <Navigator className={styles.navBlock} url="/pages/button/index">
        Button
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/cell/index">
        Cell
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/icon/index">
        Icon
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/card/index">
        Card
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/checkbox/index">
        Checkbox
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/image-upload/index">
        ImageUpload
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/popup/index">
        Popup
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/search-bar/index">
        SearchBar
      </Navigator>
      <Navigator className={styles.navBlock} url="/pages/tabs/index">
        Tabs
      </Navigator>
    </View>
  );
};
