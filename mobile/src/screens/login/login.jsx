import {Image, Text,TextInput,TouchableOpacity,View} from "react-native";
import icon from "../../constants/icons.js";
import logo from "../../assets/Logo.png"
import {styles} from "./login.style.js";
import Button from "../../components/button/button.jsx"



function Login(){
   return <View style={styles.container}>

      <View style={styles.logoContainer}>
         <Image source={icon.logo} style={styles.logo}/>
      </View>

      <View>
         <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input}/>
         </View>

         <View style={styles.inputContainer}>
            <TextInput placeholder="Senha" 
            secureTextEntry={true} 
            style={styles.input}/>
         </View>
            <Button text="Acessar"/>  
         </View>

      <View style={styles.footer}>
         <Text>Não tenho conta: </Text>

         <TouchableOpacity>
            <Text style={styles.footerLink}>Criar conta agora.</Text>
         </TouchableOpacity>
      </View>

   </View>
} 
export default Login;