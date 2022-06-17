import React, { useContext } from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { AppContext } from "../../AppContext";
import { Song } from "../../types";
import styles from './styles';

export type SongListItemProps = {
    song: Song;
};

const SongListItem = (props: SongListItemProps) => {
    const { song } = props;
    const { setSongId } = useContext(AppContext);
    const { setTitle } = useContext(AppContext);
    const { setArtist } = useContext(AppContext);

    const onPlay = () => {
        setSongId(song.id);
        setTitle(song.title);
        setArtist(song.artist);
    }

    return (
        <TouchableOpacity onPress={onPlay}>
            <View style={styles.container}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default SongListItem;