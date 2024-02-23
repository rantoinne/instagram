import React, { FC } from 'react';
import {
  Text,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
  ActivityIndicator,
  Platform,
} from 'react-native';
import styles from './styles';
import { COLOR_CODES } from '@utils';

interface Props extends TouchableOpacityProps {
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
  showLoader?: boolean;
}

export const Button: FC<Props> = ({
  title,
  titleStyle,
  containerStyle,
  showLoader = false,
  ...touchableProps
}) => {
  const loaderSize = Platform.OS === 'ios' ? 'small' : 24;
  const childComponent = showLoader
    ? (<ActivityIndicator size={loaderSize} color={COLOR_CODES.WHITE} />)
    : (
      <Text style={[styles.titleStyle, titleStyle]}>
        {title}
      </Text>
    );

  return (
    <TouchableOpacity
      {...touchableProps}
      style={[styles.containerStyles, containerStyle]}
    >
      {childComponent}
    </TouchableOpacity>
  );
};
