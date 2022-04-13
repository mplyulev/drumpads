import React, { useEffect } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  cancelAnimation,
  Easing,
} from 'react-native-reanimated';

const ControlBar = (props) => {
    const vinylPosition = useSharedValue(0);
    const animatedStyles = useAnimatedStyle(() => {
        return {
          transform: [
            {
              translateX: vinylPosition.value,
            },
          ],
        };
      }, [vinylPosition.value]);

    useEffect(async () => {
        const { currentSong, isPlaying } = props;
        if (currentSong) {
            if (isPlaying) {
                vinylPosition.value = withTiming(80, { duration: 1000, easing: Easing.linear, useNativeDriver: true })
                await currentSong.playAsync();
            } else {
                vinylPosition.value = withTiming(0, { duration: 1000, easing: Easing.linear, useNativeDriver: true })
                await currentSong.pauseAsync();
            }
        }

        return () => {
            cancelAnimation(vinylPosition);
            currentSong.unloadAsync();
        }
    }, [props.isPlaying]);

    return (
        <View style={styles.container}>
            <Image resizeMode='contain' style={styles.cover} source={require("../cover.png")} />
            <Animated.Image resizeMode='contain' style={[styles.vinyl, animatedStyles]} source={require("../vinyl.png")} />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center'
  },
  vinyl: {
    position: 'absolute',
    bottom: 152,
    flex: 1,
    width: 200,
    height: 200,
  },
  cover: {
    flex: 1,
    bottom: 150,
    position: 'absolute',
    width: 200,
    height: 200,
  }
});
export default ControlBar;