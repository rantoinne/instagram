import Toast from 'react-native-toast-message';

export const showToast = ({
  type = 'error',
  message,
  position,
}) => {
  Toast.show({
    type,
    text1: message,
    position,
  })
};
