import styled from 'styled-components';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';
const StatusBarHeight = Constants.statusBarHeight;

// colors
export const Colors = {
  primary: '#f5f5f5',
  secondary: '#E5E7EB',
  tertiary: '#071a47',
  darkLight: '#9CA3AF',
  brand: '#6D28D9',
  success: '#69ff84',
  warning: '#000',
  lightOrange: '#f5dbd0',
  orange: '#fc5e28',
};

const { primary, secondary, tertiary, darkLight, brand, success, warning, lightOrange, orange } = Colors;


export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 80}px;
`;

export const InnerContainer = styled.View`
  width: 100%;
  flex: 1;
  align-items: center;
`;


export const ScrollContainer = styled.View`
  flex-direction: row;
`;

export const WelcomeContainer = styled(InnerContainer)`
  padding: 25px;
  padding-top: 10px;
  justify-content: center;
`;

export const PageLogo = styled.Image`
  width: 45%;
  height: 20px;
`;

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin: auto;
  border-radius: 50px;
  border-width: 2px;
  border-color: ${secondary};
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const WelcomeImage = styled.Image`
  height: 50%;
  min-width: 100%;
`;

export const PageTitle = styled.Text`
  font-size: 38px;
  text-align: center;
  font-weight: 500;
  color: ${Colors.primary};
  padding: 40px;
  ${(props) =>
    props.welcome &&
    `
    color: ${Colors.tertiary};
    position: absolute;
    top: 2%;
    left: 0%;
    font-size: 42px;
    font-weight: 700;
  `}
`;

export const SubTitle = styled.Text`
  font-size: 23px;
  margin-bottom: 30px;
  letter-spacing: 1px;
  font-weight: 700;
  color: ${tertiary};

  ${(props) =>
    props.welcome &&
    `
    margin-bottom: 5px;
    font-weight: normal;
  `}
`;

export const StyledTextInput = styled.TextInput`
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 10px;
  border: 2px solid ${lightOrange};
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  color: ${primary};
`;

export const StyledInputLabel = styled.Text`
  color: ${lightOrange};
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
  padding: 10px 45px;
  background-color: ${primary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 10px;
  margin-horizontal: 30px;
  height: 70px;
`;

export const StyledButton = styled.TouchableOpacity`
  padding: 15px;
  background-color: ${tertiary};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;

  ${(props) =>
    props.logout == true &&
    `
    padding: 10px;
    background-color: ${orange};
    flex-direction: row;
    justify-content: flex-start;
    border-radius: 10px;
    border: 2px solid ${orange};
    width:30%;
  `}
`;

export const ButtonText = styled.Text`
  color: ${primary};
  font-size: 16px;
`;

export const MsgBox = styled.Text`
  text-align: center;
  font-size: 13px;
  color: ${props => props.type == "SUCCESS" ? success : tertiary};
`;

export const Line = styled.View`
  height: 2px;
  width: 100%;
  background-color: ${darkLight};
  margin-vertical: 50px;
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
  color: ${tertiary};
  font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const TextLinkContent = styled.Text`
  color: ${brand};
  font-size: 15px;
`;
