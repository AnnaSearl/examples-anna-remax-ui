import * as React from 'react';
import { View } from 'remax/one';
import ImageUpload from 'anna-remax-ui/esm/image-upload';
import Block from '@/common/block';
import styles from './index.module.scss';


export default () => {

  const [value, setValue] = React.useState(["https://smebimage.fuliaoyi.com/FkYCklRDGWpea9chxKsxPtYsrdtz"]);

  const handleChange = (files:any) => {
    setValue(files);
  }

  return (
    <View className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <ImageUpload
            files={value}
            onChange={handleChange}
          />
        </View>
      </Block>
    </View>
  );
};
