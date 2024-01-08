import { View, Text, StyleSheet } from 'react-native';

const Player = () => {
    return (
        <View style={styles.container}>
            <Text>В разработке</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Player;