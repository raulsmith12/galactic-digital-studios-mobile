import React from "react";
import { BottomNavigation } from 'react-native-paper';
import { About } from '../screens/About';
import { Contact } from '../screens/Contact';
import { Team } from '../screens/Team';
import { Services } from '../screens/Services';
import { Examples } from '../screens/Examples';

export const NavigationBar = ({ navigation }) => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'about', title: 'About', focusedIcon: 'star-shooting', unfocusedIcon: 'star-shooting-outline', accessibilityLabel: 'About' },
        { key: 'team', title: 'Team', focusedIcon: 'card-account-details', unfocusedIcon: 'card-account-details-outline', accessibilityLabel: 'Team' },
        { key: 'contact', title: 'Contact', focusedIcon: 'message-text', unfocusedIcon: 'message-text-outline', accessibilityLabel: 'Contact' },
        { key: 'services', title: 'Services', focusedIcon: 'laptop', accessibilityLabel: 'Services' },
        { key: 'examples', title: 'Examples', focusedIcon: 'application', unfocusedIcon: 'application-outline', accessibilityLabel: 'Examples' },
    ]);

    const AboutRoute = () => <About />;
    const TeamRoute = () => <Team />;
    const ContactRoute = () => <Contact />;
    const ServicesRoute = () => <Services />;
    const ExamplesRoute = () => <Examples />;

    const renderScene = BottomNavigation.SceneMap({
        about: AboutRoute,
        team: TeamRoute,
        contact: ContactRoute,
        services: ServicesRoute,
        examples: ExamplesRoute,
    })

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={() => navigation.navigate(routes[index].title)}
            barStyle={{ backgroundColor: '#483475' }}
            activeColor="#ffffff"
            inactiveColor="#ffffff"
        />
    )
}
