import { Dimensions } from 'react-native';

export const CAROUSEL_SAFE_HORIZONTAL_INSETS = 20;
export const { width, height } = Dimensions.get('window');
export const HIT_SLOP_FOR_TOUCHABLES = {
  top: 8,
  left: 8,
  right: 8,
  bottom: 8,
};

export const SELECTION_LIMIT = 1;

export const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
