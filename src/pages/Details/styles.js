import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 48
  },

  cause: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },

  causeProperty: {
    fontSize: 16,
    color: '#41414D',
    fontWeight: 'bold'
  },

  causeValue: {
    marginTop: 8,
    fontSize: 14,
    marginBottom: 24,
    color: '#737380'
  },

  contactsBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131A'
  },

  heroDescription: {
    fontSize: 14,
    color: '#737380',
    marginTop: 16
  },

  contacts: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  contactsAction: {
    backgroundColor: '#E02041',
    borderRadius: 8,
    height: 48,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  contactsActionText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold'
  }
});