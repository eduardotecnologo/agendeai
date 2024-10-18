import { Text, View,Image } from "react-native";
import { styles } from "./appointment.style.js";
import icon from "../../constants/icons.js";
import Button from "../../components/button/button.jsx"

export default function Appointment(props){
    return <View style={styles.appointment}>
        <Text style={styles.name}>
            {props.service} - {props.doctor}</Text>
        <Text style={styles.specialty}>
            {props.specialty}</Text>

            <View style={styles.container}>
                <View style={styles.containerBooking}>
                    <View style={styles.booking}>
                        <Image style={styles.icon} 
                               source={icon.calendar}/>
                        <Text style={styles.bookingDate}>
                            18/10/2024
                        </Text>
                    </View>
                    <View style={styles.booking}>

                        <Image style={styles.icon} 
                            source={icon.clock}/>
                        <Text style={styles.bookingHour}>
                            19:09h
                            </Text>
                    </View>
                </View>
                <View style={styles.containerButton}>
                    <Button text="Cancelar Reserva" theme="danger"/>
                </View>
            </View>
    </View>
    
    
}