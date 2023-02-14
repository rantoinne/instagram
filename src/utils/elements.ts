import { LayoutChangeEvent } from "react-native";
import { BASIC_DIMENSIONS } from "@utils";

export const getElementLayout = (
  event: LayoutChangeEvent,
): BASIC_DIMENSIONS => {
  const { width, height, y } = event.nativeEvent.layout;
  return { width, height, y };
};
