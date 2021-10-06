import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, View, Text, ScrollView, SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {
  PageTitle,
  StyledFormArea,
  ScrollContainer,
  StyledButton,
  InnerContainer,
  WelcomeContainer,
  ButtonText,
  Line,
  CategoryButton,
  Colors,
} from './../components/styles';

//colors
const { darkLight,  primary, lightOrange } = Colors;

// api client
import axios from 'axios';

// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

let search = 'testtest'
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

  const updateSearch = () => {
    alert("search pastaj:");
    alert(window.pageYOffset);
  };

  return (
    <SafeAreaView >
      <ScrollView >
    <>
    <ImageBackground source={require('../assets/img/noah-background-cat.jpg')} resizeMode='cover' style={{ width : (Dimensions.get('window').width )}}>
      <InnerContainer>
        <WelcomeContainer>
          <PageTitle welcome={true}>Categories</PageTitle>
         
           <Text>{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}{"\n"}</Text>
           <View style = {{width: '95%', marginBottom: 10, flex: 'flex-end'}}>
           <SearchBar
              placeholder="Search Category..."
              onChangeText={updateSearch}
              searchIcon = {{size: 22}}
              value = {search}
              style = {{width: "60%"}}
              containerStyle={{backgroundColor: '#fff', borderWidth: 0, borderRadius: 10, borderColor: '#000', borderBottomColor: '#e8e8e8', borderTopColor: '#e8e8e8', padding: 0, width: '80%'}}
              inputStyle={{backgroundColor: '#fff'}}
              inputContainerStyle={{backgroundColor: '#fff', borderWidth: 0, borderRadius: 10, padding: 0,}}
          />
          </View>
          {(categoriesElem.length === 0) ? (
               <View>
                 <CategoryButton>
                    <Text>There are no categories</Text>
                 </CategoryButton>
              </View>
          ) : (
                <ScrollContainer>
                  <>
                  {categoriesElem.map((n, i)=>(
                        <View key={i}>
                          <CategoryButton>
                            <Text>{n.Name}</Text>
                          </CategoryButton>
                          <CategoryButton>
                            <Text>{n.Name}</Text>
                          </CategoryButton>
                          <CategoryButton>
                            <Text>{n.Name}</Text>
                          </CategoryButton>
                          <CategoryButton>
                            <Text>{n.Name}</Text>
                          </CategoryButton>
                          <CategoryButton>
                            <Text>{n.Name}</Text>
                          </CategoryButton>
                        </View>
                   ))}
                  </>
                </ScrollContainer>
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
    </ScrollView>
    </SafeAreaView>
  );



};

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 200,
    width: 350,
  },
})

export default Categories;
