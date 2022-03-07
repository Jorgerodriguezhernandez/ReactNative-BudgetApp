import React from 'react';
import {Text} from 'react-native'
import {SwipeListView} from "react-native-swipe-list-view";

import {
    OperationsView,
    TitleOperationsView,
    ButtonsOperationsView,
    OperationsButtons,

} from '../constant/stylesApp'

const GestionOperaciones = ({setModalIngreso,balance, setModalGasto}) => {
    return(
        <>
        <OperationsView>
            <TitleOperationsView>Balance de la cuenta: {balance}</TitleOperationsView>
            <TitleOperationsView>Indique que gestión desea hacer: </TitleOperationsView>
            <OperationsButtons>
            <ButtonsOperationsView onPress={() => setModalIngreso(true)}>
                <Text>Ingresar balance</Text>
            </ButtonsOperationsView>
            <ButtonsOperationsView onPress={() => setModalGasto(true)}>
                <Text>Ingresar un gasto</Text>
            </ButtonsOperationsView>
            </OperationsButtons>
        </OperationsView>
        </>
    )
}

export default GestionOperaciones;