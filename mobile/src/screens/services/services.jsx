import { FlatList, Image, Text,View } from "react-native";
import { styles } from "./services.style.js";
import { doctors_services } from "../../constants/data.js";
import icon from "../../constants/icons.js"
import Service from "../../components/service/service.jsx";

export default function Services(){
    
    return <View style={styles.container}>

        <View style={styles.banner}>
            <Image source={icon.female}/>
            <Text style={styles.name}>Eduardo</Text>    
            <Text style={styles.specialty}>Cardiologista</Text>    
        </View>

        <FlatList data={doctors_services}
                  keyExtractor={(service) => service.id_service}
                  showsVerticalScrollIndicator={false}
                  renderItem={({ item }) => {
                    return <Service description={item.description} 
                                    price={item.price}/>}}/>
    </View>
}