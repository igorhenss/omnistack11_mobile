import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Image, Linking, Text, TouchableOpacity, View } from 'react-native';
import * as MailComposer from 'expo-mail-composer';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const cause = route.params.cause;

  const message = `Hello, ${ cause.name }! I want to Be The Hero for the cause "${ cause.title }" with ${ Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'}).format(cause.value) }!`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `I want to Be The Hero for the cause: ${ cause.title }`,
      recipients: [ cause.email ],
      body: message
    });
  }

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=${ cause.whatsapp }&text=${ message }`);
  }

  return (
    <View style={ styles.container }>
      <View style={ styles.header }>
        <Image source={ logoImg } />

        <TouchableOpacity onPress={ navigateBack }>
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={ styles.cause }>
        <Text style={ styles.causeProperty }>NGO:</Text>
        <Text style={ styles.causeValue }>{ cause.name } de { cause.city }/{ cause.fu }</Text>
        
        <Text style={ styles.causeProperty }>Cause:</Text>
        <Text style={ styles.causeValue }>{ cause.title }</Text>

        <Text style={ styles.causeProperty }>Description:</Text>
        <Text style={ styles.causeValue }>{ cause.description }</Text>

        <Text style={ styles.causeProperty }>Needed amount (USD):</Text>
        <Text style={ styles.causeValue }>
          { Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD'
          }).format(cause.value) }
        </Text>
      </View>

      <View style={ styles.contactsBox }>
        <Text style={ styles.heroTitle }>Save the day!</Text>
        <Text style={ styles.heroTitle }>Be The Hero, if you may.</Text>

        <Text style={ styles.heroDescription }>Use the HeroSignal:</Text>

        <View style={ styles.contacts }>
          <TouchableOpacity
            style={ styles.contactsAction }
            onPress={ sendWhatsApp }
          >
            <Text style={ styles.contactsActionText }>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={ styles.contactsAction }
            onPress={ sendMail }
          >
            <Text style={ styles.contactsActionText }>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}