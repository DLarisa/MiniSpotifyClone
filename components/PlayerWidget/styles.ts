import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 45,
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 5,
        borderColor: 'black',
    },
    progress: {
        height: 10,
        backgroundColor: '#bcbcbc',
    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 90,
        height: 90,
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100,
        justifyContent: 'space-around'
    },
    title: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        color: '#a6a6a6',
        fontSize: 18,
        marginLeft: 5,
    }
})

export default styles;