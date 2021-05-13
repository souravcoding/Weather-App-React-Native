import React from 'react'
import { View, Text,StyleSheet,Image,ActivityIndicator } from 'react-native'
import { Color } from '../Constants'

const WeatherInfo = ({details,loading}) => {
  
 const icon= details.weather[0].icon
 const desc=details.weather[0].description
 const main=details.weather[0].main
 console.log(icon);
 const name=details.name
 const iconLink=`http://openweathermap.org/img/wn/${icon}@4x.png`
        return (
            <View style={styles.screen}>
             <Text>{name}</Text>
                <Image style={styles.img} source={{uri:iconLink}} />
             {loading ?<ActivityIndicator size="large" color="black" /> : <Text style={styles.temp}>{details.main.temp}°</Text>}
               
                <Text style={styles.desc}>{desc}</Text>
                <Text style={styles.main}>{main}</Text>
            </View>
        )
}

const styles=StyleSheet.create({
    screen:{
       
        justifyContent:'center',
        alignItems:"center",
        marginBottom:100
    },
    img:{
        width:100,
        height:100
    },
    temp:{
        fontSize:40,
        color:Color.primary
    },
    desc:{
        textTransform:'capitalize'
    },
    main:{
        fontSize:20,
        color:Color.secondary,
        fontWeight:'500',
        marginTop:10
    }

})

export default WeatherInfo
