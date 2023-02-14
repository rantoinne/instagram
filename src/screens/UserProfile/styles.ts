import { COLOR_CODES, FONT_FAMILY, IMAGE_DIMENSIONS, PADDINGS, width } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyles: { flex: 1, backgroundColor: COLOR_CODES.WHITE },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLOR_CODES.WHITE,
    paddingHorizontal: PADDINGS.MEDIUM
  },
  leftHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  userName: {
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLOR_CODES.BLACK,
    marginLeft: PADDINGS.SMALL,
  },
  headerOptionsContainer: {
    width: '50%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  headerMenuOptionButton: { marginLeft: PADDINGS.LARGE },
  userInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: PADDINGS.MEDIUM,
    marginTop: PADDINGS.LARGE,
    alignItems: 'center',
  },
  avatarRenderContainer: {
    maxWidth:'25%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  avatarImageView: {
    width: IMAGE_DIMENSIONS.APP_LOGO,
    height: IMAGE_DIMENSIONS.APP_LOGO,
    borderRadius: IMAGE_DIMENSIONS.APP_LOGO,
    resizeMode: 'cover',
  },
  fullName: {
    fontFamily: FONT_FAMILY.REGULAR,
    marginTop: PADDINGS.X_SMALL,
    fontSize: 12,
    color: COLOR_CODES.BLACK,
  },
  profileCounts: {
    width: '60%',
    flexDirection: 'row',
    marginLeft: PADDINGS.X_LARGE * 1.8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  countValueContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  countValue: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: FONT_FAMILY.MEDIUM
  },
  horizontalButtonsContainer: {
    flexDirection: 'row',
    marginTop: PADDINGS.LARGE,
    justifyContent: 'space-between',
    paddingHorizontal: PADDINGS.MEDIUM,
  },
  buttonWrapper: {
    width: '49%',
    paddingVertical: PADDINGS.X_SMALL,
    backgroundColor: COLOR_CODES.BLACK_BLUR,
    borderRadius: 8,
  },
  highlightView: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: PADDINGS.LARGE,
    paddingHorizontal: PADDINGS.MEDIUM,
  },
  highlightsText: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.MEDIUM,
    color: COLOR_CODES.BLACK,
  },
  addIcon: {
    width: IMAGE_DIMENSIONS.APP_LOGO - 10,
    height: IMAGE_DIMENSIONS.APP_LOGO - 10,
    marginTop: PADDINGS.SMALL,
  },
  postImageStyle: { width: width / 3, height: width / 3, resizeMode: 'cover' },
  emptyListText: { fontFamily: FONT_FAMILY.MEDIUM, color: COLOR_CODES.BLACK, marginTop: PADDINGS.LARGE, fontSize: 18 },
});

export default styles;
