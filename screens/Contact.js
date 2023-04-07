import { View, Text, StyleSheet, Platform, Image, ScrollView } from "react-native";

export const Contact = () => {
    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-bnw.png' }} style={{ width: 226, height: 75 }} />
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Text>Hello</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
    },
    pageContainer: {
        flex: 1,
    },
    contentContainer: {
        padding: 10,
    },
    text: {
        paddingTop: 5,
        paddingBottom: 5,
    },
})