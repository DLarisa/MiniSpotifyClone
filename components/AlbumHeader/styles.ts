import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 7,
    },
    image: {
        width: 200,
        height: 200,
    },
    name: {
        color: 'white',
        fontSize: 27,
        fontWeight: 'bold',
    },
    creatorContainer: {
        flexDirection: "row",
        margin: 5
    },
    creator: {
        color: '#a6a6a6',
        margin: 3,
        marginTop: -3,
        paddingRight: 15,
        fontSize: 15,
    },
    likes: {
        color: '#a6a6a6',
        margin: 3,
        marginTop: -3,
        fontSize: 15,
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default styles;