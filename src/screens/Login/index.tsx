import React, { FC, useState } from 'react';
import {
  Image,
  Text,
  View,
} from 'react-native';
import {
  Button,
  Divider,
  InputField,
  GradientWrapper,
} from '@components';
import {
  PADDINGS,
  loginUser,
  INPUT_TYPE,
  COLOR_CODES,
  storeUserInfo,
  storeLoginToken,
  showToast,
  request,
} from '@utils';
import { ImageLinks } from '@images';
import styles from './styles';

interface Props {
  navigation: any;
}

export const Login: FC<Props> = ({ navigation }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName);
  }

  const loginUserHandler = async () => {
    setLoading(true);
    const res = await loginUser({
      userName,
      password,
    });
    
    if (res.token) {
      await storeLoginToken(res.token);
      request.authToken = res.token;
      delete res.token;
      await storeUserInfo(JSON.stringify(res));
      navigateToScreen('Tabs');
    } else {
      showToast({
        type: 'error',
        position: 'bottom',
        message: res?.error ?? '',
      });
    }
    setLoading(false);
  }

  return (
    <GradientWrapper
      isScrollEnabled
      start={{ x: -0.5, y: 0.5 }}
      containerStyle={styles.containerStyle}
    >
      <Image
        style={styles.appLogoStyle}
        source={ImageLinks.instagram}
      />

      <Divider height={PADDINGS.X_LARGE} />

      {/* Credentials Input Fields */}
      <InputField
        value={userName}
        placeholder="Username"
        type={INPUT_TYPE.UNDERLINE}
        onChangeText={setUserName}
        inputStyle={styles.inputTextStyle}
        placeholderTextColor={COLOR_CODES.WHITE}
        containerStyle={styles.inputContainerStyle}
      />

      <Divider height={PADDINGS.X_LARGE} />

      <InputField
        secureTextEntry
        value={password}
        placeholder="Password"
        type={INPUT_TYPE.UNDERLINE}
        onChangeText={setPassword}
        inputStyle={styles.inputTextStyle}
        placeholderTextColor={COLOR_CODES.WHITE}
        containerStyle={styles.inputContainerStyle}
      />

      <Divider height={PADDINGS.X_LARGE * 1.4} />

      {/* Sign In Button */}
      <Button
        onPress={loginUserHandler}
        showLoader={loading}
        disabled={password.length === 0 || userName.length === 0}
        title="Login"
      />
      <Divider height={PADDINGS.MEDIUM * 2} />

      {/* Forgot Password text */}
      <Text
        style={styles.forgotPasswordTextStyle}
        onPress={() => alert('Pressed!')}
      >
        Forgot your login details?
        <Text style={styles.virtualForgotPasswordTextStyle}>
          {' '}
          Get help signing in
        </Text>
      </Text>

      <Divider height={PADDINGS.MEDIUM * 4} />

      <View style={styles.optionSeparatorContainerStyle}>
        <View style={styles.horizontalLineStyle} />
        <Text style={styles.orTextStyle}>OR</Text>
        <View style={styles.horizontalLineStyle} />
      </View>

      <Divider height={PADDINGS.MEDIUM * 4} />

      <Button
        title="Sign up"
        onPress={() => navigateToScreen('SignUp')}
        containerStyle={styles.signupButtonStyle}
      />
    </GradientWrapper>
  );
};
