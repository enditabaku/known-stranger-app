import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
// formik
import { Formik } from 'formik';
// styles
import {
  StyledContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  MsgBox,
  Colors,
} from './../components/styles';

import { View, ActivityIndicator, ImageBackground } from 'react-native';

//colors
const { darkLight,  primary, lightOrange } = Colors;

// icon
import { Octicons, Ionicons } from '@expo/vector-icons';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// api client
import axios from 'axios';


// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  // credentials context
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

  //login button is clicked: check if credentials are correct
  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    //noah url api for login 
    const url = 'http://noah-app.projects.pragmatic.al/api/user/login';
    axios
      .post(url, credentials) //post method to send entered credentials and check for them (if they are valid)
      .then((response) => {
        const result = response.data; //store data in result
        if((credentials['username'] !== undefined) && (credentials['password']!== undefined)){
          persistLogin(result); //if credentials are found go to persistLogin function ↓
        }
        setSubmitting(false);
      })
      .catch((error) => {
        setSubmitting(false);
        handleMessage('An error occurred. Check your credentials or network and try again'); //Message to user on error cases
      });
  };

  const handleMessage = (message, type = '') => {
    setMessage(message);
    setMessageType(type);
  };

  // Persisting login: After axios post request ↑
  const persistLogin = (credentials, message, status) => {
    AsyncStorage.setItem('noahCredentials', JSON.stringify(credentials))
      .then(() => {
        handleMessage(message, status);
        setStoredCredentials(credentials); //store credentials
      })
      .catch((error) => {
        console.log(error);
      });
  };


  return (
    <ImageBackground source={require('../assets/img/noah-bgorange.png')} resizeMode='cover' style={{width: '100%', height: '100%'}}>
      <KeyboardAvoidingWrapper>       
       <StyledContainer>
        <StatusBar style="dark" />
        <InnerContainer>        
          <PageTitle>NOAH Controls</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ username: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.username == '' || values.password == '') {
                handleMessage('Please fill in all fields');
                setSubmitting(false);
              } else {
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
              <StyledFormArea>
                <MyTextInput
                  label="Email Address"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('username')}
                  onBlur={handleBlur('username')}
                  value={values.username}
                  keyboardType="email-address"
                  icon="mail"
                />
                <MyTextInput
                  label="Password"
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  icon="lock"
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                )}
                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size="large" color={primary} />
                  </StyledButton>
                )}
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>       
    </KeyboardAvoidingWrapper>
    <PageLogo source={require('../assets/img/noah-logo.png')} />
</ImageBackground>
 );

                
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={20} color={lightOrange} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={20} color={lightOrange} />
        </RightIcon>
      )}
    </View>
  );
};

export default Login;
