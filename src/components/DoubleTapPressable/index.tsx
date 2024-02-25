import React, { FC, useRef } from 'react';
import {
  ViewStyle,
  TouchableOpacityProps,
  GestureResponderEvent,
  Pressable,
} from 'react-native';

interface Props extends TouchableOpacityProps {
  containerStyle?: ViewStyle;
  showLoader?: boolean;
  onDoubleTap?: (e?: GestureResponderEvent) => void;
}

export const DoubleTapPressable: FC<Props> = ({
  containerStyle,
  children,
  ...touchableProps
}) => {
  const lastTapTimestamp = useRef<null | number>(null);

  const buttonOnPress = (e: GestureResponderEvent) => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (
      lastTapTimestamp.current
      && (
        now - lastTapTimestamp.current
      ) < DOUBLE_PRESS_DELAY) {
      touchableProps.onPress(e);
    } else {
      lastTapTimestamp.current = now;
    }
  }

  return (
    <Pressable
      {...touchableProps}
      onPress={buttonOnPress}
      style={containerStyle}
    >
      {children}
    </Pressable>
  );
};
