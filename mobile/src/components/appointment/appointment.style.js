import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    appointment:{
        backgroundColor: COLORS.white,
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.gray4,
    },
    container:{
        flexDirection: "row"
    },
    name: {
        fontSize: FONT_SIZE.md,
        color: COLORS.gray1,
        marginBotton: 2
    },
    specialty:{
        fontSize: FONT_SIZE.md,
        color: COLORS.gray3,
        marginTop: 5,
        marginBotton: 5,
    },
    icon:{
        with:48,
        height:48,
        marginRight: 5,
        marginTop: 5

    },
    bookingDate:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginTop:22
    },
    bookingHour:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray3,
        marginTop:22
    },
    booking:{
        flexDirection: "row"
    },
    containerBooking:{
        flex:1
    },
    containerButton: {
        marginTop: 5
    }
    
}