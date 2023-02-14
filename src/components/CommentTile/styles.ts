import { COLOR_CODES, FONT_FAMILY, IMAGE_DIMENSIONS, PADDINGS } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  wrapperContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: PADDINGS.SMALL,
  },
  avatar: {
    width: IMAGE_DIMENSIONS.LARGE,
    height: IMAGE_DIMENSIONS.LARGE,
    borderRadius: IMAGE_DIMENSIONS.LARGE,
    resizeMode: 'contain',
    borderWidth: 1,
  },
  userInfoStyle: {
    fontSize: 12,
    color: COLOR_CODES.BLACK_BLUR_HEAVY,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  commentStyle: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.REGULAR,
    color: COLOR_CODES.BLACK
  },
  userInfoParentContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: PADDINGS.MEDIUM,
  },
  avatarAndUserInfoWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dateText: { marginLeft: PADDINGS.MEDIUM, fontFamily: FONT_FAMILY.REGULAR, fontSize: 10 },
});

export default styles;
