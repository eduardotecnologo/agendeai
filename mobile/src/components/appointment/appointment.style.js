import { Text, View } from "react-native";

export default function Appointment(props){
    return <View>
        <Text>{props.service} - {props.doctor}</Text>
        <Text>{props.specialty}</Text>
    </View>
}