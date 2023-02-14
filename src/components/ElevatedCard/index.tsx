import { StyleSheet, View, ViewStyle } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { COLOR_CODE_TYPE, convertStyle, COLOR_CODES } from '@utils';

import styles from './styles';

interface Props {
  containerStyle?: ViewStyle;
  shadowColor?: COLOR_CODE_TYPE;
}

/**
 * @shadowColor A color string to denote shadow
 * @containerStyle Additional style for wrapper component
 *
 * @returns A card with shadow
 */
export const ElevatedCard: FC<PropsWithChildren<Props>> = ({
  shadowColor,
  containerStyle,
  children = null,
}): React.ReactElement => {
  if (!shadowColor) {
    shadowColor = COLOR_CODES.BLACK;
  }
  
  styles.containerStyle = convertStyle(
    styles.containerStyle,
    [{ shadowColor }],
  );
  
  return (
    <View style={StyleSheet.flatten([styles.containerStyle, containerStyle])}>
      {children}
    </View>
  );
};
