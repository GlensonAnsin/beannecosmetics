import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, verticalScale, moderateScale } from '../utils/Dimensions';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/Images/welcome.png')}
          style={styles.logoImage}
        />
      </View>

      {/* Get Started Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5EC',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: verticalScale(50),
  },
  logoImage: {
    width: horizontalScale(350),
    height: verticalScale(350),
    resizeMode: 'contain',
  },
  button: {
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(40),
    borderRadius: moderateScale(30),
    opacity: 0.8,
  },
  buttonText: {
    color: '#000000',
    fontSize: moderateScale(20),
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Welcome;