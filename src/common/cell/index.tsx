import * as React from 'react';
import { View, Text } from 'remax/one';
import Icon from '../icon';
import styles from './index.module.scss';

export interface ItemProps {
  label?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  labelStyle?: React.CSSProperties;
  valueStyle?: React.CSSProperties;
  verticality?: boolean;
  icon?: string;
  required?: boolean;
  border?: boolean;
  arrow?: boolean;
  defaultNullValue?: string;
}

const Cell = (props: ItemProps) => {
  
  const { 
    label, 
    style, 
    labelStyle, 
    valueStyle, 
    children,
    verticality,
    icon,
    border = true,
    arrow,
    required,
    defaultNullValue = '',
  } = props;

  if (verticality) {
    return (
      <View className={styles.cell} style={style}>
        <View className={styles.verticalityContainer}>
          {
            label 
              ? <View className={styles.label} style={labelStyle}>
                  {label}
                </View>
              : null
          }
          <View className={styles.value} style={valueStyle}>
            {children}
          </View>
        </View>
      </View>
    )
  }

  return (
    <View className={styles.cell} style={style}>
      <View className={styles.container}>
        <View className={styles.label} style={labelStyle}>
          {
            required
              ? <Text className={styles.required}>*</Text>
              : null
          }
          {
            icon ? <Icon type={icon} style={{marginRight: '10rpx'}} color="#333" /> : null
          }
          <Text>{label}</Text>
        </View>
        <View className={styles.value} style={valueStyle}>
          <Text>
            {(children || children === 0) ? children : defaultNullValue}
          </Text>
          {
            arrow ? <Icon type="right" style={{marginLeft: '10rpx'}} /> : null
          }
        </View>
      </View>
      {
        border
          ? <View className={styles.border} />
          : null
      }
    </View>
  )
}

export default Cell;
