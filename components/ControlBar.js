import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ControlBar = (props) => {
  return (
    <TouchableOpacity onPress={() => props.setIsPlaying(!props.isPlaying)} style={styles.container}>
      {props.isPlaying ? (
        <Image style={styles.play} source={require("../pause.png")} />
      ) : (
        <Image style={styles.play} source={require("../play.png")} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  play: {
    width: 50,
    height: 50,
  },
});
export default ControlBar;