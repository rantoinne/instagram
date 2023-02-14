import React, { FC, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  Divider,
  InputField,
  CommentTile,
  IconRenderer,
  MainContainer,
} from '@components';
import {
  PADDINGS,
  INPUT_TYPE,
  COLOR_CODES,
  IMAGE_DIMENSIONS,
} from '@utils';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

interface Props {
  navigation: any;
  route: {
    params: {
      postInfo: any;
      addCommentHandler: (postId: number, comment: string) => void
    }
  }
}

export const Comments: FC<Props> = ({
  navigation,
  route: {
    params: {
      postInfo: post,
      addCommentHandler,
    }
  }
}) => {
  const [newComment, setNewComment] = useState<string>('');
  
  const goBack = () => navigation.goBack();

  const addComment = async () => {
    addCommentHandler(post.id, newComment);
  }
  
  return (
    <SafeAreaView style={styles.safeAreaViewStyle}>
      {/* Header */}
      <View style={styles.headerWrapper}>
        <TouchableOpacity onPress={goBack}>
          <AntDesign
            name="arrowleft"
            size={IMAGE_DIMENSIONS.MEDIUM}
            color={COLOR_CODES.BLACK}
          />
        </TouchableOpacity>
        <Text style={styles.commentText}>
          Comments
        </Text>
      </View>

      <Divider height={PADDINGS.X_LARGE} />

      {/* Comments & Caption view */}
      <MainContainer isScrollEnabled>
        <View style={styles.userInfoHeader}>
          {/* User Avatar section */}
          <View style={styles.avatarRenderer}>
            <IconRenderer
              source={{ uri: post?.user.userAvatar }}
              imageStyle={styles.avatar}
            />
            {/* User Info section */}
            <View style={styles.userInfoView}>
              <Text style={styles.userName}>
                {post?.user.fullName}
              </Text>
              <Text style={styles.accountName}>
                {post?.user.userName}
              </Text>
            </View>
          </View>
        </View>

        <Divider height={PADDINGS.MEDIUM} />
        {/* Caption */}
        <Text style={styles.caption}>
          {post?.description}
        </Text>

        <Divider height={PADDINGS.SMALL} />
        {/* Comments View */}
        <View style={styles.commentTileWrapper}>
          {
            post.comments?.map(comment => (
              <CommentTile
                commentInfo={comment}
                userInfo={comment.user}
              />
            ))
          }
        </View>
      </MainContainer>

      <InputField
        value={newComment}
        placeholder="Your comment"
        type={INPUT_TYPE.UNDERLINE}
        onSubmitEditing={addComment}
        onChangeText={setNewComment}
        containerStyle={styles.commentInputStyle}
        renderLeftIcon={() => (
          <IconRenderer
            source={{ uri: post?.user.userAvatar }}
            imageStyle={styles.avatarForCommentSection}
          />
        )}
      />
    </SafeAreaView>
  );
};
