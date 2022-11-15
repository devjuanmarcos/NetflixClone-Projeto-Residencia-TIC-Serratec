import React from "react";

import { Text, ImageBackground, View, Image } from 'react-native'

import styles from './styles'

const Hero = () => {
    return (
        <ImageBackground
            style={styles.hero}
            source={{ uri: 'https://i.imgur.com/EJyDFeY.jpg' }}>
            <Image
                style={styles.logo}
                resizeMode="contain"
                source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }}
            />
            <View style={styles.containerTop10}>
                <Image style={styles.top10Badge} source={require('../../assets/Top10.png')}
                />
                <Text style={styles.top10Text}>Top 1 de hoje no Brasil</Text>
            </View>
        </ImageBackground>
    )
}

export default Hero;