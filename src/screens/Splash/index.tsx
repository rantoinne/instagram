import React, { FC, useEffect } from 'react';
import {
  SafeAreaView,
} from 'react-native';
import {
  IconRenderer,
} from '@components';
import { ImageLinks } from '@images';
import styles from './styles';
import { getStoreUserInfo, height, width } from '@utils';

interface Props {
  navigation: any;
}

/**
 * Ideally this should be done via Native Splash screens
 * But due to time constraints added a JS workaround
 */
export const Splash: FC<Props> = ({ navigation }) => {
  const checkCurrentSession = async () => {
    const userInfo = await getStoreUserInfo();
    navigation.navigate(userInfo !== null ? 'Tabs' : 'Auth');
  }
  
  useEffect(() => {
    setTimeout(checkCurrentSession, 1200);
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
