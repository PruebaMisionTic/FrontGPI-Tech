import { StyleSheet, ScrollView } from 'react-native'

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  
  root: {
    flexDirection: 'row',
    width: '50%',
    padding: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 5,
    backgroundColor: '#2B4055',
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    marginRight: 5,
    color: 'white',
  },
  time: {
    color: 'darkgrey',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderRadius: 1,
    backgroundColor: '#2B4055',
    marginLeft: 5,
    flexDirection: "row",
    height:20
  }
  
 

});

export default styles;