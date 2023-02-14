import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeUserId = async (value: number) => {
  try {
    await AsyncStorage.setItem('@userId', String(value));
  } catch (e) {
    throw new Error(e);
  }
};

export const getUserId = async () => {
  let value = null;
  try {
    value = await AsyncStorage.getItem('@userId');
  } catch(e) {
    throw new Error(e);
  }
  return value;
};

export const removeUserId = async () => {
  try {
    await AsyncStorage.removeItem('@userId')
  } catch(e) {
    throw new Error(e);
  }
}
