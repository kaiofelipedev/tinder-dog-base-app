import { RowList } from "@/src/components/row-list/row-list"
import { RootState } from "@/src/store"
import { Image, Text, View } from "react-native"
import { useSelector } from "react-redux"
import { styles } from "./styles"


export const DetailsDog = () => {
    const detailsDog = useSelector((state: RootState) => state.detailsDog.details)
    console.log('detailsDog', detailsDog)

    return (
        <View style={styles.container}>
            <View style={styles.contentImage}>
                <Image
                    style={styles.imageDog}
                    source={{uri: detailsDog?.image[0]}} 
                />
            </View>
            <View style={styles.contentDescription}>
                <RowList
                    description={detailsDog?.name}
                    title='Nome:'
                />
                <RowList
                    description={detailsDog?.description}
                    title='Descrição:'
                />
                <RowList
                    description={detailsDog?.address}
                    title='Endereço:'
                />
                <RowList
                    description={detailsDog?.years}
                    title='Idade:'
                />
                <RowList
                    description={detailsDog?.size}
                    title='Tamanho:'
                />
            </View>
        </View>
    )
}