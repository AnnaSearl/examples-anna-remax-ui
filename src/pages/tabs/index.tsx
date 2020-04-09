import * as React from 'react';
import { View } from 'remax/one';
import Tabs from 'anna-remax-ui/esm/tabs';
import Card from 'anna-remax-ui/esm/card';
import styles from './index.module.scss';

const { TabContent } = Tabs;

const tabs = [{
  key: '0',
  title: 'All',
}, {
  key: "1",
  title: "Missed",
}]

const tabs1 = [{
  key: '0',
  title: 'All',
}, {
  key: "1",
  title: "Missed",
}]

const tabs2 = [{
  key: '0',
  title: '全部',
}, {
  key: "1",
  title: "待处理",
}, {
  key: "2",
  title: "询价中",
}, {
  key: "3",
  title: "待报价",
}, {
  key: "4",
  title: "报价中",
}]

const tabs3 = [{
  key: '0',
  title: '精选',
}, {
  key: "1",
  title: "关注",
}, {
  key: "2",
  title: "广场",
}]

const tabs4 = [{
  key: '0',
  title: 'All',
}, {
  key: "1",
  title: "Read",
}, {
  key: "2",
  title: "Missed",
}]

export default () => {

  const [stateKey, setStateKey] = React.useState('0');
  const [stateKey1, setStateKey1] = React.useState('0');
  const [stateKey2, setStateKey2] = React.useState('0');
  const [stateKey3, setStateKey3] = React.useState('0');
  const [stateKey4, setStateKey4] = React.useState('0');

  return (
    <View className={styles.app}>
      <View className={styles.group}>
        <View className={styles.title}>Basic</View>
        <View className={styles.content}>
          <Tabs
            tabs={tabs}
            onTabClick={({ key }) => setStateKey(key)}
            activeTab={stateKey}
          >
            {
              tabs.map((tab) => (
                <TabContent 
                  key={tab.key}
                  tabId={tab.key}
                  activeTab={stateKey}
                >
                  <Card>
                    <View className={styles.tabContent}>
                      {`${tab.title} content`}
                    </View>
                  </Card>
                </TabContent>
              ))
            }
          </Tabs>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>TabTitleSquare</View>
        <View className={styles.content}>
          <Tabs
            tabs={tabs}
            onTabClick={({ key }) => setStateKey1(key)}
            activeTab={stateKey1}
            tabTitleSquare
          >
            {
              tabs1.map((tab) => (
                <TabContent 
                  key={tab.key}
                  tabId={tab.key}
                  activeTab={stateKey1}
                >
                  <Card>
                    <View className={styles.tabContent}>
                      {`${tab.title} content`}
                    </View>
                  </Card>
                </TabContent>
              ))
            }
          </Tabs>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Type</View>
        <View className={styles.subTitle}>plain</View>
        <View className={styles.content}>
          <Tabs
            type="plain"
            tabs={tabs2}
            onTabClick={({ key }) => setStateKey2(key)}
            activeTab={stateKey2}
            tabTitleSquare
          >
            {
              tabs2.map((tab) => (
                <TabContent 
                  key={tab.key}
                  tabId={tab.key}
                  activeTab={stateKey2}
                >
                  <Card>
                    <View className={styles.tabContent}>
                      {`${tab.title} content`}
                    </View>
                  </Card>
                </TabContent>
              ))
            }
          </Tabs>
        </View>
        <View className={styles.subTitle}>card</View>
        <View className={styles.content}>
          <Tabs
            type="card"
            tabs={tabs3}
            onTabClick={({ key }) => setStateKey3(key)}
            activeTab={stateKey3}
            tabTitleSquare
          >
            {
              tabs3.map((tab) => (
                <TabContent 
                  key={tab.key}
                  tabId={tab.key}
                  activeTab={stateKey3}
                >
                  <Card>
                    <View className={styles.tabContent}>
                      {`${tab.title} content`}
                    </View>
                  </Card>
                </TabContent>
              ))
            }
          </Tabs>
        </View>
      </View>
      <View className={styles.group}>
        <View className={styles.title}>Fixed</View>
        <View className={styles.subTitle}>使用fixed属性可以使Tabs固定在页面顶部</View>
        <View className={styles.content}>
          <Tabs
            // fixed
            tabs={tabs4}
            onTabClick={({ key }) => setStateKey4(key)}
            activeTab={stateKey4}
          >
            {
              tabs4.map((tab) => (
                <TabContent 
                  key={tab.key}
                  tabId={tab.key}
                  activeTab={stateKey4}
                >
                  <Card>
                    <View className={styles.tabContent}>
                      {`${tab.title} content`}
                    </View>
                  </Card>
                </TabContent>
              ))
            }
          </Tabs>
        </View>
      </View>
    </View>
  );
};
