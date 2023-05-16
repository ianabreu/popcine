import React, { useCallback, useState } from 'react';
import { Alert, Button, Pressable, Text, TouchableOpacity, View } from 'react-native';

import YoutubePlayer from "react-native-youtube-iframe";




export default function VideoList({ video, screen }) {

    const [playing, setPlaying] = useState(false);
    const params = {
        controls: 2,
        modestbranding: 1,
        rel: 0,
        loop: 1,
        showinfo: 0,

    }

    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
        }
    }, []);

    return (
            <View style={{ width: screen.width * 0.90, marginHorizontal: 10 }}>
                <YoutubePlayer
                    webViewStyle={{ opacity: 0.99 }}
                    webViewProps={{ renderToHardwareTextureAndroid: true, }}
                    height={280}
                    play={playing}
                    videoId={video.key}
                    onChangeState={onStateChange}
                    initialPlayerParams={params}
                />

            </View>

    );
}