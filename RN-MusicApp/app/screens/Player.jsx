import { View, Text, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ImagesExample = () => (
    <Image source = {require('../../src/img/ariana-grande-yesand.png')} width={10} height={10} />
)

const Song = () => (
    <Text style={styles.song}>yes, and?</Text>
);
const Artist = () => (
    <Text style={styles.artist}>Ariana Grande</Text>
);


const Player = () => {
    return (
        <View style={styles.container}>
            <ImagesExample style={styles.images} />
            <Song />
            <Artist />
            <View style={styles.control}>
                <AntDesign style={styles.controlElem} name="stepbackward" size={40} color="black" />
                <AntDesign style={styles.controlElem} name="caretright" size={40} color="black" />
                <AntDesign style={styles.controlElem} name="stepforward" size={40} color="black" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "pink",
    },
    control:{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '15%',
    },
    controlElem:{
        marginHorizontal:'9%',
    },
    song:{
        color: "black",
        fontSize: 22,
        fontWeight: "bold",
        marginTop: '15%',
    },
    artist:{
        color: "black",
        fontSize: 13,
        fontWeight: "bold",
        marginTop: '2%',
    },
})

export default Player;