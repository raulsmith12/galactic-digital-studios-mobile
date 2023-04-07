import axios from "axios";
import { useEffect, useState } from "react";
import { Image, View, TouchableOpacity } from "react-native";

export const Logos = ({ modalContent, isVisible }) => {
    const [logos, setLogos] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const logoList = await axios(
                'https://galacticdigitalstudios.com/backend/public/api/logos'
            );

            setLogos(logoList.data.data.reverse());
        }

        fetchData();
    }, []);

    const showModal = (i) => {
        modalContent(i);
        isVisible();
    }

    return (
        <View style={{ justifyContent: 'center', flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
            {logos.map(i => (
                <TouchableOpacity key={i.id} onPress={() => showModal(i)}>
                    <Image source={{ uri: i.thumb_url }} style={{ width: 100, height: 100, margin: 5 }} key={i.id} />
                </TouchableOpacity>
            ))}
        </View>
    )
}