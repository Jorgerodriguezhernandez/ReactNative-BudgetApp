
import styled from "styled-components";
import {
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  TextInput,
  Image,
  Button,
} from "react-native";
import Constants from "expo-constants";

export const MainContainer = styled.SafeAreaView`
    padding-top: ${Constants.statusBarHeight}px;
    padding: 20px;
    padding-bottom: 0px;
    flex: 1;
`

export const TitleView = styled.View`
    background-color: #0023AB;
    align-items: center;
    padding-top: 35px;
    padding-bottom: 35px;
`
export const TitleText = styled.Text`
    color: white;
    font-size: 30px;
    font-weight: bold;
`

export const CardOperations = styled.View`
    background-color: #0023AB;
    align-items: center;
    padding-top: 35px;
    padding-bottom: 35px;
`

export const FlatView = styled.View`
background-color: grey;
min-height: 85px;
width: 100%;
padding: 15px;
margin-bottom: 15px;
border-radius: 10px;
align-items: stretch;
`

export const OperationsView = styled.View`
    background-color: #AAAAAA;
    padding: 10px;
    margin-bottom: 15px;
    align-items: center;
`


export const OperationsButtons = styled.View`
    background-color: #8B8B8B;
    flex-direction: row;
    padding: 20px;
    border-radius: 10px;
    margin-top:10px;
`

export const TitleOperationsView = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;
`

export const ButtonsOperationsView = styled.TouchableHighlight`
    background-color: white;
    border-radius: 35px;
    color: black;
    padding: 5px;
    margin-left: 10px;
`

export const ListOperaciones = styled.View`
margin-top: 10px;
margin-left: 15px;
margin-right: 15px;
height: 45%;
background-color: grey;
border-radius: 10px;
flex-direction: row;
justify-content: center;
align-items: center;
opacity: 0.7;
`

export const VistaLista = styled.View`
  background-color: #B0ADAD;
  min-height: 85px;
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 10px;
  align-items: stretch;
`;

export const TituloOperacion = styled.Text`
font-size: 25px;
font-weight: bold;
color: black;
align-items: center;
`
export const DescripcionOperacion = styled.Text`
font-size: 15px;
color: black;
align-items: center;
`

export const GastoOperacion = styled.Text`
font-size: 20px;
font-weight: bold;
color: black;
align-items: baseline;
margin-left: 90%;
margin-bottom: 10px;
`
export const TiempoOperacion = styled.Text`
font-size: 10px;
color: black;
font-style: italic;
align-items: baseline;
margin-left: 92%;
`

export const ListaOculta = styled.View`
background-color: grey;
min-height: 85px;
width: 100%;
padding: 15px;
justify-content: center;
margin-bottom: 15px;
border-radius: 10px;
align-items: stretch;
`

export const BotonOculto = styled.TouchableOpacity`
        align-items: center;
        width: 50px;
`

export const ContainerModal = styled.View` 
 padding: 25px;
justify-content: center;
align-items: center;
flex: 1;
`
export const ModalView = styled.View`
  background-color: #DCDCDC;
  border-radius: 20px;
  padding: 35px;
`;

export const TituloModal = styled.Text`
font-size: 25px;
font-weight: bold;
color:white;
margin-left: 5%;
`
export const ModalIngreso = styled.View`
  background-color:grey;
  margin-top: 10px;
  padding: 40px;
  border-radius: 5px;
`

export const InputModal = styled.TextInput`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-top: 15px;
`

export const TextOptions = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: black;
  align-items: center;
  padding-top: 10px;
`

export const ModalViewIngreso = styled.View`
  background-color:#A7A6A6;
  margin-top: 10px;
  padding: 40px;
  border-radius: 5px;
`

const Alineacionboton = styled. View`
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: 15px;
`

export const ButtonViewModal = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;
