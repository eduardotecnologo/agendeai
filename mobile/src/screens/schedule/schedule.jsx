import { Text, View } from "react-native";
import { styles } from "./schedule.style.js";
import { Calendar,LocaleConfig } from "react-native-calendars"
import { ptBr } from "../../constants/calendar.js"
import { useState } from "react";

LocaleConfig.locales["pt-br"] = ptBr;
LocaleConfig.defaultLocale = "pt-br";

export default function Schedule(){

    const [selected, setSelected] = useState("");

    return <View style={styles.container}>
        <Calendar style={styles.theme}
        onDayPress={(day) => {
            setSelected(day.dateString)
        }}markedDates={{
            [selected]:{selected:true}
        }}
        minDate={new Date().toDateString()} />
    </View>

}