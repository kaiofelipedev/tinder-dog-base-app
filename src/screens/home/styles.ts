import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        alignItems: 'center'
    },
    image: {
        height: 500,
        width: '80%',
        borderRadius: 10,
        marginTop: 24
    },
    contentButtons: {
        flexDirection: 'row',
        marginTop: 24,
        justifyContent: "space-around",
        width: '25%'
    },
    buttonNo: {
        backgroundColor: 'red',
        height: 80,
        width: 80,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonYes: {
        backgroundColor: 'green',
        height: 80,
        width: 80,
        borderRadius: 80,
        justifyContent: 'center',
        alignItems: 'center'
    }
})