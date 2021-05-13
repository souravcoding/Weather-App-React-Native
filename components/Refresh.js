import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {Ionicons} from "@expo/vector-icons"
import { Color } from '../Constants'
const Refresh = ({refreshTemp}) => {
    return <View style={styles.refresh}> 
    <Ionicons onPress={refreshTemp} size={24} name={"md-refresh"} color={Color.primary} />
    </View>
}

const styles=StyleSheet.create({
    refresh:{
        position:'absolute',
        top:50,
        right:20
    }
})

export default Refresh
