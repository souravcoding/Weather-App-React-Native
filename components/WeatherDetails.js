import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { Color } from '../Constants'
import {FontAwesome5,MaterialCommunityIcons} from '@expo/vector-icons'
const WeatherDetails = ({details}) => {
    const feelsLike= details.main.feels_like
    const humidity= details.main.humidity
    const wind=details.wind.speed
     const pressure= details.main.pressure
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
            <View style={styles.info}>
            <View style={styles.item}>
            <FontAwesome5 name="temperature-low" size={26} color={Color.primary} />
            <View style={styles.itemSecond}>
            <Text style={styles.text}>Feels Like:</Text>
            <Text style={styles.values}>{feelsLike}°</Text>
            </View>
            </View>
            
            <View style={styles.item}>
            <MaterialCommunityIcons name="water" size={30} color={Color.primary} />
            <View style={styles.itemSecond}>
            <Text style={styles.text}>Humidity:</Text>
            <Text style={styles.values}>{humidity} %</Text>
            </View>
            </View>
            </View>


            <View style={styles.info}>
            <View style={styles.item}>
            <MaterialCommunityIcons name="weather-windy" size={30} color={Color.primary} />

            <View style={styles.itemSecond}>
            <Text style={styles.text}>Wind Speed:</Text>
            <Text style={styles.values}>{wind} m/s</Text>
            </View>
            </View>
            
            <View style={styles.item}>
            <MaterialCommunityIcons name="speedometer" size={30} color={Color.primary} />
            <View style={styles.itemSecond}>
            <Text style={styles.text}>Pressure:</Text>
            <Text style={styles.values}>{pressure} hpa</Text>
            </View>
            </View>
            </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    screen:{
        width:"90%",
        justifyContent:'center',
        alignItems:"center",
        position:'absolute',
        bottom:20
    },
    container:{
        width:'100%',
        // borderWidth:2,
        borderColor:Color.border,
        backgroundColor:'white',
        shadowColor:Color.border,
        shadowOffset:{
            width:2,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:10,
        elevation:5
    },
    info:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor:Color.border,

    },
    item:{
        borderRightWidth:1,
        borderColor:Color.border,
        width:'50%',
        padding:20,
        flex:1,
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        fontSize:15
    },
    values:{
        fontSize:16,
        color:Color.secondary
    },
    itemSecond:{
        alignItems:'center'
    }
   
})

export default WeatherDetails
