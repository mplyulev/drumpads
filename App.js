import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

import { Button, SafeAreaView } from 'react-native';

const Example = () => {

// sounds/music
const [soundObj, setSoundObj] = useState(new Audio.Sound);
const [soundObj1, setSoundObj1] = useState(new Audio.Sound);

const [soundObj2, setSoundObj2] = useState(new Audio.Sound);


useEffect(() => {
    async function loadSounds() {
        await soundObj.loadAsync(require('./test1.wav'))
        await soundObj1.loadAsync(require('./test.wav'))
        await soundObj2.loadAsync(require('./track.mp3'))
    }
    loadSounds();
}, [])

/**
* Action taken when pressing button
*/
const doPlay = (soundObj) => { 
   
soundObj.playAsync();
soundObj.replayAsync()
}

return (
<SafeAreaView>
<Button onPress={() => doPlay(soundObj)} title="Example" />
<Button onPress={() => doPlay(soundObj1)}  title="Example" />
<Button onPress={() => doPlay(soundObj2)}  title="Example" />
</SafeAreaView>
)
}

export default Example;
