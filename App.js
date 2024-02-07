import React, { useState } from 'react';
import { StyleSheet, Switch, SafeAreaView, View, StatusBar as RNStatusBar } from 'react-native';
import { ThemeContext } from "./src/context/ThemeContext";
import { myColors } from "./src/style/colors";
import MyKeyboard from "./src/component/MyKeyboard";

export default function App() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={theme}>
            <SafeAreaView style={theme === "light" ? styles.container : [styles.container, { backgroundColor: "black" }]}>
                <RNStatusBar
                    backgroundColor={theme === "light" ? myColors.light : "black"}
                    barStyle={theme === "light" ? 'dark-content' : 'light-content'}
                />
                <View style={styles.themeSwitchContainer}>
                    <Switch
                        value={theme === 'dark'}
                        onValueChange={toggleTheme}
                    />
                </View>
                <MyKeyboard />
            </SafeAreaView>
        </ThemeContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: myColors.light,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    themeSwitchContainer: {
        marginVertical: 30,
    },
});
