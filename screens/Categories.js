import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, View, Text, ScrollView } from 'react-native';
import {
  PageTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
  CategoryButton,
} from './../components/styles';
// api client
import axios from 'axios';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const Categories = () => {
  const [categoriesElem, setCategories] = useState([]);
  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  //getting the token of the logged in user
  const token = storedCredentials["token"];

  //Api URL for getting current user categories
  const url = 'http://noah-app.projects.pragmatic.al/api/links/categoryIndex?token='+token;

 useEffect(() =>{
    getCategories();
  }, []);
  const getCategories = async () => {
    try {
      const response = await axios.get(url);
      setCategories(response.data.ListOfCategories);
    } catch(error) {
      alert('An error occurred, please try again', error);
    }
  };
  const clearLogin = () => {
    AsyncStorage.removeItem('noahCredentials')
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
    <ImageBackground source={require('../assets/img/noah-background-cat.jpg')} resizeMode='cover' style={{width: '100%', height: '100%'}}>

      <InnerContainer>
        <WelcomeContainer>
          <PageTitle welcome={true}>Categories</PageTitle>

          {(categoriesElem.length === 0) ? (
               <View>
                 <CategoryButton>
                    <Text>There are no categories</Text>
                 </CategoryButton>
              </View>
          ) : (
                <View>
                  <ScrollView>
                  <>
                  {categoriesElem.map((n, i)=>(
                        <View key={i}>
                          <CategoryButton>
                            <Text>{n.Name}</Text>
                          </CategoryButton>
                          {/* <Text>{n.Name}</Text>
                          <Text>{n.HaveLink}</Text>
                          <Text>{n.Id}</Text> */}
                        </View>
                   ))}
                  </>
                  </ScrollView>
                </View>
          )}

          <StyledFormArea>
            <Line />
            <StyledButton onPress={clearLogin} logout={true}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
</ImageBackground> 
    </>
  );



};

export default Categories;
