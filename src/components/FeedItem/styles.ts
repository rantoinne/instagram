import { COLOR_CODES, FONT_FAMILY, height, IMAGE_DIMENSIONS, PADDINGS, width } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  imageView: {
    width,
    resizeMode: 'contain',
    height: height / 3.2,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderColor: COLOR_CODES.ALTO,
    marginTop: PADDINGS.SMALL
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingHorizontal: PADDINGS.MEDIUM,
  },
  userInfoHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
  },
  avatarRenderer: {
    maxWidth: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    width: IMAGE_DIMENSIONS.LARGE + 4,
    height: IMAGE_DIMENSIONS.LARGE + 4,
    borderRadius: IMAGE_DIMENSIONS.LARGE,
    resizeMode: 'contain',
    borderWidth: 1,
  },
  userInfoView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: PADDINGS.X_SMALL,
  },
  userName: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.MEDIUM,
  },
  accountName: {
    fontSize: 10,
    fontFamily: FONT_FAMILY.REGULAR,
  },
  optionsMenu: { maxWidth: '20%' },
  actionsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: PADDINGS.MEDIUM,
    justifyContent: 'space-between',
  },
  leftActionsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  marginLeftStyle: { marginLeft: PADDINGS.LARGE },
  likesCount: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.MEDIUM,
    width: '100%',
    textAlign: 'left',
  },
  userNameText: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    width: '100%',
    marginTop: PADDINGS.X_SMALL,
    textAlign: 'left',
  },
  caption: {
    fontSize: 12,
    fontFamily: FONT_FAMILY.MEDIUM,
    textAlign: 'left',
  },
});

export default styles;
