import { COLOR_CODES } from '@utils';
import { Platform, StyleSheet } from 'react-native';

const shadowColor = COLOR_CODES.BLACK;

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    backgroundColor: COLOR_CODES.WHITE,
    ...Platform.select({
      ios: {
        shadowOffset: {
          width: 2,
          height: 2,
        },
        shadowRadius: 5,
        shadowOpacity: 0.4,
        shadowColor,
      },
      android: {
        elevation: 4,
      },
    }),
  }
});

export default styles;
