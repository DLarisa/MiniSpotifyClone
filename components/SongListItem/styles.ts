import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 7,
    },
    image: {
        width: 90,
        height: 90,
    },
    rightContainer: {
        justifyContent: 'space-evenly',
        marginLeft: 15,
        width: "100%",
    },
    title: {
        color: 'white',
        fontSize: 20,
    },
    artist: {
        color: '#a6a6a6',
        fontSize: 15,
    },
})

export default styles;