import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Middle = () => {
    return (
        <View style={styles.screen}>
            <Text>Middle Screen</Text>
        </View>
    )
}
const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export const headeroption=navigator=>{
    return {
        headerTitle:'Welcome here',
        headerStyle:{
            backgroundColor:'yellow'
        }
    }
}

export default Middle
