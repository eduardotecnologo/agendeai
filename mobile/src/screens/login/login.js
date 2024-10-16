import {Image, Text,View} from "react-native";
import logo from "../../assets/Logo.png";
import {styles} from "./login.style.js";


function Login(){
   return <View>
    <Image source={logo} style={styles.logo}/>
   </View>
} 

export default Login;