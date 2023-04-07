import { View, Text, StyleSheet, Platform, Image, ScrollView, Linking } from "react-native";
import { Button } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome5";

export const Contact = () => {
    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-bnw.png' }} style={{ width: 226, height: 75 }} />
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Button icon="phone" mode="elevated" onPress={() => Linking.openURL('tel:18019174262')} style={{ marginTop: 10, marginBottom: 10 }}>Call Galactic Digital Studios</Button>
                    <Button icon="email" mode="elevated" onPress={() => Linking.openURL('mailto:raul.smith@galacticdigitalstudios.com')} style={{ marginTop: 10, marginBottom: 10 }}>Email Us Directly</Button>
                    <Button icon="message" mode="elevated" onPress={() => Linking.openURL('sms:18019174262')} style={{ marginTop: 10, marginBottom: 10 }}>Send Galactic Digital Studios an SMS</Button>
                    <Button icon="facebook" mode="elevated" onPress={() => Linking.openURL('https://facebook.com/galacticdigitalstudios')} style={{ marginTop: 10, marginBottom: 10 }}>Visit Us on Facebook</Button>
                    <Button icon="github" mode="elevated" onPress={() => Linking.openURL('https://github.com/raulsmith12')} style={{ marginTop: 10, marginBottom: 10 }}>Look Us Up on Github</Button>
                    <Text style={{ textAlign: "center", fontSize: 16, color: "#483475" }}>
                        <Icon name="map-marker-alt" size={24} color="#483475" />
                        &nbsp;Based in Salt Lake City, Utah
                    </Text>
                    <Text style={{ textAlign: "center", fontSize: 16, color: "#483475" }}>
                        but servicing clients throughout
                    </Text>
                    <Text style={{ textAlign: "center", fontSize: 16, color: "#483475" }}>
                        the continental United States&nbsp;
                        <Icon name="flag-usa" size={24} color="#483475" />
                    </Text>
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
        alignContent: 'center',
    },
    text: {
        paddingTop: 5,
        paddingBottom: 5,
    },
})