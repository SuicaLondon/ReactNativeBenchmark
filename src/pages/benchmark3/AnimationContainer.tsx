import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {Animated, StyleSheet, View} from 'react-native';

export enum AnimationType {
  translate,
  opcaity,
  scale,
}

type AnimationContainerProps = PropsWithChildren<{
  left: number;
  top: number;
  type: AnimationType;
}>;

export default function AnimationContainer({
  left,
  top,
  type,
  children,
}: AnimationContainerProps) {
  if (type === AnimationType.translate) {
    return (
      <TranslateAnimationContainer left={left} top={top}>
        {children}
      </TranslateAnimationContainer>
    );
  } else if (type === AnimationType.scale) {
    return (
      <SaleAnimationContainer left={left} top={top}>
        {children}
      </SaleAnimationContainer>
    );
  } else if (type === AnimationType.opcaity) {
    return (
      <FadeInAnimationContainer left={left} top={top} children={children} />
    );
  }

  return null;
}

function FadeInAnimationContainer({
  left,
  top,
  children,
}: PropsWithChildren<{
  left: number;
  top: number;
}>) {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={[
        styles.position,
        {
          left: left,
          top: top,
          opacity: fadeAnim, // Bind opacity to animated value
        },
      ]}>
      {children}
    </Animated.View>
  );
}

function TranslateAnimationContainer({
  left,
  top,
  children,
}: PropsWithChildren<{
  left: number;
  top: number;
}>) {
  const xRatio = Math.random() * 2 - 1;
  const yRatio = Math.random() * 2 - 1;
  const translateAnimationX = useRef(new Animated.Value(0)).current;
  const translateAnimationY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateAnimationX, {
      toValue: left * xRatio,
      duration: 3000,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateAnimationY, {
      toValue: top * yRatio,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.position,
        {
          left: left,
          top: top,
          transform: [
            {
              translateY: translateAnimationY,
            },
            {
              translateX: translateAnimationX,
            },
          ],
        },
      ]}>
      {children}
    </Animated.View>
  );
}
function SaleAnimationContainer({
  left,
  top,
  children,
}: PropsWithChildren<{
  left: number;
  top: number;
}>) {
  const ratio = Math.random() * 2 - 1;
  const scaleAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleAnimation, {
      toValue: ratio,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View
      style={[
        styles.position,
        {
          left: left,
          top: top,
          transform: [
            {
              scale: scaleAnimation,
            },
          ],
        },
      ]}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
  },
});
