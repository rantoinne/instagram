import {
  Button,
  InputField,
  IconRenderer,
  MainContainer,
} from '@components';
import React, { FC, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {
  ImagePickerResponse,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  showToast,
  INPUT_TYPE,
  uploadPost,
  uploadMedia,
  COLOR_CODES,
  SELECTION_LIMIT,
  IMAGE_DIMENSIONS,
  HIT_SLOP_FOR_TOUCHABLES,
  getUserId,
} from '@utils';
import { ImageLinks } from '@images';
import styles from './styles';

interface Props {
  navigation: any;
}

export const NewPost: FC<Props> = ({
  navigation,
}) => {
  const [selectedAssetMeta, setSelectedAssetMeta] = useState<ImagePickerResponse>(null);
  const [description, setDescription] = useState<string>('');

  const uploadMediaHandler = async () => {
    const res = await uploadMedia({
      uri: selectedAssetMeta.assets[0].uri,
      type: selectedAssetMeta.assets[0].type,
      name: selectedAssetMeta.assets[0].fileName,
    });
    const userId = await getUserId();
    if (res.isSuccess) {
      await uploadPost({
        userId,
        description,
        url: res.url,
        postType: selectedAssetMeta.assets[0].type,
      });
      navigation.goBack();
    } else {
      showToast({
        type: 'error',
        message: 'Error occurred!',
        position: 'bottom',
      })
    }
  };
  
  const launchCameraForCapture = () => {
    console.log('ashas');
    
    launchCamera({
      mediaType: 'mixed',
      saveToPhotos: true,
      cameraType: 'front',
    }).then(r => {
      setSelectedAssetMeta(r);
    })
    .catch(e => console.log({ e }));
  };

  const launchDeviceGallery = () => {
    launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: SELECTION_LIMIT,
      presentationStyle: 'formSheet',
    }).then(r => {
      setSelectedAssetMeta(r);
    })
    .catch(e => console.log({ e }));
  };

  const isMediaSelected = selectedAssetMeta !== null && !!selectedAssetMeta?.assets;

  const submitPostButtonColor = isMediaSelected && description.length !== 0 ? COLOR_CODES.PICTON_BLUE : `${COLOR_CODES.PICTON_BLUE}40`;

  return (
    <SafeAreaView style={styles.safeAreaViewStyles}>
      <StatusBar backgroundColor={COLOR_CODES.WHITE} />
      <MainContainer isScrollEnabled={isMediaSelected}>
        <View style={styles.headerViewContainer}>
          <View style={styles.leftHeaderSubContainer}>
            <TouchableOpacity
              hitSlop={HIT_SLOP_FOR_TOUCHABLES}
              onPress={() => navigation.goBack()}
            >
              <Feather
                name="x"
                color={COLOR_CODES.BLACK}
                size={IMAGE_DIMENSIONS.LARGE}
              />
            </TouchableOpacity>
            <Text style={styles.leftHeaderTitle}>
              New post
            </Text>
          </View>
          <TouchableOpacity
            onPress={uploadMediaHandler}
            hitSlop={HIT_SLOP_FOR_TOUCHABLES}
            disabled={!isMediaSelected && description.length === 0}
          >
            <Feather
              name="arrow-right"
              size={IMAGE_DIMENSIONS.LARGE}
              color={submitPostButtonColor}
            />
          </TouchableOpacity>
        </View>
        
        {
          isMediaSelected ? (
            <>
              <Image
                source={{ uri: selectedAssetMeta.assets[0].uri }}
                style={styles.selectedImageView}
                onError={() => showToast({
                  type: 'error',
                  position: 'bottom',
                  message: 'Unable to display image',
                })}
              />
              <InputField
                value={description}
                placeholder="Add Caption"
                type={INPUT_TYPE.FLOATING_LABEL}
                containerStyle={styles.captionInput}
                onChangeText={val => setDescription(val)}
                placeholderTextColor={COLOR_CODES.BLACK_BLUR}
              />
              <Button
                title="Cancel"
                containerStyle={styles.cancelPillButton}
                onPress={() => setSelectedAssetMeta(null)}
              />
            </>
          ) : (
            <>
              {/* Select Media section */}
              <TouchableOpacity
                onPress={launchDeviceGallery}
                style={styles.launchGalleryButton}
              >
                <IconRenderer
                  source={ImageLinks.folder}
                  imageStyle={styles.launchGalleryButtonIcon}
                />
                <Text style={styles.launchGalleryDescription}>
                  Select Image(s) or Video(s) to post
                </Text>
              </TouchableOpacity>

              {/* Capture Media section */}
              <View style={styles.optionsSeperatorView}>
                <View style={styles.horizontalLine} />
                <Text style={styles.orText}>OR</Text>
                <View style={styles.horizontalLine} />
              </View>

              <Button
                title='Capture'
                onPress={launchCameraForCapture}
                containerStyle={styles.launchCameraButton}
              />     
            </>
          )
        }
      </MainContainer>
    </SafeAreaView>
  );
};
