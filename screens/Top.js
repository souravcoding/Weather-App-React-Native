import React from 'react'
import { View, Text,StyleSheet, Button} from 'react-native'
import Navigation from '../Navigator/Navigation'

const Top = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Top Screen</Text>
            <Button title="next" onPress={()=>props.navigation.navigate('middle')}></Button>
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

export default Top
