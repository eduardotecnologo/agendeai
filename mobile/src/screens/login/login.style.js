import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    container:{
        backgroundColor: COLORS.white,
        flex: 1,
        justifyContent: "space-between",
        padding: 50
    },
    logoContainer:{
        alignItems: "center"
    },
    logo: {
        width:100,
        height:100,
        marginTop: 10
    },
    inputContainer:{
        marginTop: 15
    },
    input:{
        backgroundColor: COLORS.gray1,
        padding:10,
        borderRadius: 6
    },
    footer:{
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    },
    footerLink: {
        color: COLORS.blue,
        fontWeight: "bold"
    }

}