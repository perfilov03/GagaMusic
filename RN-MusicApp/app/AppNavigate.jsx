import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import AudioList from './screens/AudioList.jsx';
import Player from './screens/Player.jsx';
import PlayList from './screens/PlayList.jsx';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import StackApp from './StackNavigate.jsx';

const Tab = createBottomTabNavigator();

const AppNavigate = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Чарты" component={ StackApp } options={{
                tabBarIcon: ({color, size}) => (<AntDesign name="barschart" size={size} color={color} />)
                
            }} />
            <Tab.Screen name="Воспроизведение" component={ Player } options={{
                tabBarIcon: ({color, size}) => (<AntDesign name="play" size={size} color={color} />)
                
            }} />
            <Tab.Screen name="Моя музыка" component={ PlayList } options={{
                tabBarIcon: ({color, size}) => (<MaterialCommunityIcons name="playlist-music" size={size} color={color} />)
                
            }} />
        </Tab.Navigator>
    )
}


export default AppNavigate;