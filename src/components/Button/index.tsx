import React, { FC } from 'react';
import {
  Text,
  ViewStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  TextStyle,
} from 'react-native';
import styles from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
}

export const Button: FC<Props> = ({ containerStyle, titleStyle, title, ...touchableProps }) => {
  return (
    <TouchableOpacity
      {...touchableProps}
      style={[styles.containerStyles, containerStyle]}
    >
      <Text style={[styles.titleStyle, titleStyle]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
