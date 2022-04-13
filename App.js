import React, { useState, useEffect } from "react";
import { TouchableOpacity, Image, View, StyleSheet } from "react-native";
import ControlBar from './components/ControlBar';
import { Audio } from 'expo-av';
import Vinyl from './components/Vinyl';
const Example = () => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const loadSound = async () => {
        setIsLoading(true);
        console.log('Loading song')
        const { sound } = await Audio.Sound.createAsync(require('./track.mp3'));
        setCurrentSong(sound);
        setIsLoading(false)
        console.log('Complete')
    }

    useEffect(() => {
        loadSound();
    }, [])

    return (
        <View style={styles.container}>
            <Vinyl style={styles.controlBar}
                   isLoading={isLoading}
                   setCurrentSong={setCurrentSong}
                   setIsPlaying={setIsPlaying}
                   isPlaying={isPlaying}
                   currentSong={currentSong}
           />
            <ControlBar style={styles.controlBar}
                        isLoading={isLoading}
                        setCurrentSong={setCurrentSong}
                        setIsPlaying={setIsPlaying}
                        isPlaying={isPlaying}
                        currentSong={currentSong}
            />

        </View>
     );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'red'
  }
});
export default Example;
