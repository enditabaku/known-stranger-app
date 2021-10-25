import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;
// colors
export const Colors = {
  primary: '#3B424B',
  mustard: '#D3A537',
  purple: '#9E7E99',
  babypink: '#D1BCD6',
  panna: '#F3EFE9',
  shadow: '#F3EFE990',
  lightprimary: '#3B424B80',
};

const {primary, mustard, purple, babypink, panna, shadow, lightprimary} = Colors;


export const StyledContainer = styled.View`
  flex: 1;
  padding: 15px 25px;
  padding-top: ${StatusBarHeight + 130}px;
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
  background-color: ${shadow};
  padding: 60px 20px 60px 20px;
  border-radius: 15px;
  border: 1px dashed ${lightprimary};
  ${(props) =>
    props.categories &&
    `
    align-items: flex-start;
  `};
  ${(props) =>
    props.links &&
    `
    align-items: flex-start;
    margin-bottom: 60px;
  `};
`;

export const ScrollContainer = styled.View`
    width: 100%;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 70%;
  height: 90px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;
//Page title: Categories and Links options
export const PageTitle = styled.Text`
  font-size: 38px;
  text-align: center;
  font-weight: 500;
  color: ${Colors.primary};
  padding: 0px 20px;
  ${(props) =>
    props.categories &&
    `
    padding: 40px 0px 7px 0px;
    color: ${Colors.mustard};
    font-size: 42px;
    font-weight: 700;
  `};
  ${(props) =>
    props.links &&
    `
    color: ${Colors.primary};
    padding: 35px 0px 70px 50px;
    font-size: 42px;
    font-weight: 700;
  `},
`;

export const SubTitle = styled.Text`
  font-size: 23px;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 700;
  color: ${mustard};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledTextInput = styled.TextInput`
  padding: 10px 55px 10px 20px;
  border-radius: 10px;
  border: 2px solid ${purple};
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${primary};
`;

export const StyledInputLabel = styled.Text`
  color: ${purple};
  font-size: 13px;
  text-align: left;
`;

export const LeftIcon = styled.View`
  left: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  top: 38px;
  position: absolute;
  z-index: 1;
`;


export const CategoryButton = styled.TouchableOpacity`
  padding: 6px;
  width: 90%;
  background-color: #eaeaeaa1;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${purple};
  margin-vertical: 10px;
  margin-horizontal: 5%;
  height: 60px;
  ${(props) =>
    props.nothingtoshow == true &&
    `
    padding: 20px 80px;
    margin-horizontal: 7%;
    margin-vertical: 20px;
    width: 100%;
  `}
`;

export const CategoryText = styled.Text`
  color: ${mustard};
  font-size: 15px;
  font-weight: 500;
  ${(props) =>
    props.nothingtoshow == true &&
    `
    color: ${mustard};
    opacity: 0.7;
  `}
`;

export const LinkButton = styled.TouchableOpacity`
  padding: 6px;
  width:100%;
  background-color: #eaeaeaa1;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid ${purple};
  margin-vertical: 10px;
  margin-horizontal: 5%;
  height: 60px;
  ${(props) =>
    props.nothingtoshow == true &&
    `
    padding: 20px 100px;
    margin-horizontal: 8%;
    margin-vertical: 20px;
    width: 100%;
  `}

`;


export const LinkText = styled.Text`
  color: ${mustard};
  font-size: 15px;
  font-weight: 500;
  ${(props) =>
    props.nothingtoshow == true &&
    `
    color: ${mustard};
    opacity: 0.7;
  `}
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${primary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
  ${(props) =>
    props.logout == true &&
    `
    padding: 8px;
    background-color: ${purple};
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 10px;
    border: 1px solid ${purple};
    width:30%;
  `}
`;

export const ButtonText = styled.Text`
  color: ${panna};
  font-size: 16px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${props => props.type == "SUCCESS" ? purple : primary};
`;

export const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: #bababa50;
  margin-vertical: 30px;
  margin-horizontal: 20px;
`;

export const StyledFormArea = styled.View`
  width: 90%;
`;

export const ExtraView = styled.View`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;

export const ExtraText = styled.Text`
  justify-content: center;
  align-content: center;
  color: ${mustard};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${babypink};
  font-size: 15px;
`;
