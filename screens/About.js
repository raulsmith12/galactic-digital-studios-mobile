import { View, Text, StyleSheet, Platform, Image, ScrollView } from "react-native";

export const About = () => {
    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-bnw.png' }} style={{ width: 226, height: 75 }} />
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Image source={{ uri: 'https://galacticdigitalstudios.com/img/web-development-l.jpg' }} style={{ width: 400, height: 264 }} />
                    <Text style={styles.text}>Started in 2015 as Galactic Web Solutions, Galactic has now grown into more than just a website development firm. Today, Galactic Digital Studios lives up to the new name, handling many different aspects of online digital marketing and branding.</Text>
                    <Text style={styles.text}>If you need a new logo, new graphic marketing, or even a new business card, Galactic Digital Studios has a team of designers ready to assist you. If you are in the market for assistance with search engine optimization, Galactic Digital Studios can help with that as well. And yes, we are still very much in the website development business, handling everything from dynamic, fully-functioning frontend sites, to behind-the-curtain backend work that would make Oz take up and notice, to database management to help keep your day-to-day running smoothly as ever.</Text>
                    <Text style={styles.text}>Whatever your online digital branding or design/development needs, Galactic Digital Studios has you covered.</Text>
                    <Text>&nbsp;</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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