import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Image, FlatList, Text, TouchableOpacity, View } from 'react-native';

import logoImg from '../../assets/logo.png';

import api from '../../services/api';

import styles from './styles';

export default function Causes() {
  const navigation = useNavigation();

  const [causes, setCauses] = useState([]);
  const [amountOfCauses, setAmountOfCauses] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadCauses();
  }, []);

  async function loadCauses() {
    if (loading) {
      return;
    }

    setLoading(true);

    if (amountOfCauses > 0 && causes.length === amountOfCauses) {
      return;
    }

    const response = await api.get('/causes', {
      params: { page }
    });

    console.log('CAUSES');
    console.log(causes.length);
    console.log('RESPONSE');
    console.log(response.data.length);

    setLoading(false);
    setPage(page + 1);

    setCauses([...causes, ...response.data]);
    setAmountOfCauses(response.headers['x-total-count']);
  }

  function navigateToDetails(cause) {
    navigation.navigate('Details', { cause });
  }

  return (
    <View style={ styles.container } >
      <View style={ styles.header }>
        <Image source={ logoImg } />
        <Text style={ styles.headerText } >
          Total de <Text style={ styles.textBold }>{ amountOfCauses } casos</Text>.
        </Text>
      </View>

      <Text style={ styles.title }>Welcome!</Text>
      <Text style={ styles.description }>Why don't you use some time to <Text style={ styles.textBold }>Be The Hero</Text> for one of the following causes?</Text>

      <FlatList
        style={ styles.causesList }
        data={ causes }
        keyExtractor={ cause => String(cause.id) }
        onEndReached={ loadCauses }
        onEndReachedThreshold={ 0.2 }
        showsVerticalScrollIndicator={ true }
        renderItem={ ({ item: cause }) => (
          <View style={ styles.cause }>
            <Text style={ styles.causeProperty }>NGO:</Text>
            <Text style={ styles.causeValue }>{ cause.name }</Text>
            
            <Text style={ styles.causeProperty }>Cause:</Text>
            <Text style={ styles.causeValue }>{ cause.title }</Text>

            <Text style={ styles.causeProperty }>Needed amount (USD):</Text>
            <Text style={ styles.causeValue }>
              { Intl.NumberFormat('en-US', {
                style: 'currency', currency: 'USD'
              }).format(cause.value) }
            </Text>

            <TouchableOpacity
              style={ styles.detailsButton }
              onPress={ () => navigateToDetails(cause) }
            >
              <Text style={ styles.detailsButtonText }>Read more</Text>
              <Feather name="arrow-right" size={16} color="#E02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}