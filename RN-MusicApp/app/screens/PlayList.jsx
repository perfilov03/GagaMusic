import { View, Text, StyleSheet } from 'react-native';

const PlayList = () => {
    return (
        <View style={styles.container}>
            <Text> Плейлисты </Text>
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

export default PlayList;