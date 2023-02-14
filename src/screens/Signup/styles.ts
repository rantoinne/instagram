import { COLOR_CODES, FONT_FAMILY, height, IMAGE_DIMENSIONS, PADDINGS, width } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyle: { flex: 1, justifyContent: 'center', backgroundColor: COLOR_CODES.WHITE },
  containerStyle: {
    paddingTop: height / 18,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appLogoStyle: {
    width: width - (width * 0.1),
    alignSelf: 'center',
    height: IMAGE_DIMENSIONS.APP_LOGO,
    tintColor: COLOR_CODES.BLACK,
    resizeMode: 'contain',
  },
  inputTextStyle: { color: COLOR_CODES.DOVE_GRAY },
  inputContainerStyle: {
    width: '90%',
    paddingHorizontal: PADDINGS.SMALL,
    backgroundColor: COLOR_CODES.ALABASTAR,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: COLOR_CODES.ALTO
  },
  optionSeparatorContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  horizontalLineStyle: { width: '40%', height: 1, backgroundColor: COLOR_CODES.BLACK_BLUR_HEAVY },
  orTextStyle: { fontFamily: FONT_FAMILY.MEDIUM, marginHorizontal: 8, color: COLOR_CODES.BLACK_BLUR_HEAVY },
  loginButtonStyle: {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: COLOR_CODES.PICTON_BLUE,
  },
  descriptionTextStyle: {
    color: COLOR_CODES.DOVE_GRAY,
    fontSize: 16,
    textAlign: 'center',
    maxWidth: width - (width * 0.1),
    fontFamily: FONT_FAMILY.SEMI_BOLD
  },
  validationErrorText: {
    fontFamily: FONT_FAMILY.MEDIUM,
    fontSize: 10,
    color: COLOR_CODES.HIBISCUS,
  },
  loginTextStyle: { color: COLOR_CODES.PICTON_BLUE },
});

export default styles;
