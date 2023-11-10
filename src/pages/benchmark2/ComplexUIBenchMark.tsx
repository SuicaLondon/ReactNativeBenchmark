import React, {useEffect, useState} from 'react';
import {useTimeDifference} from './useTimeDifference';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function ComplexUIBenchMark() {
  const [firstFrameRenderTime, setFirstFrameRenderTime] = useState<number>();
  const {end} = useTimeDifference();

  useEffect(() => {
    const ms = end();
    setFirstFrameRenderTime(ms);
  }, []);

  return (
    <View>
      <Text>First frame render time: {firstFrameRenderTime}</Text>
      <View style={styles.container}>
        {Array.from(Array(10).keys()).map(index => {
          return (
            <LinearGradient
              key={index}
              colors={['#F44336', '#4CAF50']}
              style={[styles.layerBox]}>
              <View style={styles.shadowLayer} />
            </LinearGradient>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 350,
    position: 'relative',
  },
  layerBox: {
    width: 350,
    height: 350,
    borderRadius: 173,
    position: 'absolute',
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
