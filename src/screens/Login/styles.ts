import { COLOR_CODES, FONT_FAMILY, height, IMAGE_DIMENSIONS, PADDINGS, width } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerStyle: {
    paddingTop: height / 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appLogoStyle: {
    width: width - (width * 0.1),
    alignSelf: 'center',
    height: IMAGE_DIMENSIONS.APP_LOGO,
    tintColor: COLOR_CODES.WHITE,
    resizeMode: 'contain',
  },
  inputTextStyle: { color: COLOR_CODES.WHITE },
  inputContainerStyle: { width: '90%', paddingHorizontal: PADDINGS.SMALL },
  forgotPasswordTextStyle: {
    fontSize: 12,
    alignSelf: 'center',
    color: COLOR_CODES.WHITE
  },
  virtualForgotPasswordTextStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: COLOR_CODES.WHITE,
  },
  optionSeparatorContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalLineStyle: { width: '40%', height: 1, backgroundColor: COLOR_CODES.WHITE_BLUR_HEAVY },
  orTextStyle: { fontFamily: FONT_FAMILY.SEMI_BOLD, marginHorizontal: 8, color: COLOR_CODES.WHITE_BLUR_HEAVY },
  signupButtonStyle: {
    borderWidth: 2,
    borderColor: COLOR_CODES.WHITE_BLUR,
    backgroundColor: COLOR_CODES.TRANSPARENT,
  },
});

export default styles;
