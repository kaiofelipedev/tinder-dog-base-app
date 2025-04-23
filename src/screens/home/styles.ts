import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentImage: {
        height: '60%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFA500',
        borderRadius: 20
    },
    imageDog: {
        height: '90%',
        width: '90%',
    },
    contentButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        marginTop: 24
    },
    buttonYes: {
        height: 70,
        width: 70,
        borderRadius: 70,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    }
})