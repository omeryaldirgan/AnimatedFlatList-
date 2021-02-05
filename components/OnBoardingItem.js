import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,FlatList} from 'react-native';

const OnboardingItem=()=>{
   return (
      <View style={styles.container}>
         <FlatList/>
      </View>
   );
}
export default OnboardingItem;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
});
