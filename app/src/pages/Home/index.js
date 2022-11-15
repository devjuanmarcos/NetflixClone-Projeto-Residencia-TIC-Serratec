import React from "react";
import { View, ScrollView, TouchableOpacity, FlatList, Image } from "react-native";

import styles from './styles';
import { Button, Title } from 'react-native-paper';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import ButtonVertical from "../../components/ButtonVertical";
import LinearGradient from "react-native-linear-gradient";

const Home = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <Hero />

            <View style={styles.menuHeader}>
                <ButtonVertical icon="plus" text="Minha Lista" />
                <Button icon="play" uppercase={false} mode="contained" color="#fff">
                    Assitir
                </Button>
                <ButtonVertical icon="information-outline" text="Saiba Mais" />
            </View>

            <View style={styles.previaContainer}>
                <Title style={styles.previaTittle}>Prévias</Title>
                <FlatList
                    horizontal
                    style={styles.flatListContainer}
                    data={[1, 2, 3, 4, 5, 6, 7]}
                    renderItem={(item, index) => (
                        <TouchableOpacity key={index}
                            style={{ marginLeft: index === 1 ? 20 : 0, marginLeft: 10 }}>
                            <View style={styles.oval}>
                                <Image style={styles.capa} source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }} />

                                <Image
                                    resizeMode="contain"
                                    style={styles.logo}
                                    source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }} />

                                <LinearGradient style={styles.gradient} colors={['rgba(0,0,0,0)', 'rgba(0,0,0,1)']} />

                            </View>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </ScrollView>


    );
};

export default Home;