import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    contentRowList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: '100%',
        marginTop: 24,
        paddingLeft: 12,
        paddingBottom: 8,
        paddingRight: 12
    },
    contentTextTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    contentTextDescription: {
        fontSize: 16,
        fontWeight: 500,
        color: '#fff'
    }
})