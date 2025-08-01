import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        width: '80%',
        height: '60%',
        borderWidth: 1,
        backgroundColor: '#FFA500',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageDog: {
        width: '90%',
        height: '90%',
        borderRadius: 20
    },
    contentButton: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%',
        marginTop: 24
    },
    buttonYes: {
        width: 70,
        height: 70,
        borderRadius: 70,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    dogName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    dogDescription: {
        letterSpacing: 1.3
    }
})