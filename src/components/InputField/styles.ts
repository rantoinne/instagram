import { PADDINGS, COLOR_CODES, FONT_FAMILY } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    borderWidth: 2,
    borderRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: PADDINGS.X_SMALL,
    backgroundColor: COLOR_CODES.WHITE_BLUR,
    borderColor: COLOR_CODES.WHITE_BLUR_HEAVY,
    // paddingVertical: 0,
  },
  inputStyle: {
    flex: 1,
    fontFamily: FONT_FAMILY.MEDIUM,
    paddingHorizontal: PADDINGS.X_SMALL,
  },
  labelStyle: {
    zIndex: 10,
    position: 'absolute',
  },
  absoluteStyle: {
    position: 'absolute',
  },
  underlineStyle: {
    bottom: 0,
    zIndex: 200,
    width: '100%',
  },
  completeWidth: {
    width: '100%',
  },
});

export default styles;
