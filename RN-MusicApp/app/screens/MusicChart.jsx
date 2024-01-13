import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const MusicChart = () => {
    const navigation = useNavigation()
    const handleNavigateToScreen = () => {
        navigation.navigate('Воспроизведение');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Топ самых популярных треков за сутки:</Text>
            <View style={styles.div}>
                <Text style={styles.track}>1. Ariana Grande - yes, and?</Text>
                <Text style={styles.track}>2. Ariana Grande - 7 rings</Text>
                <Text style={styles.track}>3. Selena Gomez - People you know</Text>
                <Text style={styles.track}>4. Lady Gaga, Ariana Grande - Rain on me</Text>
                <Text style={styles.track}>5. Miley Cyrus - Flowers</Text>
                <Text style={styles.track}>6. Taylor Swift - Style (Taylor's Version)</Text>
                <Text style={styles.track}>7. The Weeknd - One Of The Girls</Text>
                <Text style={styles.track}>8. Taylor Swift - Cruel Summer</Text>
                <Text style={styles.track}>9. Ariana Grande - thank u, next</Text>
                <Text style={styles.track}>10. Miley Cyrus - Used To Be Young</Text>
            </View>
            <TouchableOpacity  style={styles.button} onPress={() => handleNavigateToScreen()}>
                <Text style={styles.textButton}>Слушать</Text>
            </TouchableOpacity>
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
    title:{
        color: "white",
        fontSize: 20,
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
        marginTop: 15,
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
})

export default MusicChart;