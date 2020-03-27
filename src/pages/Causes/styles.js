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

  headerText: {
    fontSize: 15,
    color: '#737380'
  },

  title: {
    fontSize: 32,
    marginBottom: 16,
    color: '#13131A',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  textBold: {
    fontWeight: 'bold'
  },

  causesList: {
    marginTop: 32
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

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsButtonText: {
    color: '#E02041',
    fontSize: 14,
    fontWeight: 'bold'
  }
});