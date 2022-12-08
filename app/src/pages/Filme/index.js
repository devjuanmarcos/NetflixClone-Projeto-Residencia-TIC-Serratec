import React, {useState} from 'react';
import {SinglePickerMaterialDialog} from 'react-native-material-dialog';
import {Button, Title, Paragraph, Caption} from 'react-native-paper';
import {
  ScrollView,
  ImageBackground,
  View,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

import ButtonVertical from '../../components/ButtonVertical';
import Secao from '../../components/Secao';
import Episodio from '../../components/Episodio';

const Filme = () => {
  const [tipo] = useState('serie');
  const [visible, setVisible] = useState(false);
  const [temporada, setTemporada] = useState({value: 1, label: 'Temporada 1'});

  return (
    <>
      <SinglePickerMaterialDialog
        title={'Séris - Temporadas'}
        items={[
          {value: 1, label: 'Temporada 1'},
          {value: 2, label: 'Temporada 2'},
          {value: 3, label: 'Temporada 3'},
        ]}
        visible={visible}
        selectedItem={temporada}
        onOk={result => {
          setVisible(false);
          setTemporada(result.selectedItem);
        }}
      />
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{uri: 'https://i.imgur.com/EJyDFeY.jpg'}}
          style={styles.hero}
        />
        <View style={styles.containerPadding}>
          <Title>Nome do Filme</Title>
          <Button
            style={styles.buttonPlay}
            icon="play"
            uppercase={false}
            mode="contained"
            color="#fff">
            Assistir
          </Button>
          <Paragraph>
            Texto totalmente aleatório apenas para encher linguiça no meu
            parágrafo
          </Paragraph>
          <Caption style={styles.captionInfos}>
            Elenco:{' '}
            <Caption style={styles.captionWhite}>
              Juan Marcos, Juan Marcos, Juan Marcos e Juan{' '}
            </Caption>{' '}
            Gêneros:{' '}
            <Caption style={styles.captionWhite}>
              Ação, muita Aventura e Suspense pra caramba
            </Caption>{' '}
          </Caption>
          <View style={styles.menu}>
            <ButtonVertical icon="plus" text="Minha Lista" />
            <ButtonVertical icon="thumb-up" text="Classifique" />
            <ButtonVertical icon="send" text="Compartilhe" />
            <ButtonVertical icon="download" text="Baixar" />
          </View>
          {tipo === 'serie' && (
            <>
              <TouchableOpacity
                onPress={() => setVisible(true)}
                style={styles.buttonTemporada}>
                <Text style={styles.temporadaName}>Temporada 1</Text>
                <Icon name="chevron-down" color="#fff" size={20} />
              </TouchableOpacity>
              <FlatList
                data={[1, 2, 3, 4]}
                renderItem={({item, index}) => <Episodio key={index} />}
              />
            </>
          )}
        </View>
        {tipo === 'filme' && <Secao hasTopBorder />}
      </ScrollView>
    </>
  );
};

export default Filme;
