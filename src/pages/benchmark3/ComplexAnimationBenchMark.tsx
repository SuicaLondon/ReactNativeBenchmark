import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import AnimationContainer, {AnimationType} from './AnimationContainer';
import ListItem from './ListItem';
import {useTimeDifference} from './useTimeDifference';

export default function ComplexAnimationBenchMark() {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
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
        {Array.from(Array(1000).keys()).map(index => {
          const ratioX = Math.random();
          const ratioY = Math.random();
          return (
            <AnimationContainer
              left={windowWidth * ratioX}
              top={windowHeight * ratioY}
              type={
                index % Object.keys(AnimationType).length === 0
                  ? AnimationType.translate
                  : index % Object.keys(AnimationType).length === 1
                  ? AnimationType.scale
                  : AnimationType.opcaity
              }>
              <ListItem key={index} />
            </AnimationContainer>
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
