import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native';
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
  CategoryText,
  Colors
} from './../components/styles';
import { useNavigation } from '@react-navigation/native';

// api client
import axios from 'axios';

//colors
const {primary } = Colors;


const Links = (navigation ,id) => {
  // const [linksElem, setLinks] = useState([]);
  //  console.log('the idddd', id);
  //  const url = 'http://noah-app.projects.pragmatic.al/api/links/index?id='+id;
  //  useEffect(() =>{
  //   // getLinks();
  //  }, []);
  //get all links from the selected category
  // const getLinks = async () => {
  //   try {
  //     const response = await axios.get(url);
  //     setLinks(response.data.ListOfLinks);
  //     console.log('linksss', linksElem);
  //     console.log('data responsee', response.data);
  //     console.log('data linksss responsee', response.data.ListOfLinks);
  //   } catch(error) {
  //     alert('An error occurred, please try again', error);
  //   }
  // };

  return (
    <SafeAreaView >
      <ScrollView >
    <>
    <ImageBackground source={require('../assets/img/links-page-01.png')} resizeMode='cover' style={{ width : (Dimensions.get('window').width ), height : '100%'}}>
      <InnerContainer>
        <WelcomeContainer>
          <PageTitle links={true}>Links</PageTitle>
          <StyledFormArea>
            <Line />
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
</ImageBackground> 
    </>
    </ScrollView>
    </SafeAreaView>
  );



};

export default Links;
