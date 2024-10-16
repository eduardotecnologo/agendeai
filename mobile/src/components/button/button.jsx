import { Text, Alert, TouchableOpacity } from "react-native";
import {styles} from "./button.style.js";

function Button(props){
    function TesteClick(){
        Alert.alert("Clicou!!!");
    }

    return <TouchableOpacity onPress={TesteClick}
            style={styles.btn}>
            <Text style={styles.text}>
            {props.text}</Text>
        </TouchableOpacity> 
}

export default Button;