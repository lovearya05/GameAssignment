import { StyleSheet } from "react-native";

const baseStyles = StyleSheet.create({
    flxRowAliCnt: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    flxRowSpcBtwn: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    flxColSpcBtwn: { flexDirection: 'column', justifyContent: 'space-between' },

    allCntr: { justifyContent: 'center', alignItems: 'center' },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    shadowLight: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 1.23,
        shadowRadius: 1.42,

        elevation: 1,
    },
    gry: 'rgba(0, 0, 0, 0.11)',
    gryDark2: 'rgba(169, 169, 169, 1)',
    yellow: 'rgba(255, 191, 3, 1)',
    yellowLight: 'rgba(255, 191, 3, 0.08)',
})

export default baseStyles
