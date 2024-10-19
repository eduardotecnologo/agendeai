import { Text, View } from "react-native";
import { styles } from "./schedule.style.js";
import { Calendar,LocaleConfig } from "react-native-calendars"
import { ptBr } from "../../constants/calendar.js"
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import  Button  from "../../components/button/button.jsx";


LocaleConfig.locales["pt-br"] = ptBr;
LocaleConfig.defaultLocale = "pt-br";

export default function Schedule(){

    const [selectedDate, setSelectedDate] = useState(
        new Date().toISOString().slice(0,10)
    );
    const [selectedHour, setSelectedHour] = useState("");

    return <View style={styles.container}>

        <View>
            <Calendar style={styles.theme}
            onDayPress={(day) => {
                setSelectedDate(day.dateString)
            }}markedDates={{
                [selectedDate]:{selected:true}
            }}
            minDate={new Date().toDateString()} />

            <View >
                <Text style={styles.hour}>
                    Horário
                </Text>
            </View>

            <View>
                <Picker selectedValue={selectedHour}
                onValueChange={(itemValue, itemIndex) => {
                    setSelectedHour(itemValue)
                }}
                style={styles.picker}>
                    <Picker.Item label="09:00" value="09:00"/>
                    <Picker.Item label="10:00" value="10:00" />
                    <Picker.Item label="11:00" value="11:00" />
                </Picker>
            </View>
        </View>

        <View>
            <Button text="Agendar"/>
        </View>
    </View>
}