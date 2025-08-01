import axios from "axios"
import { useEffect, useState } from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from '@/src/screens/home/styles'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';


export const Home = () => {

    type Dog = {
        image: string[]
        name: string[]
        description: string[]
    }

    const [dogs, setDogs] = useState<Dog[]>([])
    const [match, setMatch] = useState<Dog[]>([])

    const getApi = async() => {
        return await axios.get('http://localhost:3000/dogs/getAllDogs').then((resp) => {
            setDogs(resp.data)
        })
    }

    const handlePressNo = () => {
        setDogs((prevState) => prevState.slice(1))
    }

    const handlePressYes = () => {
        setMatch((prevState) => [...prevState, dogs[0]])
        setDogs((prevState) => prevState.slice(1))
    }

    useEffect(() =>{
        getApi()
    }, [])

    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.card}>

                <Image
                    style={styles.imageDog}
                    source={{uri: dogs[0]?.image[0]}}
                />

                <Text style={styles.dogName}>{dogs[0]?.name}</Text>
                <Text style={styles.dogDescription}>{dogs[0]?.description}</Text>

            </TouchableOpacity>

            <View style={styles.contentButton}>

                <TouchableOpacity
                    style={[styles.buttonYes, {backgroundColor: 'red'}]}
                    onPress={handlePressNo}
                >

                    <FontAwesome name="close" size={32} color="#fff" />

                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonYes}
                    onPress={handlePressYes}
                >

                    <AntDesign name="hearto" size={32} color="#fff" />

                </TouchableOpacity>

            </View>

        </View>
    )
}