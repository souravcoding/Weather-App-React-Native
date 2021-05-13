import React from 'react'
import { View, Text,StyleSheet} from 'react-native'
import {Picker} from "@react-native-picker/picker"
const MetricPicker = ({unitSystem,setUnit}) => {
    return <View style={styles.picker}>
    <Picker selectedValue={unitSystem} onValueChange={(value)=>setUnit(value)} mode="dropdown">
        <Picker.Item value="metric" label="C°" />
        <Picker.Item value="imperial" label="F°" />
    </Picker>
    </View>
    
}

const styles=StyleSheet.create({
    picker:{
        backgroundColor:'rgba(0,0,0,0.05)',
        width:'30%',
        height:50,
        position:'absolute',
        top:40,
        left:20
    }
})

export default MetricPicker
