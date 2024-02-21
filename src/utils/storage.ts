import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from './enums';

export const createAndStoreKey = async (key: STORAGE_KEY, value: any): Promise<void> => {
  try {
    await AsyncStorage.setItem(key, String(value));
  } catch (e) {
    throw new Error(e);
  }
};

export const getStoreValueForKey = async (key: STORAGE_KEY): Promise<string> => {
  let value = null;
  try {
    value = await AsyncStorage.getItem(key);
  } catch(e) {
    throw new Error(e);
  }
  return value;
};

export const storeUserInfo = async (value: number): Promise<void> => {
  await createAndStoreKey(STORAGE_KEY.USER_INFO, value);
};

export const storeLoginToken = async (value: string) => {
  await createAndStoreKey(STORAGE_KEY.TOKEN, value);
};

export const getStoreUserInfo = async (): Promise<string> => {
  const value = await getStoreValueForKey(STORAGE_KEY.USER_INFO);
  return value;
};

export const getLoginToken = async (): Promise<string> => {
  const value = await getStoreValueForKey(STORAGE_KEY.TOKEN);
  return value;
};

export const resetStoreUserInfo = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY.USER_INFO)
  } catch(e) {
    throw new Error(e);
  }
}
