import axios from "axios";
import { useEffect, useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";

export const Graphics = ({ modalContent, isVisible }) => {
    const [graphics, setGraphics] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const graphicsList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/graphics'
            );

            setGraphics(graphicsList.data.data.reverse());
        }

        fetchData();
    }, []);

    const showModal = (i) => {
        modalContent(i);
        isVisible();
    }

    return (
        <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {graphics.map(i => (
                <TouchableOpacity key={i.id} onPress={() => showModal(i)}>
                    <Image source={{ uri: i.thumb_url }} style={{ width: 100, height: 100, margin: 5 }} key={i.id} />
                </TouchableOpacity>
            ))}
        </View>
    )
}