import {
  PADDINGS,
  COLOR_CODES,
  IMAGE_DIMENSIONS,
  HIT_SLOP_FOR_TOUCHABLES,
} from '@utils';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { FC } from 'react';
import { Alert, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { IconRenderer, Divider } from '@components';
import styles from './styles';

interface Props {
  post: any;
  likedPosts: number[];
  setLikedPosts: (val: number) => void;
  navigateToScreen: (screen: string, params: any) => void;
  addCommentHandler: (postId: number, comment: string) => void;
}

export const FeedItem: FC<Props> = ({
  post,
  likedPosts,
  setLikedPosts,
  navigateToScreen,
  addCommentHandler,
}) => {
  let lastTap = null;
  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && (now - lastTap) < DOUBLE_PRESS_DELAY) {
      Alert.alert('Tapped!');
      // likeDislikePost();
    } else {
      lastTap = now;
    }
  }

  const likeDislikePost = () => {
    setLikedPosts(post?.id);
  }
  
  const renderPostContent = (post: any) => {
    const type = 'IMAGE';
    if (type === 'IMAGE') {
      return (
        <Pressable
          onPress={handleDoubleTap}
        >
          <IconRenderer
            source={{ uri: post?.post_url }}
            imageStyle={styles.imageView}
          />
        </Pressable>
      )
    }
    // TODO VIDEO
    return null;
  }

  const navigateToComments = () => {
    navigateToScreen('Comments', { postInfo: post, addCommentHandler });
  }

  const isPostLikedByCurrentUser = likedPosts.includes(post?.id);

  // const commentsLength = post?.comments?.length;

  return (
    <View style={styles.mainContainer}>
      {/* User Info & Options section */}
      <View style={styles.userInfoHeader}>
        {/* User Avatar section */}
        <View style={styles.avatarRenderer}>
          <IconRenderer
            source={{ uri: post?.avatar }}
            imageStyle={styles.avatar}
          />
          {/* User Info section */}
          <View style={styles.userInfoView}>
            <Text style={styles.userName}>
              {post?.name}
            </Text>
            <Text style={styles.accountName}>
              {post?.user_name}
            </Text>
          </View>
        </View>
        <TouchableOpacity style={styles.optionsMenu}>
          <Entypo
            name="dots-three-vertical"
            color={COLOR_CODES.BLACK}
            size={IMAGE_DIMENSIONS.MEDIUM / 1.8}
          />
        </TouchableOpacity>
      </View>
      {/* Post Image/Video */}
      {renderPostContent(post)}

      {/* Options (Like, Comment, share) section */}
      <View style={styles.actionsContainer}>
        <View style={styles.leftActionsContainer}>
          <TouchableOpacity
            // onPress={likeDislikePost}
            hitSlop={HIT_SLOP_FOR_TOUCHABLES}
          >
            <MaterialCommunityIcons
              name={isPostLikedByCurrentUser ? 'heart' : 'heart-outline'}
              color={isPostLikedByCurrentUser ? COLOR_CODES.RED : COLOR_CODES.BLACK}
              size={IMAGE_DIMENSIONS.REGULAR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            // onPress={navigateToComments}
            style={styles.marginLeftStyle}
            hitSlop={HIT_SLOP_FOR_TOUCHABLES}
          >
            <MaterialCommunityIcons
              name="comment-outline"
              color={COLOR_CODES.BLACK}
              size={IMAGE_DIMENSIONS.REGULAR}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.marginLeftStyle}
            hitSlop={HIT_SLOP_FOR_TOUCHABLES}
          >
            <Feather
              name="send"
              color={COLOR_CODES.BLACK}
              size={IMAGE_DIMENSIONS.REGULAR}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Post Info section */}
      <Text style={styles.likesCount}>
        {post?.likes_count} likes
      </Text>
      <Text style={styles.userNameText}>
        {post?.name}
        &nbsp;
        <Text style={styles.caption}>
          {post?.description}
        </Text>
      </Text>
      {/* <Divider height={PADDINGS.MEDIUM} /> */}

      {/* {commentsLength > 0 && (
        <Text
          onPress={navigateToComments}
          style={styles.likesCount}
        >
          View all {commentsLength} comments
        </Text>
      )} */}

      <Divider height={PADDINGS.X_LARGE} />
    </View>
  );
};
