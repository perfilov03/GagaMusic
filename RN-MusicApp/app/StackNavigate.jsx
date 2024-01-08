import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native-safe-area-context';

import AudioList from './screens/AudioList.jsx';
import MusicChart from './screens/MusicChart';

const StackApp = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='StackApp'>
            <Stack.Screen name="Музыка мира" component={ AudioList } />
            <Stack.Screen name="Ежедневный чарт" component={ MusicChart } />
        </Stack.Navigator>
    )
}

export default StackApp;