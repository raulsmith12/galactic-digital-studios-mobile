import axios from "axios";
import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform, ScrollView, Image } from "react-native";
import { Avatar, Card } from "react-native-paper";

const LeftContent = () => <Avatar.Image size={24} source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-favicon.png' }} style={{ backgroundColor: 'white' }} />

export const Team = () => {
    const [teamContent, setTeamContent] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const teamPage = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/team'
            );

            setTeamContent(teamPage.data.data);
        }

        fetchData();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-bnw.png' }} style={{ width: 226, height: 75 }} />
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Text style={styles.text}>Our team of highly skilled designers and developers is here to help you with any of your digital marketing and branding needs, bringing a wealth of experience and expertise to the table. To help with putting faces to names, here is the Galactic Digital Studios team:</Text>
                    {teamContent.map(i => (
                        <Card key={i.id} mode="elevated" style={{ width: '95%', margin: 10 }}>
                            <Card.Title title={i.name} left={LeftContent} style={{ backgroundColor: '#483475' }} titleStyle={{ color: 'white', fontWeight: 'bold' }} />
                            <Card.Cover source={{ uri: i.image_url }} />
                            <Card.Content>
                                <Text variant="titleLarge">{i.title}</Text>
                                <Text variant="bodyMedium">{i.description}</Text>
                            </Card.Content>
                        </Card>
                    ))}
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