import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, View, Text, ScrollView, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
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
// icon
import { MaterialIcons   } from '@expo/vector-icons';
//colors
const {primary } = Colors;
// api client
import axios from 'axios';
// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// credentials context
import { CredentialsContext } from './../components/CredentialsContext';
const Categories = (nav) => {
  const navigation = useNavigation();
  let [categoriesElem, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [loadingPage, setLoadingPage] = useState(true);
  const [loading, setLoading] = useState(true);
  let searchedCategories = categoriesElem;
  // credentials context
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);
  //getting the token of the logged in user
  const token = storedCredentials["token"];
  //Api URL for getting current user categories
  const url = 'http://noah-app.projects.pragmatic.al/api/links/categoryIndex?token='+token;
  useEffect(() =>{
    getCategories();
  }, []);
  //get all categories for the logged in user
  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setCategories(response.data.ListOfCategories);
      setTimeout(function(){
      setLoading(false);
      },700)
    } catch(error) {
      alert('An error occurred, please try again', error);
      setLoading(false);
    }
    setLoadingPage(false);
  };
  //user searches for a category in the search box
  const searchFilterFunction = (text) => { 
    searchedCategories = [];
    // Check if searched text is not blank
     if (text) {
      // Inserted text is not blank
      categoriesElem.forEach( function(cat){
          if(cat.Name.toString().toLowerCase().includes(text.toLowerCase())){
            searchedCategories.push(cat);        
          }
      });
      setSearch(text);
    } else {
      //when the search field is empty show all categories
      getCategories();
      // Inserted text is blank
      setSearch(text);
    }
    setCategories(searchedCategories);
  };
  //user clicks log out button
  const clearLogin = () => {
    AsyncStorage.removeItem('noahCredentials') //remove current credentials
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };
  return (  
 <ImageBackground source={require('../assets/img/noah-background-cat.jpg')} resizeMode='stretch' style={{ width : '100%', height: (Dimensions.get('window').height )}}>   
   <SafeAreaView>
    <ScrollView > 
      <InnerContainer>
        <WelcomeContainer categories={true}>
          <PageTitle categories={true}>Categories</PageTitle>        
           <Text>{"\n"}</Text>
          {loadingPage? (
          <>
          <View>
             <Image 
                source={require('../assets/img/dots.gif')}
                style={{ width : 200, height: 200, marginLeft: 80, marginTop:60}}
              />
          </View>
          </>
          ): (
          <>
            <View style = {{width: '90%', marginLeft: 20 }}>          
                    {/* TODO: Search Bar function to filter only searched categories */}
                    <SearchBar
                      placeholder="Search Category..."
                      onChangeText={(text) => searchFilterFunction(text)}
                      onClear={(text) => searchFilterFunction('')}
                      searchIcon = {{size: 22}}
                      value = {search}
                      style = {{width: '100%'}}
                      containerStyle={{backgroundColor: '#bababa50', borderWidth: 1, borderRadius: 10, borderColor: '#bababa50', borderBottomColor: '#bababa50', borderTopColor: '#bababa50', padding: 0, width: '100%'}}
                      inputStyle={{backgroundColor: '#fff'}}
                      inputContainerStyle={{backgroundColor: '#fff', borderWidth: 0, borderRadius: 10, padding: 1,}}
                    />
                    <Text>{"\n"}</Text>
             </View>           
           {/* View for the Search Box - needs a margin bottom 10 + flex: 'flex-end'*/}
           {(categoriesElem.length === 0) ? (
              <>
                <View>
                   <CategoryButton nothingtoshow={true}>
                       <CategoryText nothingtoshow={true}>There are no categories</CategoryText>
                   </CategoryButton>
                </View>
              </>
            ) : (
              <>
            {!loading ? (       
                <>
                  <ScrollContainer>
                    <>
                    {categoriesElem.map((n, i)=>(
                       <View key={i}>
                          <TouchableOpacity>
                            <CategoryButton onPress={() => { navigation.navigate( 'Links', {Id:n.Id}) }}>
                               <CategoryText>{n.Name}</CategoryText>
                            </CategoryButton>
                          </TouchableOpacity>
                       </View>
                     ))}
                     </>
                    </ScrollContainer>
                </>
                  ) :(
                <View>
                   <Image 
                     source={require('../assets/img/dots.gif')}
                     style={{ width : 200, height: 200, marginLeft: 80, marginTop:60}}
                     />
                </View>
                  )}
               </>
           )}           
          <StyledFormArea>
            <Line />
            <StyledButton onPress={clearLogin} logout={true}>
              <ButtonText>Logout  </ButtonText>
              <MaterialIcons name="logout" size={18} color={primary} />
            </StyledButton>
          </StyledFormArea>
</>
)}
        </WelcomeContainer>
      </InnerContainer>
      </ScrollView>
    </SafeAreaView>
    </ImageBackground> 
  );
};
export default Categories;
