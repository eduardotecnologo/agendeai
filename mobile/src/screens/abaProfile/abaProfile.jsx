import { View,Text } from "react-native";
import { styles } from "./abaProfile.style.js";

export default function AbaProfile(){
    return <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.title}>
                Nome
            </Text>
            <Text style={styles.text}>
                Eduardo Alexandre
            </Text>

            <Text style={styles.title}>
                E-mail
            </Text>
            <Text style={styles.text}>
                edudeveloperctk@gmail.com
            </Text>
        </View>
    </View>
}