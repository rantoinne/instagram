import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';

interface Props {
  height: number;
}

export const Divider: FC<Props> = ({ height }) => <View style={{ ...styles.divider, height  }} />;
