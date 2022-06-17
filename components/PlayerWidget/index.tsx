import React, { useContext, useEffect, useState } from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import styles from './styles';
import { Audio } from "expo-av";
import { Sound } from "expo-av/build/Audio";
import * as Haptics from 'expo-haptics';
import Reanimated, { useAnimatedStyle, useSharedValue, withSequence, withTiming } from 'react-native-reanimated';
import { AppContext } from "../../AppContext";

// https://mailboxdrive.com/
const song = {
    id: '1',
    uri: 'https://www.mboxdrive.com/Labrinth,%20Zendaya%20-%20All%20For%20Us.mp3',
    imageUri:'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
    title: 'MANIAC',
    artist: 'Stray Kids',
};

const ReanimatedTouchableOpacity = Reanimated.createAnimatedComponent(TouchableOpacity);

const PlayerWidget = () => {
    const [sound, setSound] = useState<Sound|null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(true);
    const [duration, setDuration] = useState<number|null>(null);
    const [position, setPosition] = useState<number|null>(null);

    const { songId, title, artist } = useContext(AppContext);

    const heartScale = useSharedValue(1);


    const onPlaybackStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    };
    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }

        const { sound: newSound } = await Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdate,

        );
        setSound(newSound);

        // const _sound = new Audio.Sound();
        // await _sound.loadAsync(require('./a.mp3'), { shouldPlay: true });
        // await _sound.setPositionAsync(0);
        // await _sound.playAsync();
    };
    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            //await sound.stopAsync();
            await sound.pauseAsync();
        }
        else {
            await sound.playAsync();
        }
    };
    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
          return 0;
        }
    
        return (position / duration) * 100;
    }


    const heartStyle = useAnimatedStyle(
        () => ({
            transform: [{ scale: heartScale.value }],
        }),
        [],
    );
    const onPressLike = React.useCallback(async () => {
        setIsLiked(isLiked => !isLiked);

        // Touch Feedback when liked
        if (isLiked) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
            heartScale.value = withSequence(
                withTiming(2, { duration: 200 }),
                withTiming(1, { duration: 200 }),
            );
        }
    }, [heartScale, isLiked]);



    useEffect(() => {
        playCurrentSong();
    }, []);


    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%`}]} />
            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.artist}>{artist}</Text>
                    </View>

                    <View style={styles.iconsContainer}>
                        <ReanimatedTouchableOpacity onPress={onPressLike} style={heartStyle}>
                            <AntDesign name={isLiked ? 'hearto' : 'heart'} size={25} color={"white"} style={{ marginLeft: -5 }} />
                        </ReanimatedTouchableOpacity>
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={25} color={"white"} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PlayerWidget;