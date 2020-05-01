import * as React from 'react';
import { View } from 'remax/one';
import { Tag } from '@/components';
import Block from '@/common/block';
import styles from './index.module.scss';

const { CheckableTag } = Tag;

export default () => {

  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <View className={styles.app}>
      <Block title="Basic">
        <View className={styles.container}>
          <Tag>Anna</Tag>
        </View>
      </Block>
      <Block title="Type">
        <View className={styles.container}>
          <Tag type="success">success</Tag>
          <Tag type="info">info</Tag>
          <Tag type="error">error</Tag>
        </View>
      </Block>
      <Block title="Size">
        <View className={styles.container}>
          <Tag size="large">large</Tag>
          <Tag>default</Tag>
          <Tag size="small">small</Tag>
        </View>
      </Block>
      <Block title="Checkable">
        <View className={styles.container}>
          <CheckableTag
            checked={checked1}
            onChange={(v) => setChecked1(v)}
          >
            大众优选
          </CheckableTag>
          <CheckableTag
            checked={checked2}
            onChange={(v) => setChecked2(v)}
          >
            点评高分
          </CheckableTag>
        </View>
      </Block>
    </View>
  );
};
