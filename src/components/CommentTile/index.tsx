/* eslint-disable @typescript-eslint/ban-ts-comment */
import {
  View,
  Text,
} from 'react-native';
import React, { FC } from 'react';
import {
  IconRenderer,
} from '@components';

import styles from './styles';
import { localize, timeDiff } from '@utils';

interface Props {
  commentInfo: any;
  userInfo: any;
}

export const CommentTile: FC<Props> = ({
  commentInfo,
  userInfo,
}): React.ReactElement => {
  return (
    <View style={styles.wrapperContainer}>
      <IconRenderer
        source={{ uri: userInfo.userAvatar }}
        imageStyle={styles.avatar}
      />
      <View style={styles.userInfoParentContainer}>
        <View style={styles.avatarAndUserInfoWrapper}>
          <Text style={styles.userInfoStyle}>
            {userInfo.userName}
          </Text>
          <Text style={styles.dateText}>
            {/* @ts-ignore */}
            {localize(...timeDiff(new Date(commentInfo.createdAt), new Date()))}
          </Text>
        </View>
        <Text style={styles.commentStyle}>
          {commentInfo?.comment}
        </Text>
      </View>
    </View>
  );
};
