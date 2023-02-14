import { View, ScrollView } from 'react-native';
import React, { FC, PropsWithChildren } from 'react';
import { COLUMN_ALIGNMENT, convertStyle } from '@utils';
import styles from './styles';

interface Props {
  columnAlignment?: COLUMN_ALIGNMENT;
  isScrollEnabled?: boolean;
}

/**
 * @param columnAlignment(optional) One of COLUMN_ALIGNMENT. Defaults to CENTER
 * @returns High level view for child components
 */
export const MainContainer: FC<PropsWithChildren<Props>> = ({
  children = null,
  columnAlignment = COLUMN_ALIGNMENT.CENTER,
  isScrollEnabled = false,
}): React.ReactElement => {
  if (columnAlignment === COLUMN_ALIGNMENT.START) {
    styles.containerStyle = convertStyle(
      styles.containerStyle,
      [{ justifyContent: 'flex-start' }]
    );
  }

  if (isScrollEnabled) {
    return (
      <ScrollView
        contentContainerStyle={styles.containerStyle}
      >
        {children}
      </ScrollView>
    );
  }
  
  styles.containerStyle = convertStyle(
    styles.containerStyle,
    [{ flex: 1 }]
  );

  return (
    <View style={styles.containerStyle}>
      {children}
    </View>
  );
};
