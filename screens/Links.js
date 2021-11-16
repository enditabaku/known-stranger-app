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
  const [loadingPage, setLoadingPage] = useState(true);
  const [loading, setLoading] = useState(false);
  const linkId = Id.route.params["Id"];
  const url = 'http://noah-app.projects.pragmatic.al/api/links/index?id='+ linkId;
  // let searchedLinks = linksElem;
  //  useEffect(() =>{
  //    getLinks();
  //  }, []);
  // //get all links from the selected category
  // const getLinks = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(url);
  //     setLinks(response.data.ListOfLinks);
  //     setTimeout(function(){
  //     setLoading(false);
  //     },700)
  //   } catch(error) {
  //     alert('An error occurred, please try again', error);
  //     setLoading(false)
  //   }
  //   setLoadingPage(false);
  // };
    //user searches for a category in the search box
    // const searchFilterFunction = (text) => {
    //   searchedLinks = [];
     
    //   // Check if searched text is not blank
    //   if (text) {
        
    //     // Inserted text is not blank
    //     linksElem.forEach( function(link){
    //         if(link.Name.toString().toLowerCase().includes(text.toLowerCase())){
    //           searchedLinks.push(link);        
    //         }
    //     });
    //     setSearch(text);
    //   } else {
    //     //when the search field is empty show all links
    //     getLinks();
    //     // Inserted text is blank
    //     setSearch(text);
    //   }
    //    setLinks(searchedLinks);
    // }; 
  return (
    <ImageBackground source={require('../assets/img/bg1.png')} resizeMode='stretch' style={{ width : '100%', height: (Dimensions.get('window').height )}}>
    <SafeAreaView keyboardShouldPersistTaps={'handled'}>
      <ScrollView keyboardShouldPersistTaps={'handled'}>
      <>  
      <InnerContainer>
        <WelcomeContainer links={true}>
          <PageTitle links={true}>Links</PageTitle>
          {loadingPage? (
          <>
          <View>
              <Image 
                source={require('../assets/img/dots.gif')}
                style={{ width : 200, height: 200, marginLeft: 80, marginTop:60}}
              />
          </View>
          </>
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
                {!loading ? (       
                    <>
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
                    ) : (
                      <View>
                        <Image 
                          source={require('../assets/img/dots.gif')}
                          style={{ width : 200, height: 200, marginLeft: 80, marginTop:60}}
                          />
                      </View>
                    )}
               </>
               )}
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
