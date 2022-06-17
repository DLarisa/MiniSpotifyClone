import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';
import { View } from '../components/Themed';

const album = {
    id: '11',
    name: 'Oddinary', // Nume la Playlist (nu tb să fie neapărat ceva oficial)
    by: 'Spotify', // cine a creat playlist-ul
    imageUri: 'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
    artistHeadline: 'Stray Kids', // pot fi mai mulți artiști într-un playlist
    numberOfLikes: 100,
    songs: [
        {
            id: '1',
            uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
            imageUri: 'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
            title: 'VENOM',
            artist: 'Stray Kids',
        },
        {
            id: '2',
            uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
            imageUri: 'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
            title: 'MANIAC',
            artist: 'Stray Kids',
        },
        {
            id: '3',
            uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
            imageUri: 'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
            title: 'Charmer',
            artist: 'Stray Kids',
        },
        {
            id: '4',
            uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
            imageUri: 'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
            title: 'FREEZE',
            artist: 'Stray Kids',
        },
        {
            id: '5',
            uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
            imageUri: 'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
            title: 'Lonely St',
            artist: 'Stray Kids',
        },
        {
            id: '6',
            uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
            imageUri: 'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
            title: 'Waiting for Us',
            artist: 'Stray Kids',
        },
        {
            id: '7',
            uri: 'https://s3.amazonaws.com/exp-us-standard/audio/playlist-example/Comfort_Fit_-_03_-_Sorry.mp3',
            imageUri: 'https://static.wikia.nocookie.net/stray-kids/images/0/09/ODDinary_online_cover.jpg/revision/latest?cb=20220306164412',
            title: 'Muddy Water',
            artist: 'Stray Kids',
        },
    ],
};

export default function AlbumScreen() {
    return (
        <View style={styles.container}>
            <AlbumHeader album={album} />
            <FlatList
                data={album.songs}
                renderItem={({ item }) => (<SongListItem song={item} />)}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ paddingBottom: 170 }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});
