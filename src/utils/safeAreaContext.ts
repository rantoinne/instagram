import { Dimensions } from "react-native";
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context";

const {
  width, height
} = Dimensions.get('window');

export const getSafeAreaInsets = (): EdgeInsets => {
  const insets = useSafeAreaInsets();
  return insets;
}

export const windowDimensions = { width, height };
