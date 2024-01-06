import { View, Text, StyleSheet } from 'react-native';

const AudioList = () => {
    return (
        <View style={styles.container}>
            <Text>Моя музыка</Text>
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

export default AudioList;