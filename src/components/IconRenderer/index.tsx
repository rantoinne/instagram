import {
  View,
  Image,
  ViewStyle,
  StyleSheet,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import React, { FC } from 'react';

import styles from './styles';

interface Props {
  cardStyle?: ViewStyle;
  isInsideCard?: boolean;
  imageStyle?: ImageStyle;
  source: ImageSourcePropType;
}

/**
 * 
 * @param imageStyle(optional) style property
 * @param source A source for icon/image to render
 * @param cardStyle(optional) wrapper card style property
 * @param isInsideCard(optional) boolean to render icon inside a card with borders
 * @returns Image component
 */
export const IconRenderer: FC<Props> = ({
  source,
  cardStyle,
  imageStyle,
  isInsideCard = false,
}): React.ReactElement => {
  if (isInsideCard) return (
    <View
      style={StyleSheet.flatten([
        styles.cardStyle,
        cardStyle,
      ])}
    >
      <Image
        source={source}
        style={StyleSheet.flatten([styles.imageStyle, imageStyle])}
      />
    </View>
  );

  return (
    <Image
      source={source}
      style={StyleSheet.flatten([styles.imageStyle, imageStyle])}
    />
  );
};
