import {
  width,
  PADDINGS,
  COLOR_CODES,
  FONT_FAMILY,
  IMAGE_DIMENSIONS,
} from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyles: { flex: 1, backgroundColor: COLOR_CODES.WHITE },
  headerViewContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: PADDINGS.MEDIUM,
  },
  leftHeaderSubContainer: {
    maxWidth: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  leftHeaderTitle: {
    fontSize: 18,
    fontFamily: FONT_FAMILY.MEDIUM,
    textAlign: 'left',
    marginLeft: PADDINGS.LARGE,
  },
  selectedImageView: {
    width: width - width / 10,
    height: 400,
    resizeMode: 'stretch',
    marginTop: PADDINGS.LARGE * 2,
  },
  captionInput: {
    marginTop: PADDINGS.X_LARGE,
    width: '90%',
    borderRadius: 4,
    height: 45,
    paddingVertical: 0,
    borderColor: COLOR_CODES.BLACK_BLUR,
    backgroundColor: COLOR_CODES.WHITE,
  },
  cancelPillButton: {
    width: '49%',
    paddingVertical: PADDINGS.X_SMALL,
    backgroundColor: COLOR_CODES.BLACK_BLUR,
    borderRadius: 8,
    marginTop: PADDINGS.X_LARGE,
  },
  launchGalleryButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  launchGalleryButtonIcon: {
    width: IMAGE_DIMENSIONS.APP_LOGO * 2,
    height: IMAGE_DIMENSIONS.APP_LOGO * 2,
    marginTop: PADDINGS.X_LARGE * 4,
    resizeMode: 'contain',
  },
  launchGalleryDescription: {
    fontSize: 14,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    color: COLOR_CODES.BLACK_BLUR_HEAVY,
    marginTop: PADDINGS.X_LARGE,
    textAlign: 'center',
  },
  optionsSeperatorView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: PADDINGS.X_LARGE * 2,
    justifyContent: 'space-between',
  },
  horizontalLine: { width: '40%', height: 1, backgroundColor: COLOR_CODES.BLACK_BLUR_HEAVY },
  orText: { fontFamily: FONT_FAMILY.SEMI_BOLD, marginHorizontal: 8, color: COLOR_CODES.BLACK_BLUR_HEAVY },
  launchCameraButton: {
    borderRadius: 2,
    marginTop: PADDINGS.X_LARGE
  },
});

export default styles;
