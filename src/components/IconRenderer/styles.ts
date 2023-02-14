import { IMAGE_DIMENSIONS, PADDINGS } from '@utils';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  cardStyle: {
    borderWidth: 1,
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: PADDINGS.X_SMALL / 2,
  },
  imageStyle: {
    resizeMode: 'contain',
    width: IMAGE_DIMENSIONS.REGULAR,
    height: IMAGE_DIMENSIONS.REGULAR,
  },
});

export default styles;
