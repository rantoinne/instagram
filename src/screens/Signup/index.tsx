import React, { FC, useState } from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {
  Button,
  Divider,
  InputField,
  MainContainer,
} from '@components';
import {
  PADDINGS,
  debounce,
  signUpUser,
  showToast,
  INPUT_TYPE,
  COLOR_CODES,
  EMAIL_REGEX,
  userNameAvailability,
  storeLoginToken,
  storeUserInfo,
} from '@utils';
import { ImageLinks } from '@images';
import styles from './styles';

interface Props {
  navigation: any;
}

export const SignUp: FC<Props> = ({
  navigation,
}) => {
  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean>(null);
  const [name, setFullName] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigateToLoginScreen = () => {
    navigation.navigate('Login');
  }

  const onPressSignup = async () => {
    const res = await signUpUser({
      email,
      name,
      userName,
      password,
    });

    console.log({ res });

    if (res.token) {
      await storeLoginToken(res.token);
      delete res.token;
      await storeUserInfo(res);
      navigateToLoginScreen();
    } else {
      showToast({
        type: 'error',
        message: res?.error ?? 'An error occurred!',
        position: 'bottom',
      })
    }
  }

  const checkAndUpdateUserName = async (val: string) => {
    setUserName(val);
    const isUserNameAvailableInfo = debounce(userNameAvailability, 300)({ userName });
    console.log({ isUserNameAvailableInfo });
  }
  
  const validateAndSetEmail = (val: string) => {
    const isEmailValid = EMAIL_REGEX.test(val);
    setEmailValid(isEmailValid);
    setEmail(val);
  }

  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      <MainContainer>
        <Image
          style={styles.appLogoStyle}
          source={ImageLinks.instagram}
        />

        <Divider height={PADDINGS.SMALL} />
        <Text style={styles.descriptionTextStyle}>
          Sign up to see photos and videos from your friends
        </Text>

        <Divider height={PADDINGS.X_LARGE} />

        {/* Credentials Input Fields */}
        <InputField
          value={email}
          placeholder="Email address"
          type={INPUT_TYPE.OUTLINE}
          autoCorrect={false}
          onChangeText={validateAndSetEmail}
          inputStyle={styles.inputTextStyle}
          placeholderTextColor={COLOR_CODES.DOVE_GRAY}
          containerStyle={styles.inputContainerStyle}
        />
        {
          !emailValid && emailValid !== null && (
            <>
              <Divider height={PADDINGS.X_SMALL} />
              <Text style={styles.validationErrorText}>
                Invalid email!
              </Text>
              <Divider height={PADDINGS.X_SMALL} />
            </>
          )
        }

        <Divider height={PADDINGS.SMALL} />

        <InputField
          value={name}
          placeholder="Full Name"
          type={INPUT_TYPE.OUTLINE}
          autoCorrect={false}
          onChangeText={setFullName}
          inputStyle={styles.inputTextStyle}
          placeholderTextColor={COLOR_CODES.DOVE_GRAY}
          containerStyle={styles.inputContainerStyle}
        />

        <Divider height={PADDINGS.SMALL} />

        <InputField
          value={userName}
          placeholder="Username"
          type={INPUT_TYPE.OUTLINE}
          autoCorrect={false}
          inputStyle={styles.inputTextStyle}
          onChangeText={checkAndUpdateUserName}
          containerStyle={styles.inputContainerStyle}
          placeholderTextColor={COLOR_CODES.DOVE_GRAY}
        />

        <Divider height={PADDINGS.SMALL} />

        <InputField
          secureTextEntry
          value={password}
          placeholder="Password"
          autoCorrect={false}
          type={INPUT_TYPE.OUTLINE}
          onChangeText={setPassword}
          inputStyle={styles.inputTextStyle}
          placeholderTextColor={COLOR_CODES.DOVE_GRAY}
          containerStyle={styles.inputContainerStyle}
        />

        <Divider height={PADDINGS.X_LARGE * 1.4} />

        {/* Sign In Button */}
        <Button
          onPress={onPressSignup}
          title="Sign up"
        />

        <Divider height={PADDINGS.MEDIUM * 2} />

        <View style={styles.optionSeparatorContainerStyle}>
          <View style={styles.horizontalLineStyle} />
          <Text style={styles.orTextStyle}>OR</Text>
          <View style={styles.horizontalLineStyle} />
        </View>

        <Divider height={PADDINGS.MEDIUM * 2} />

        <Button
          title="Have an account? Login"
          onPress={navigateToLoginScreen}
          titleStyle={styles.loginTextStyle}
          containerStyle={styles.loginButtonStyle}
        />
        
      </MainContainer>
    </SafeAreaView>
  );
};
