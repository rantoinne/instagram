import React, { FC, useEffect, useState } from 'react';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  Divider,
  FeedItem,
  MainContainer,
} from '@components';
import { ImageLinks } from '@images';
import styles from './styles';
import {
  getPosts,
  PADDINGS,
  COLOR_CODES,
  likeDislikePost,
  IMAGE_DIMENSIONS,
  COLUMN_ALIGNMENT,
  HIT_SLOP_FOR_TOUCHABLES,
  addCommentOnPost,
  getUserId,
} from '@utils';

interface Props {
  navigation: any;
}

export const Feeds: FC<Props> = ({
  navigation,
}) => {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState<number[]>([]);

  const findIndexOfPost = (postId: number) => {
    const indexOfPost = likedPosts.findIndex(id => id === postId);
    return indexOfPost;
  }
  
  const setLikedPostsHandler = async (postId: number) => {
    const userId = await getUserId();
    const indexOfPostLike = findIndexOfPost(postId);
    if (indexOfPostLike < 0) {
      setLikedPosts([...likedPosts, postId]);
    } else {
      const likedPostsClone = Object.assign(likedPosts, []);
      likedPostsClone.splice(indexOfPostLike, 1);
      
      setLikedPosts([...likedPostsClone]);
    }
    const refreshedPost = await likeDislikePost({
      postId,
      userId,
    });

    const indexOfPost = posts.findIndex(p => p.id === postId);
    const postsClone = [...posts];
    
    postsClone[indexOfPost] = refreshedPost?.post;
    setPosts([...postsClone]);
  };

  const navigateToScreen = (screenName: string, params?: any) => {
    navigation.navigate(screenName, params);
  };

  const updateLikedPosts = (posts: any[]) => {
    const likes = [];
    posts.forEach(p => {
      const postLikesInfo = p.postLikes.map(l => l.userId);
      // USER ID
      if (postLikesInfo.includes(1)) {
        likes.push(p.id);
      }
    });
    const likesSet = new Set(likes);
    setLikedPosts(Array.from(likesSet));
  }

  const addCommentHandler = async (postId: number, comment: string) => {
    const userId = await getUserId();
    const res = await addCommentOnPost({
      postId,
      comment,
      userId,
    });
    if (res?.isSuccess) {
      const indexOfPost = posts.findIndex(p => p.id === postId);
      let postsClone = [...posts];
      
      postsClone[indexOfPost] = res?.post;
      setPosts([...postsClone]);
      navigation.goBack();
    }
  }
  
  const getPostsForFeed = async () => {
    const userId = await getUserId();
    const posts = await getPosts(userId);
    setPosts(posts?.allPosts);
    updateLikedPosts(posts?.allPosts);
  };
  
  useEffect(() => {
    getPostsForFeed()
  }, []);
  
  return (
    <SafeAreaView style={styles.safeAreaViewStyles}>
      {/* Header view */}
      <View style={styles.headerContainer}>
        <Image
          style={styles.appLogoStyle}
          source={ImageLinks.instagram}
        />
        <View style={styles.headerButtonsContainer}>
          <TouchableOpacity
            hitSlop={HIT_SLOP_FOR_TOUCHABLES}
            onPress={() => navigateToScreen('NewPost')}
          >
            <FontAwesome
              name="plus-square-o"
              color={COLOR_CODES.BLACK}
              size={IMAGE_DIMENSIONS.MEDIUM}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.messengerButton}
            hitSlop={HIT_SLOP_FOR_TOUCHABLES}
          >
            <MaterialCommunityIcons
              name="facebook-messenger"
              color={COLOR_CODES.BLACK}
              size={IMAGE_DIMENSIONS.MEDIUM}
            />
          </TouchableOpacity>
        </View>
      </View>
      <MainContainer
        isScrollEnabled
        columnAlignment={COLUMN_ALIGNMENT.START}
      >
        <Divider height={PADDINGS.LARGE} />

        {/* POSTS */}
        {posts.length > 0 && posts?.map(post => (
          <FeedItem
            post={post}
            key={post?.id}
            likedPosts={likedPosts}
            setLikedPosts={setLikedPostsHandler}
            navigateToScreen={navigateToScreen}
            addCommentHandler={addCommentHandler}
          />
        ))}

      </MainContainer>
    </SafeAreaView>
  );
};
