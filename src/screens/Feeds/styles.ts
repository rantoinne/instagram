import {
  width,
  PADDINGS,
  COLOR_CODES,
  IMAGE_DIMENSIONS,
} from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyles: { flex: 1, backgroundColor: COLOR_CODES.WHITE },
  appLogoStyle: {
    width: width - (width * 0.75),
    alignSelf: 'center',
    height: IMAGE_DIMENSIONS.SMALL * 2.2,
    tintColor: COLOR_CODES.BLACK,
    resizeMode: 'contain',
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR_CODES.WHITE,
    paddingHorizontal: PADDINGS.MEDIUM
  },
  headerButtonsContainer: {
    width: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  messengerButton: { marginLeft: PADDINGS.LARGE },
});

export default styles;
