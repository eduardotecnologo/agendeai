import {Image, Text,TextInput,TouchableOpacity,View} from "react-native";
import icon from "../../constants/icons.js";
import {styles} from "./account.style.js";
import Button from "../../components/button/button.jsx"


function Account(){
   return <View style={styles.container}>

      <View style={styles.logoContainer}>
         <Image source={icon.logo} style={styles.logo}/>
      </View>

      <View>
         <View style={styles.inputContainer}>
            <TextInput placeholder="Nome" style={styles.input}/>
         </View>

         <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input}/>
         </View>

         <View style={styles.inputContainer}>
            <TextInput placeholder="Senha" 
            secureTextEntry={true} 
            style={styles.input}/>
         </View>
            <Button text="Criar Conta"/>  
         </View>

      <View style={styles.footer}>
         <Text>Já tenho conta: </Text>

         <TouchableOpacity>
            <Text style={styles.footerLink}>Fazer Login.</Text>
         </TouchableOpacity>
      </View>

   </View>
} 
export default Account;