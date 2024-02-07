import { StyleSheet } from "react-native";
import { myColors} from "./colors";

export const Styles = StyleSheet.create({
    // Buttons
    smallTextLight: {
        fontSize: 40,
        color: myColors.white,
    },
    smallTextDark: {
        fontSize: 40,
        color: myColors.black,
    },
    // Keyboard
    row: {
        maxWidth: "100%",
        flexDirection: "row",
    },
    viewBottom: {
        position: "absolute",
        bottom: 5,
    },
    screenFirstNumber: {
        fontSize: 50,
        color: myColors.gray,
        fontWeight: "300",
        alignSelf: "flex-end",
    },
    screenSecondNumber: {
        fontSize: 40,
        color: myColors.gray,
        fontWeight: "300",
        alignSelf: "flex-end",
    },
});
