import React, { useEffect, useState } from 'react';
import { ImageBackground, View, ScrollView, SafeAreaView, Dimensions, Text, TouchableOpacity, Image, Linking  } from 'react-native';
import { SearchBar } from 'react-native-elements';
import {
  PageTitle,
  StyledFormArea,
  ScrollContainer,
  InnerContainer,
  WelcomeContainer,
  LinkText,
  LinkButton,
} from './../components/styles';
// api client
import axios from 'axios';
const Links = (Id) => {
  const [linksElem, setLinks] = useState([]);
  const [search, setSearch] = useState('');
  const linkId = Id.route.params["Id"];
  const url = 'http://noah-app.projects.pragmatic.al/api/links/index?id='+ linkId;
   useEffect(() =>{
     getLinks();
   }, []);
  //get all links from the selected category
  const getLinks = async () => {
    try {
      const response = await axios.get(url);
      setLinks(response.data.ListOfLinks);
    } catch(error) {
      alert('An error occurred, please try again', error);
    }
  };
    //user searches for a category in the search box
    const searchFilterFunction = (text) => {
      // getCategories();
      // searchedCategories = [];
      // // Check if searched text is not blank
      // if (text) {
      //   // Inserted text is not blank
      //   categoriesElem.forEach( function(cat){
      //       if(cat.Name.toString().toLowerCase().includes(text.toLowerCase())){
      //         searchedCategories.push(cat);        
      //       }
      //       console.log(searchedCategories, 'searcheddddd1');
      //   });
      //   setSearch(text);
      // } else {
      //   searchedCategories = categoriesElem;
      //   // Inserted text is blank
      //   setSearch(text);
      // }
      //  categoriesElem = searchedCategories;
      //  console.log(searchedCategories, 'searcheddddd2');
      //  console.log(categoriesElem, 'catttd1');
    }; 
  return (
    <ImageBackground source={require('../assets/img/links-page-01.png')} resizeMode='stretch' style={{ width : '100%', height: (Dimensions.get('screen').height )}}>
    <SafeAreaView>
      <ScrollView>
    <>  
      <InnerContainer>
        <WelcomeContainer links={true}>
          <PageTitle links={true}>Links</PageTitle>
            {(linksElem.length === 0) ? (
             <View>
               <StyledFormArea>
                <LinkButton links={true} nothingtoshow={true}>
                  <LinkText nothingtoshow={true}>There are no links</LinkText>
                </LinkButton>
               </StyledFormArea>
             </View>
              ) : (
    <>    
             {/* View for the Search Box*/}
             <View style = {{width: '90%', marginLeft: 20 }}>          
             {/* TODO: Search Bar function to filter only searched categories */}
              <SearchBar
                placeholder="Search Link..."
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
              <StyledFormArea>
                <ScrollContainer>
                <>
                {linksElem.map((n, i)=>(
                      <View key={i}>
                        <TouchableOpacity>
                        <LinkButton onPress={ ()=>{ Linking.openURL(n.Url)}}>
                          <LinkText>{n.Name}</LinkText>
                        </LinkButton>
                        </TouchableOpacity>
                      </View>
                 ))}
                </>
                </ScrollContainer>
              </StyledFormArea>
    </>
            )}
        </WelcomeContainer>
      </InnerContainer>
    </>
    </ScrollView>
    </SafeAreaView>
    </ImageBackground> 
  );
};

export default Links;
