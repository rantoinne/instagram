import React, { FC } from 'react';
import { View } from 'react-native';

interface Props {
  height: number;
}

export const Divider: FC<Props> = ({ height }) => <View style={{ width: '100%', height }} />;
