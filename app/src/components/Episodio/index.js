import React from 'react';

import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Caption, Title} from 'react-native-paper';
import styles from './styles';

const Episodio = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.row}>
        <Image
          style={styles.capa}
          source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}
        />
        <View>
          <Title style={{fontSize: 15}}>1. Nome do Episodio</Title>
          <Caption>45 mins.</Caption>
        </View>
      </View>
      <Caption>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </Caption>
    </TouchableOpacity>
  );
};

export default Episodio;
