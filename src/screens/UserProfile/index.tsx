import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  Button,
  Divider,
  IconRenderer,
  MainContainer,
} from '@components';
import { ImageLinks } from '@images';
import styles from './styles';
import {
  PADDINGS,
  getUserId,
  COLOR_CODES,
  getUserInfo,
  removeUserId,
  IMAGE_DIMENSIONS,
  COLUMN_ALIGNMENT,
  HIT_SLOP_FOR_TOUCHABLES,
} from '@utils';

interface Props {
  navigation: any;
}

export const UserProfile: FC<Props> = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState<any>(null);

  const avatarAvailable = true;

  const getAllPostsByUser = async () => {
    const userId = await getUserId();
    const res = await getUserInfo(userId);
    if (res?.isSuccess) {
      setUserInfo(res?.userInfo);
    }
  };
  
  useEffect(() => {
    getAllPostsByUser()
  }, []);

  const renderAvatar = () => {
    if (avatarAvailable) {
      return (
        <IconRenderer
          source={{ uri: userInfo?.userAvatar }}
          imageStyle={styles.avatarImageView}
        />
      );
    }
    return (
      <FontAwesome
        name="user-circle-o"
        size={IMAGE_DIMENSIONS.APP_LOGO}
        color={COLOR_CODES.BLACK_BLUR}
      />
    );
  }

  const logout = async () => {
    await removeUserId();
    navigation.popToTop();
    navigation.navigate('Auth');
  }
  
  return (
    <SafeAreaView style={styles.safeAreaViewStyles}>
      {/* Header view */}
      <View style={styles.headerContainer}>
        <View style={styles.leftHeaderContainer}>
          <Feather name="lock" size={IMAGE_DIMENSIONS.REGULAR} color={COLOR_CODES.BLACK} />
          {/* User Name */}
          <Text style={styles.userName}>
            {userInfo?.fullName}
          </Text>
        </View>
        <View style={styles.headerOptionsContainer}>
          <TouchableOpacity
            disabled
            hitSlop={HIT_SLOP_FOR_TOUCHABLES}
          >
            <FontAwesome
              name="plus-square-o"
              color={COLOR_CODES.BLACK}
              size={IMAGE_DIMENSIONS.MEDIUM}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={logout}
            hitSlop={HIT_SLOP_FOR_TOUCHABLES}
            style={styles.headerMenuOptionButton}
          >
            <MaterialIcons
              name="logout"
              color={COLOR_CODES.BLACK}
              size={IMAGE_DIMENSIONS.MEDIUM}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Avatar + FOLLOWERS View */}
      <View style={styles.userInfoContainer}>
        {/* AVATAR & USER NAME VIEW */}
        <View style={styles.avatarRenderContainer}>
          {renderAvatar()}
          <Text style={styles.fullName}>
            {userInfo?.fullName}
          </Text>
        </View>

        {/* FOLLOWERS COUNT VIEW */}
        <View style={styles.profileCounts}>
          <View style={styles.countValueContainer}>
            <Text style={styles.countValue}>
              7
            </Text>
            <Text style={styles.countValue}>
              Posts
            </Text>
          </View>
          <View style={styles.countValueContainer}>
            <Text style={styles.countValue}>
              178
            </Text>
            <Text style={styles.countValue}>
              Followers
            </Text>
          </View>
          <View style={styles.countValueContainer}>
            <Text style={styles.countValue}>
              521
            </Text>
            <Text style={styles.countValue}>
              Following
            </Text>
          </View>
        </View>
      </View>

      {/* Edit Profile */}
      <View style={styles.horizontalButtonsContainer}>
        <Button
          title="Edit profile"
          containerStyle={styles.buttonWrapper}
        />
        <Button
          title="Share profile"
          containerStyle={styles.buttonWrapper}
        />
      </View>

      {/* Highlights */}
      <View style={styles.highlightView}>
        <Text style={styles.highlightsText}>
          Story highlights
        </Text>

        {/* ADD ICONS */}
        <IconRenderer
          imageStyle={styles.addIcon}
          source={{ uri: ImageLinks.plus }}
        />
      </View>

      <MainContainer
        isScrollEnabled
        columnAlignment={COLUMN_ALIGNMENT.START}
      >
        <Divider height={PADDINGS.LARGE} />

        {/* POSTS */}
        <FlatList
          data={userInfo?.posts}
          numColumns={3}
          ListEmptyComponent={(
            <Text style={styles.emptyListText}>
              No posts yet!
            </Text>
          )}
          renderItem={({ item }: { item: any }) => (
            <View>
              <IconRenderer
                key={item?.id}
                source={{ uri: item?.url }}
                imageStyle={styles.postImageStyle}
              />
            </View>
          )}
        />
      </MainContainer>
    </SafeAreaView>
  );
};
