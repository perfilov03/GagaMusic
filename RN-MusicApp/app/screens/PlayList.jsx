import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Album = () => {
    return (
        <View style={styles.list}>
            <MaterialIcons name="album" size={80} color="black" />
            <Text style={styles.song}>Альбомы</Text>
        </View>
        
    )
}
const Playlists = () => {
    return (
        <View style={styles.list}>
            <Ionicons name="albums" size={80} color="black" />
            <Text style={styles.song}>Плейлисты</Text>
        </View>
        
    )
}
const PlayList = () => {
    const navigation = useNavigation()
    const handleNavigateToScreen = () => {
        navigation.navigate('Воспроизведение');
    }

    return (
        <View style={styles.container}>
        <View style={styles.playlist}>
            <Album />
            <Playlists />
        </View>
            <TouchableOpacity  style={styles.button} onPress={() => handleNavigateToScreen()}>
                <Text style={styles.textButton}>Слушать всё</Text>
            </TouchableOpacity>
            <View style={styles.div}>
                <Text style={styles.track}>ANNA ASTI - Царица</Text>
                <Text style={styles.track}>Юлия Савичева - От его голоса</Text>
                <Text style={styles.track}>Ольга Серябкина - Бывшие</Text>
                <Text style={styles.track}>Моя Мишель - Ветер меняет направление</Text>
                <Text style={styles.track}>Taylor Swift - august </Text>
                <Text style={styles.track}>Ariana Grande - yes, and?</Text>
                <Text style={styles.track}>ANNA ASTI - Ночью на кухне</Text>
                <Text style={styles.track}>ANNA ASTI - По барам</Text>
                <Text style={styles.track}>Ольга Серябкина - Бывшие</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "pink",
    },
    title:{
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    description:{
        color: "white",
        fontSize: 16,
        paddingLeft: 20,
        paddingRight: 20,
        textAlign: "center",
        marginBottom: 10,
    },
    div:{
        padding: 10,
    },
    button:{
        paddingVertical: 10,
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "green",
        borderRadius: 15,
        marginBottom: 10,
    },
    track:{
        color: "white",
        fontSize: 14,
        paddingVertical: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 5,
        backgroundColor: "green",
    },
    textButton:{
        color: "white",
        fontSize: 20,
    },
    list:{
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    playlist:{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
    },
})

export default PlayList;