import { api } from "@/src/utils/server-config"
import { AntDesign } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Image } from "expo-image"

export const Home = () => {
    const [valueApi, setValueApi] = useState([])
    const [match, setMatch] = useState([])

    const getApi = async () => {
        return await api.get("/dogs/getAllDogs").then((resp) => {
            setValueApi(resp.data)
        })
    }

    console.log('valueApi', valueApi)

    useEffect(() => {
        getApi()
    }, [])

    const handlePressNo = () => {
        setValueApi((prevState) => prevState.slice(1))
    }

    const handlePressYes = () => {
        setMatch((prevState) => [...prevState, valueApi[0]])
        setValueApi((prevState) => prevState.slice(1))
    }

    return (
        <View style={styles.container}>
            <Image
                source={{uri: valueApi[0]?.image[0]}}
                style={styles.image}
                contentFit="contain"
            />  
            <View style={styles.contentButtons}>
                <TouchableOpacity
                onPress={handlePressNo}
                style={styles.buttonNo}  
                >
                    <AntDesign name="close" size={24} color={'#fff'}/>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={handlePressYes}
                style={styles.buttonYes}  
                >
                    <AntDesign name="heart" size={24} color={'#fff'}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}