import React, { useEffect, useState } from 'react'
import { View, Text,StyleSheet,Button,Alert, } from 'react-native'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import WeatherInfo from './components/WeatherInfo'
import Picker from './components/Picker'
import Refresh from './components/Refresh'
import WeatherDetails from './components/WeatherDetails'
const App = () => {
    

    const WEATHER_API_KEY="562d117a8a234a09092c49e7c57b38a4"
    const link="https://api.openweathermap.org/data/2.5/weather?"
    const [loading,setLoading]=useState(false)
    const [locWeather,setLocWeather]=useState()
    const [unitSystem,setUnitSystem]=useState('metric')
    const getPermissions=async ()=>{
        const location=await Permissions.askAsync(Permissions.LOCATION)

        if(location.status!=='granted'){
            Alert.alert('ERROR','Permission for location not granted',[{text:'close',style:'destructive'}])
            return false
        }

        return true
    }


    const handleLocation=async ()=>{
        setLoading(true)
       try{ const permission=await getPermissions()
        if(permission){
            const myLocation=await Location.getCurrentPositionAsync({timeInterval:5000})
            if(myLocation){
               const {latitude,longitude}=myLocation.coords

            const apiCall= await fetch(`${link}lat=${latitude}&lon=${longitude}&units=${unitSystem}&appid=${WEATHER_API_KEY}`)
              const locationWeather=await apiCall.json()
              setLocWeather(locationWeather)
              setLoading(false)
            }
          
        }else{
            return;
        }
    
    }
        catch (error){
            console.log(error);
        }
    }

    useEffect(()=>{
       
        handleLocation()
        
    },[unitSystem])


   const handleUnitSystem=(value)=>{
        setUnitSystem(value)
        console.log(unitSystem);
    }

   

    if(locWeather){
        return  <View style={styles.screen}>
        <Picker unitSystem={unitSystem} setUnit={handleUnitSystem} />
        <Refresh refreshTemp={handleLocation}/>
         <WeatherInfo loading={loading}  details={locWeather}/>
         <WeatherDetails details={locWeather} />
         </View>
     
    }else{
        return (
            <View style={styles.screen}>
                <Text>Fetching Data.......</Text>
            </View>
        )
    }
  
}

const styles=StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:'center',
        alignItems:"center"
    }
})

export default App
