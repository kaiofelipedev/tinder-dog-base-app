import { Text, View } from "react-native"
import { styles } from "./styles"

interface IProps {
    title: string;
    description: string
}

export const RowList = ({description, title}: IProps) => {
    return (
        <View style={styles.contentRowList}>
            <Text style={styles.contentTextTitle}>{title}</Text>
            <Text style={styles.contentTextDescription}>{description}</Text>
        </View> 
    )
}