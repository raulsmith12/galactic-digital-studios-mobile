import { View, Text, StyleSheet, Platform, Image, ScrollView } from "react-native";
import { ServiceCard } from "../components/ServiceCard";

export const Services = () => {
    return (
        <View style={styles.container}>
            <View style={styles.pageContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Image source={{ uri: 'https://galacticdigitalstudios.com/img/gds-logo-bnw.png' }} style={{ width: 226, height: 75 }} />
                </View>
                <ScrollView style={styles.contentContainer}>
                    <Text>Galactic Digital Studios prides itself on being a one-stop-shop of sorts for all your digital and online marketing needs. Here is a list of all the services that Galactic provides:</Text>
                    <ServiceCard title="Website Development" description="Websites are a vital part of a company&rsquo;s online presence, even in the age of mobile apps and social media. Whether you are looking to get more eyeballs on your brand or you want to sell merchandise to your customers, websites are a key component to it all. Why shouldn&rsquo;t you have an amazing website? Better yet, why shouldn&rsquo;t people be able to see your website? Not only does Galactic Digital Studios have all the tools needed to make your website shine and sparkle, but we also have a team of specialists that are experienced in search engine optimization." />
                    <ServiceCard title="Graphic Design" description="There are many graphic design services that are not individually outlined on this website that Galactic Digital Studios is prepared to work with your business on, including lamp post banners, kiosk banners, flyers, online style guides, packaging, decals, and more!" />
                    <ServiceCard title="Logo Design" description="Logos are important. They are a main component in a company&rsquo;s brand identity. They may not be the only thing that matters to having a great brand, but they are very vital. Galactic Digital Studios employs a team of logo designers that is both experienced and capable of making your logo be one that people will stand up and notice right away. We also will help you build a brand style guide that will make your branding all that much more official and professional." />
                    <ServiceCard title="Mobile App Development" description="The year is 2023. Websites are no longer the be-all-and-all of a company&rsquo;s online presence. Galactic Digital Studios recognizes this and is here to present a few solutions. Not only are all of our websites responsive and capable of being seen on both regular screens and mobile devices, but we are also equipped and trained in presenting mobile app development services that will be sure to get your name out there and your business into the new modern era." />
                    <ServiceCard title="Business Card Design" description="The business card. A staple for the professional businessperson. The wrong one can turn somebody completely away. The right one, however, can change a person&rsquo;s or business&rsquo;s life. Galactic Digital Studios knows this all too well and are prepared to work with you to get the best business card experience you can get. Whether you&rsquo;re a young aspiring entrepreneur or one of many executives in a large company, no business card design job is too big or too small for Galactic Digital Studios." />
                    <ServiceCard title="Brochure Design" description="Are you looking to build a new menu for your restaurant? Maybe print out some programs for that important event that&rsquo;s coming up? Have a wedding you need to announce to the world? Galactic Digital Studios can do it all! Our team of graphic design experts can help with these and more. We also work with whatever print shop that is near you to make sure that you get the best professional experience you can possibly get." />
                    <ServiceCard title="Database Management" description="What the customer sees on their phone, laptop, tablet, or desktop is only a fraction of a company&rsquo;s website these days. What lies beneath often times is a massive database of user information, products, content, and various other critical information that needs to be stored somewhere for safe keeping or later use. Galactic Digital Studios is dedicated to ensure that your databases are fully functional, operational, and ready to store all that data. Whether it is a small database that only has a few tables or a massive database with thousands of entries that need to be kept up to date, no table or database is too big or too small for Galactic Digital Studios&rsquo; team of experts." />
                    <ServiceCard title="Content Management" description="We get it. There are sometimes that you, as the owner of your company&rsquo;s website, don&rsquo;t want to call a developer at 2am to make a couple small content changes. And with Galactic Digital Studios, you won&rsquo;t have to. Our team is trained and ready to work with you on building a content management system for your website that is designed with the idea in mind of YOU being in charge of your content. We will even coach you on how to make the changes yourself so that you are in control of your content." />
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