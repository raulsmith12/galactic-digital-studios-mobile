import { Avatar, Card } from "react-native-paper";
import { Text } from "react-native";

const LeftContent = () => <Avatar.Image size={24} source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-favicon.png' }} style={{ backgroundColor: 'white' }} />

export const ServiceCard = ({ title, description }) => {
    return (
        <Card mode="elevated" style={{ width: '95%', margin: 10 }}>
            <Card.Title title={title} left={LeftContent} style={{ backgroundColor: '#483475' }} titleStyle={{ color: 'white', fontWeight: 'bold' }} />
            <Card.Content style={{ paddingTop: 10 }}>
                <Text variant="textMedium">{description}</Text>
            </Card.Content>
        </Card>
    )
}
