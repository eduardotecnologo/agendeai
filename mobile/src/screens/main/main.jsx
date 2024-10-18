import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import icon from "../../constants/icons.js"; 


import AbaHome from "../abaHome/abaHome.jsx";
import AbaCalendar from "../abaCalendar/abaCalendar.jsx";
import AbaProfile from "../abaProfile/abaProfile.jsx";


const Tab = createBottomTabNavigator();
export default function Main(){
    return <NavigationContainer>
       <Tab.Navigator>
            <Tab.Screen name="Home" component={AbaHome}
            options={{
                headerTitleAlign: "center",
                headerTitle: () =>{
                    return <Image source={icon.logo}
                                  style={{
                                    width:100,
                                    height:100
                                }
                            }/>
                },
                tabBarIcon: ({focused }) => {
                    return <Image source={icon.home}
                                  style={{
                                    width:40,
                                    height:40,
                                    opacity: focused ? 1 : 0.5
                                }}/>
                }
            }}/>
            <Tab.Screen name="Calendar" component={AbaCalendar}
             options={{
                headerTitleAlign: "center",
                headerTitle: () =>{
                    return <Image source={icon.logo}
                                  style={{
                                    width:100,
                                    height:100
                                }}/>
                },
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.calendar}
                                  style={{
                                    width:40,
                                    height:40,
                                    opacity: focused ? 1 : 0.5
                                }}/>
                }
            }}/>
            <Tab.Screen name="Profile"  component={AbaProfile}
            options={{
                headerTitleAlign: "center",
                headerTitle: () =>{
                    return <Image source={icon.logo}
                                  style={{width:100,height:100}
                                }/>
                },
                tabBarIcon: ({focused}) => {
                    return <Image source={icon.profile}
                                  style={{
                                    width:40,
                                    height:40,
                                    opacity: focused ? 1 : 0.5
                                }}/>
                }
            }}/>
       </Tab.Navigator>
    </NavigationContainer>
}