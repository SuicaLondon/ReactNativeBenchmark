import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ListItem() {
  return (
    <LinearGradient colors={['#F44336', '#4CAF50']} style={[styles.layerBox]}>
      <View style={styles.shadowLayer} />
    </LinearGradient>
  );
}
export default memo(ListItem);

const styles = StyleSheet.create({
  layerBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    shadowColor: '#ffeb3b',
    shadowOffset: {
      width: 1,
      height: 0,
    },
  },
  shadowLayer: {
    shadowColor: '#2196F3',
    shadowOffset: {
      width: 1,
      height: 0,
    },
  },
});
