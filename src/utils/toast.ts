import Toast, { ToastPosition, ToastType } from 'react-native-toast-message';

export const showToast = ({
  type = 'error',
  message,
  position,
}: {
  type: ToastType;
  message: string;
  position: ToastPosition
}) => {
  Toast.show({
    type,
    position,
    text1: message,
  })
};
