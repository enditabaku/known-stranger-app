import React, { useContext, useEffect, useState } from 'react';
import { ImageBackground, View, Text, ScrollView, SafeAreaView, Dimensions, TouchableOpacity, Image } from 'react-native';
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
  Colors,
  NotesDate
} from '../components/styles';
import { useNavigation } from '@react-navigation/native';
// icon
import { MaterialIcons   } from '@expo/vector-icons';
//colors
const {primary } = Colors;
// Async storage
import AsyncStorage from '@react-native-async-storage/async-storage';
// credentials context
import { CredentialsContext } from './../components/CredentialsContext';

const Notes = (nav) => {
  const navigation = useNavigation();
  
  let [NotesElem, setNotes] = useState([]);
  const [loadingPage, setLoadingPage] = useState(true);
  const [loading, setLoading] = useState(true);
  const { storedCredentials, setStoredCredentials } = useContext(CredentialsContext);

  useEffect(() =>{
    getNotes();
  }, []);
  //get all Notes for the user
  const getNotes =  () => { 
      let allNotes= [
        {"Id": 1,
        "Name" : "University Stranger",
        "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris ac purus interdum viverra nec ut mi. Pellentesque feugiat convallis ante, a gravida elit rhoncus eu. Nam laoreet quis ante sed ultricies. Aliquam velit ante, bibendum sed quam a, placerat efficitur erat. Aenean interdum diam et neque pellentesque, eget scelerisque erat malesuada.",
        "Date" : "11 October 2021"
      },

        {"Id" : 2,
        "Name" : "The one that helped me at the airport",
        "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris ac purus interdum viverra nec ut mi. Pellentesque feugiat convallis ante, a gravida elit rhoncus eu. Nam laoreet quis ante sed ultricies. Aliquam velit ante, bibendum sed quam a, placerat efficitur erat. Aenean interdum diam et neque pellentesque, eget scelerisque erat malesuada.",
        "Date" : "11 October 2021"
      },

        {"Id" : 3,
        "Name" : "The girl at the supermarket",
        "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris ac purus interdum viverra nec ut mi. Pellentesque feugiat convallis ante, a gravida elit rhoncus eu. Nam laoreet quis ante sed ultricies. Aliquam velit ante, bibendum sed quam a, placerat efficitur erat. Aenean interdum diam et neque pellentesque, eget scelerisque erat malesuada.",
        "Date" : "25 September 2021"
      },

        {"Id" : 4,
        "Name" : "Old lady at the bus",
        "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris ac purus interdum viverra nec ut mi. Pellentesque feugiat convallis ante, a gravida elit rhoncus eu. Nam laoreet quis ante sed ultricies. Aliquam velit ante, bibendum sed quam a, placerat efficitur erat. Aenean interdum diam et neque pellentesque, eget scelerisque erat malesuada.",
        "Date" : "1 June 2021"
      },

        {"Id" : 5,
        "Name" : "Man at the online seminar",
        "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris ac purus interdum viverra nec ut mi. Pellentesque feugiat convallis ante, a gravida elit rhoncus eu. Nam laoreet quis ante sed ultricies. Aliquam velit ante, bibendum sed quam a, placerat efficitur erat. Aenean interdum diam et neque pellentesque, eget scelerisque erat malesuada.",
        "Date" : "19 March 2021"
      },

        {"Id" : 6,
        "Name" : "Boy at gym",
        "Description" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis mauris ac purus interdum viverra nec ut mi. Pellentesque feugiat convallis ante, a gravida elit rhoncus eu. Nam laoreet quis ante sed ultricies. Aliquam velit ante, bibendum sed quam a, placerat efficitur erat. Aenean interdum diam et neque pellentesque, eget scelerisque erat malesuada.",
        "Date" : "12 February 2021"
      },
      ];
      setNotes(allNotes);
      setTimeout(function(){
             setLoadingPage(false);
      },700)
  };

  //user clicks log out button
  const clearLogin = () => {
    AsyncStorage.removeItem('KSCredentials') //remove current credentials
      .then(() => {
        setStoredCredentials("");
      })
      .catch((error) => console.log(error));
  };
  return (  
 <ImageBackground source={require('../assets/img/bg2.png')} resizeMode='stretch' style={{ width : '100%', height: (Dimensions.get('window').height )}}>   
   <SafeAreaView keyboardShouldPersistTaps={'handled'}>
    <ScrollView keyboardShouldPersistTaps={'handled'}> 
      <InnerContainer>
        <WelcomeContainer Notes={true}>
          <PageTitle Notes={true}>Notes</PageTitle>        
           <Text>{"\n"}</Text>
          {loadingPage? (
          <>
          <View>
             <Image 
                source={require('../assets/img/loaderpurple.gif')}
                style={{ width : 200, height: 200, marginLeft: 60, marginTop:60, opacity:0.6}}
              />
          </View>
          </>
          ): (
                <>
                  <ScrollContainer>
                    <>
                    {NotesElem.map((n, i)=>(
                       <View key={i}>
                          <TouchableOpacity>
                            <CategoryButton onPress={() => { navigation.navigate( 'Links', {Id:n.Id}) }}>
                               <CategoryText>{n.Name}</CategoryText>
                               <Text numberOfLines={2}>
                                {n.Description}
                               </Text>
                               <NotesDate>At: {n.Date}</NotesDate>
                            </CategoryButton>
                          </TouchableOpacity>
                       </View>
                     ))}
                     </>
                    </ScrollContainer>

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
export default Notes;
