import { COLOR_CODES, FONT_FAMILY, IMAGE_DIMENSIONS, PADDINGS } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  safeAreaViewStyle: { flex: 1, justifyContent: 'flex-start', backgroundColor: COLOR_CODES.WHITE },
  userInfoHeader: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: PADDINGS.MEDIUM,
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
  caption: {
    fontSize: 12,
    width: '100%',
    paddingHorizontal: PADDINGS.MEDIUM,
    fontFamily: FONT_FAMILY.REGULAR,
    textAlign: 'left',
  },
  avatarForCommentSection: {
    width: IMAGE_DIMENSIONS.LARGE,
    height: IMAGE_DIMENSIONS.LARGE,
    borderRadius: IMAGE_DIMENSIONS.LARGE,
    resizeMode: 'contain',
    borderWidth: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: PADDINGS.MEDIUM
  },
  commentText: {
    fontFamily: FONT_FAMILY.SEMI_BOLD,
    fontSize: 16,
    color: COLOR_CODES.BLACK,
    marginLeft: PADDINGS.X_LARGE
  },
  commentTileWrapper: {
    paddingHorizontal: PADDINGS.MEDIUM,
    width: '100%',
  },
  commentInputStyle: {
    width: '100%',
    backgroundColor: COLOR_CODES.ALTO,
    borderColor: COLOR_CODES.PICTON_BLUE
  }
});

export default styles;
