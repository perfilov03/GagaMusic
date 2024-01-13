import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

const AudioList = () => {

    const navigation = useNavigation()
    const handleNavigateToScreen = () => {
        navigation.navigate('Ежедневный чарт');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>GagaMusic Top 50</Text>
            <Text style={styles.description}>Самые популярные треки на платформе за последние сутки</Text>
            <View style={styles.div}>
                <Text style={styles.track}>1. Ariana Grande - yes, and?</Text>
                <Text style={styles.track}>2. Ariana Grande - 7 rings</Text>
                <Text style={styles.track}>3. Selena Gomez - People you know</Text>
                <Text style={styles.track}>4. Lady Gaga, Ariana Grande - Rain on me</Text>
                <Text style={styles.track}>5. Miley Cyrus - Flowers</Text>
            </View>
            
            <TouchableOpacity  style={styles.button} onPress={() => handleNavigateToScreen()}>
                <Text style={styles.textButton}>Смотреть полностью</Text>
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

export default AudioList;