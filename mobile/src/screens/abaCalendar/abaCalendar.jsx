import { FlatList,View } from "react-native";
import { styles } from "./abaCalendar.style.js";
import { appointments } from "../../constants/data.js";
import icon from "../../constants/icons.js"
import Appointment from "../../components/appointment/appointment.jsx"


export default function AbaCalendar(){
    return <View style={styles.container}>

        <FlatList data={appointments}
            keyExtractor={(appointment) => appointment.id_appointment}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
            return <Appointment service={item.service}
                    doctor={item.doctor}
                    specialty={item.specialty}/> 

        }}/>
    </View>
}