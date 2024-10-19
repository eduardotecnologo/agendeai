import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    container:{
        backgroundColor: COLORS.white,
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        marginTop:20,
        justifyContent: "space-between",
        marginBottom:20
    },
    theme:{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#dd99ee'
    },
    hour: {
        fontSize: FONT_SIZE.lg,
        color: COLORS.gray2,
        fontWeight: "bold",
        marginTop:20
    }
}