import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext";
import {Pressable, Text} from "react-native";
import {Styles} from "../style/GlobalStyles";
import {myColors} from "../style/colors";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue: boolean;
    isGray: boolean;
}

export default function Button({title, onPress, isBlue, isGray,}: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <Pressable
            style={{
                width: 70,
                height: 60,
                borderRadius: 24,
                backgroundColor: isBlue ? myColors.blue : isGray ? myColors.btnGray
                    : theme === "light" ? myColors.white : myColors.btnDark,
                justifyContent: "center",
                alignItems: "center",
                margin: 8,
            }}
            onPress={onPress}
        >
            <Text style={
                isBlue || isGray ? Styles.smallTextLight : theme === "dark"
                    ? Styles.smallTextLight : Styles.smallTextDark
            }
            >
                {title}
            </Text>
        </Pressable>
    );
}