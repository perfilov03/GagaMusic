import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

import AudioList from './screens/AudioList.jsx';
import Player from './screens/Player.jsx';
import PlayList from './screens/PlayList.jsx';

const Tab = createBottomTabNavigator()

const AppNavigate = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="AudioList" component={ AudioList } />
            <Tab.Screen name="Player" component={ Player } />
            <Tab.Screen name="PlayList" component={ PlayList } />
        </Tab.Navigator>
    )
}


export default AppNavigate;