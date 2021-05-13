import React from 'react'
import {Text,TouchableOpacity,View} from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'
import {createDrawerNavigator} from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Top from '../screens/Top'
import Last from '../screens/Last'
import Middle from '../screens/Middle'


const stack=createStackNavigator()
const drawer=createDrawerNavigator()
export const StackNavigator=(props)=>{
    return   <stack.Navigator screenOptions={{headerTintColor:'black',headerStyle:{
        backgroundColor:"grey"
    },
    headerLeft:()=>(
        <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
        <Text>open</Text>
        </TouchableOpacity>
    )
    }}>
     <stack.Screen name="top"  component={Top} />
     <stack.Screen name="middle" component={Middle} />
     </stack.Navigator>
}


const Lost=(props)=>{
    return   <stack.Navigator screenOptions={{headerTintColor:'black',headerStyle:{
         backgroundColor:"grey"
     },
     headerLeft:()=>(
         <TouchableOpacity onPress={()=>props.navigation.toggleDrawer()}>
         <Text>open</Text>
         </TouchableOpacity>
     )
     }}>
     <stack.Screen name="last"  component={Last} />
     </stack.Navigator>
}




export const DrawerNavigator=()=>{
    return <NavigationContainer >
    <drawer.Navigator>
    <drawer.Screen name='stack' component={StackNavigator} />
    <drawer.Screen name='last' component={Lost} />

</drawer.Navigator>

    </NavigationContainer>
    
}

