import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Install via 'expo install @expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import { horizontalScale, verticalScale, moderateScale } from '../utils/Dimensions';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [isChecked, setIsChecked] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false); // Toggle for password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // For the confirm password visibility
  const [notification, setNotification] = useState(''); // Notification message

  // Update form data
  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  // Validate input fields
  const validateFields = () => {
    if (step === 1) {
      const { firstName, lastName, email, phone } = formData;
      if (!firstName || !lastName || !email || !phone) {
        setNotification('Please fill in all fields.');
        return false;
      }
    }
    if (step === 2) {
      const { username, password, confirmPassword } = formData;
      if (!username || !password || !confirmPassword) {
        setNotification('Please fill in all fields.');
        return false;
      }
      if (password !== confirmPassword) {
        setNotification('Passwords do not match.');
        return false;
      }
    }
    setNotification('');
    return true;
  };

  // Handle next step
  const handleNext = () => {
    if (validateFields()) {
      setStep(step + 1);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={require('../assets/Images/Registration.jpg')} // Check the path
        style={styles.imageBackground}
      >
        <View style={styles.textContainer}>
          <Text style={styles.header1}>UNVEIL YOUR{"\n"}RADIANCE</Text>
          <Text style={styles.quoteTxt}>Adorable Glamour, Just for You!</Text>
        </View>

        <View style={styles.regBox}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.progressContainer}>
              <View style={[styles.progressBar, step >= 1 && styles.activeStep]} />
              <View style={[styles.progressBar, step >= 2 && styles.activeStep]} />
              <View style={[styles.progressBar, step >= 3 && styles.activeStep]} />
            </View>

            <Text style={styles.signUp}>Sign Up</Text>

            {step === 1 && (
              <View style={styles.inputClmn}>
                <TextInput
                  style={styles.inputC}
                  placeholder="First Name"
                  placeholderTextColor="gray"
                  value={formData.firstName}
                  onChangeText={(value) => handleChange('firstName', value)}
                />
                <TextInput
                  style={styles.inputC}
                  placeholder="Last Name"
                  placeholderTextColor="gray"
                  value={formData.lastName}
                  onChangeText={(value) => handleChange('lastName', value)}
                />
                <TextInput
                  style={styles.inputC}
                  placeholder="Email"
                  placeholderTextColor="gray"
                  value={formData.email}
                  onChangeText={(value) => handleChange('email', value)}
                />
                <TextInput
                  style={styles.inputC}
                  placeholder="Phone Number"
                  placeholderTextColor="gray"
                  keyboardType="number-pad"
                  value={formData.phone}
                  onChangeText={(value) => handleChange('phone', value)}
                />
              </View>
            )}

            {step === 2 && (
              <View>
                <TextInput
                  style={styles.input2}
                  placeholder="Username"
                  placeholderTextColor="gray"
                  value={formData.username}
                  onChangeText={(value) => handleChange('username', value)}
                />
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Password"
                    placeholderTextColor="gray"
                    secureTextEntry={!showPassword}
                    value={formData.password}
                    onChangeText={(value) => handleChange('password', value)}
                  />
                  <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.iconContainer}>
                    <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color="black" />
                  </TouchableOpacity>
                </View>

                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.inputPass}
                    placeholder="Confirm Password"
                    placeholderTextColor="gray"
                    paddingRight={1}
                    secureTextEntry={!showConfirmPassword}
                    value={formData.confirmPassword}
                    onChangeText={(value) => handleChange('confirmPassword', value)}
                  />
                  <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)} style={styles.iconContainer}>
                    <Ionicons name={showConfirmPassword ? 'eye-off' : 'eye'} size={20} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            )}

            {step === 3 && (
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setIsChecked(!isChecked)}
              >
                <View style={styles.uncheckedBox}>
                  {isChecked && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.label}>I agree to all the Terms and Privacy Policies</Text>
              </TouchableOpacity>
            )}

            {notification ? <Text style={styles.notification}>{notification}</Text> : null}

            <View style={styles.buttonContainer}>
              {step > 1 && (
                <TouchableOpacity style={styles.navButton} onPress={() => setStep(step - 1)}>
                  <Text style={styles.navButtonText}>Back</Text>
                </TouchableOpacity>
              )}
              {step < 3 && (
                <TouchableOpacity style={styles.navButton} onPress={handleNext}>
                  <Text style={styles.navButtonText}>Next</Text>
                </TouchableOpacity>
              )}
              {step === 3 && (
                <TouchableOpacity
                  style={[styles.button, !isChecked && styles.disabledButton]}
                  disabled={!isChecked}
                  onPress={() => navigation.navigate('Login')}
                >
                  <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
              )}
            </View>
            
            {/* Add bottom padding to ensure content is scrollable */}
            <View style={{ height: 20 }} />
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  textContainer: {
    position: 'absolute',
    top: '6%',
    width: '100%',
    paddingLeft: 30,
  },
  header1: {
    color: 'white',
    fontSize: moderateScale(33),
    fontWeight: '900',
    textAlign: 'left',
    top: 0,
  },
  quoteTxt: {
    color: 'white',
    fontSize: 20,
  },
  regBox: {
    flex: 1,
    maxHeight: '75%', // Adjust this value as needed
    width: '100%',
    backgroundColor: '#EC297B',
    bottom: 0,
    position: 'absolute',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(13),
    borderTopRightRadius: moderateScale(50),
    borderTopLeftRadius: 50,
  },
  label: {
    color: 'white',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
    marginLeft: 90,
    marginRight: 90,
  },
  progressBar: {
    flex: 1,
    height: 5,
    backgroundColor: '#FF69B4',
    marginHorizontal: 4,
    marginTop: 8,
    borderRadius: 3,
  },
  activeStep: {
    backgroundColor: 'white',
  },
  signUp: {
    color: 'white',
    fontSize: 27,
    fontWeight: '800',
    textAlign: 'left',
    paddingBottom: 15,
  },
  inputClmn: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputC: {
    marginBottom: verticalScale(10),
    padding: moderateScale(9),
    borderRadius: moderateScale(19),
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
  },
  input2: {
    marginBottom: 10,
    padding: 9,
    borderRadius: 29,
    color: 'black',
    width: '100%',
    backgroundColor: 'white',
  },
  inputPass: {
    flex: 1,
    padding: 9,
    backgroundColor: 'white',
    borderRadius: 29,
    paddingRight: 40, // Make space for the eye icon
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginRight: 10,
  },
  checkmark: {
    color: 'blue',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4D0039',
    paddingVertical: 10,
    paddingHorizontal: 35,
    borderRadius: 19,
    marginLeft: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    paddingHorizontal: horizontalScale(10),
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    backgroundColor: '#FF69B4',
    borderRadius: 19,
    marginLeft: 20,
  },
  navButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    paddingVertical: 10,
    paddingHorizontal: 35,
    backgroundColor: '#FF69B4',
    borderRadius: 19,
    marginLeft: 20,
    opacity: 0.5, // Indicate disabled state
  },
  notification: {
    color: 'yellow',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 29,
    marginBottom: 10,
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    right: 15,
    height: '100%',
    justifyContent: 'center',
  },
});

export default RegisterScreen;