import React from "react";
import { View, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { Title } from 'react-native-paper';
import styles from './styles';

const Secao = () => {
    return (
        <View style={styles.container}>
            <Title style={styles.secaoTitle}>Nome da Seção</Title>

            <FlatList
                horizontal
                data={[1, 2, 3, 4, 5, 6]}
                renderItem={({ item, index }) => (
                    <TouchableOpacity key={index}>
                        <ImageBackground
                            style={styles.capa}
                            source={{
                                uri: 'https://i.imgur.com/EJyDFeY.jpg'
                            }}>
                            <Image resizeMode="contain" style={styles.logo} source={{ uri: 'https://i.imgur.com/4xN7wB8.png' }} />
                        </ImageBackground>

                    </TouchableOpacity>
                )}

            />
        </View>
    )
}

export default Secao;