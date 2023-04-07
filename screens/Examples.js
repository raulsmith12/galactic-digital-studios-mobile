import { View, Text, StyleSheet, Platform, Image, ScrollView, Linking } from "react-native";
import { Avatar, Button, Card, Modal, Portal, Provider } from "react-native-paper";
import { Logos } from "../components/Logos";
import { Graphics } from "../components/Graphics";
import { Websites } from "../components/Websites";
import { useState } from "react";

const LeftContent = () => <Avatar.Image size={24} source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-favicon.png' }} style={{ backgroundColor: 'white' }} />

export const Examples = () => {
    const [visible, setVisible] = useState(false);
    const [cardContent, setCardContent] = useState({});

    const hideModal = () => {
        setVisible(false);
        setCardContent({});
    }

    return (
        <Provider>
            <Portal>
                <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{ backgroundColor: 'white', padding: 20, justifyContent: 'center' }}>
                    <Card>
                        <Image source={{ uri: cardContent.image_url }} style={{ width: 350, height: 'auto', minHeight: 200, alignSelf: 'center' }} />
                        <Card.Title title={cardContent.name} left={LeftContent} />
                        <Card.Content>
                            <Text variant="titleMedium">{cardContent.description}</Text>
                        </Card.Content>
                        <Card.Actions>
                            <Button mode="contained" onPress={() => hideModal()}>Close</Button>
                            {cardContent.site_url && (
                                <Button mode="contained" onPress={() => Linking.openURL(cardContent.site_url)}>Go Visit the Website</Button>
                            )}
                        </Card.Actions>
                    </Card>
                </Modal>
            </Portal>
            <View style={styles.container}>
                <View style={styles.pageContainer}>
                    <View style={{ alignItems: 'center' }}>
                        <Image source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-bnw.png' }} style={{ width: 226, height: 75 }} />
                    </View>
                    <ScrollView style={styles.contentContainer}>
                        <Text style={styles.text}>
                            <LeftContent />&nbsp;Logos
                        </Text>
                        <Logos modalContent={(modalContent) => setCardContent(modalContent)} isVisible={() => setVisible(true)} />
                        <Text style={styles.text}>
                            <LeftContent />&nbsp;Graphics
                        </Text>
                        <Graphics modalContent={(modalContent) => setCardContent(modalContent)} isVisible={() => setVisible(true)} />
                        <Text style={styles.text}>
                            <LeftContent />&nbsp;Websites
                        </Text>
                        <Websites modalContent={(modalContent) => setCardContent(modalContent)} isVisible={() => setVisible(true)} />
                    </ScrollView>
                </View>
            </View>
        </Provider>
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
        fontSize: 18,
    },
})