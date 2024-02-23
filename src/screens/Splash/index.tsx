import React, { FC, useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {
  IconRenderer,
} from '@components';
import { ImageLinks } from '@images';
import styles from './styles';
import { getLoginToken, getStoreUserInfo, height, request, width } from '@utils';

interface Props {
  navigation: any;
}

/**
 * Ideally this should be done via Native Splash screens
 * But due to time constraints added a JS workaround
 */
export const Splash: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    const checkCurrentSession = async () => {
      const userInfo = await getStoreUserInfo();
      // console.log({ userInfo });
      if (userInfo) {
        const token = await getLoginToken();
        request.authToken = token;
      }
      navigation.navigate(userInfo !== null ? 'Tabs' : 'Auth');
    }
    checkCurrentSession();
  }, []);
  
  return (
    <SafeAreaView style={styles.safeAreaViewStyles}>
      <IconRenderer
        source={ImageLinks.instagram}
        imageStyle={{
          width: width - (width / 5),
          height: height - (height / 10),
        }}
      />
    </SafeAreaView>
  );
};
