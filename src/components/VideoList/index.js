import React, { useCallback, useState } from 'react';
import { Alert, Button, Text, View } from 'react-native';

import YoutubePlayer from "react-native-youtube-iframe";




export default function VideoList({ video }) {


    const [playing, setPlaying] = useState(false);

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);



    return (
        <View>
            <Text style={{ color: '#FFF' }}>{video.id}</Text>
            <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={video.key}
                onChangeState={onStateChange}
            />

        </View>
    );
}