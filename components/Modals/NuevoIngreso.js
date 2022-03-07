import {Modal,Text} from 'react-native';
import React,{useState} from 'react';

import {
        ContainerModal,
        ModalView,
        TituloModal,
        ModalIngreso,
        TextOptions,
        ModalViewIngreso,
        InputModal,
        ButtonViewModal

} from '../../constant/stylesApp'

import {AntDesign} from '@expo/vector-icons';

const NuevoIngreso = ({
                        modalIngreso,
                        setModalIngreso,
                        operaciones,
                        setOperaciones,
                        balance,
                        setBalance,

                        }) => {

    const [titulo, setTitulo] = useState('');
    const [descripcion,setDescripcion] = useState('')
    const [balanceIntroducido, setBalanceIntroducido] = useState(''); 

    const handleClose = () => {
        setModalIngreso(false);
    }

    const handleList = () => {
        const fecha = new Date();
        const fechaTransaccion = fecha.getDate() + '/' + fecha.getMonth() + '/' + fecha.getFullYear() + ' - ' + fecha.getHours() + ':' + fecha.getMinutes() + ':' + fecha.getSeconds()
        const listaTransaccionesNuevas = [{
            title: titulo,
            timestamp: fechaTransaccion,
            coste:'+'+ balanceIntroducido,
            description: descripcion,
            key:String(Math.random())
        },...operaciones]
        setOperaciones(listaTransaccionesNuevas);
        console.log(operaciones)
        setBalance(balance + parseFloat(balanceIntroducido));
        setBalanceIntroducido(0);
        handleClose();
    }

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalIngreso}
            onRequestClose={() => handleClose()}
        >
            <ContainerModal>
                <ModalView>
                    <TituloModal>Gestionar ingreso</TituloModal>
                    <ModalViewIngreso>
                        <TextOptions>Indique el nombre del gasto:</TextOptions>
                        <InputModal 
                            placeholder="Ingrese el nombre"
                            onChangeText={(text) => setTitulo(text)}
                            value={titulo}
                        />
                        <TextOptions>Indique una descripción del gasto:</TextOptions>
                        <InputModal 
                            placeholder="Ingrese la descripción"
                            onChangeText={(text) => setDescripcion(text)}
                            value={descripcion}
                        />
                        <TextOptions>Indique cuanto quiere ingresar:</TextOptions>
                        <InputModal 
                            placeholder="Ingrese el dinero"
                            numeric
                            keyboardType="number-pad"
                            maxLength={6}
                            onChangeText={(text) => setBalanceIntroducido(text)}
                            value={balanceIntroducido}
                        />
                            <ButtonViewModal>
                                <AntDesign name="check" size={35} color={'green'} onPress={() => handleList()}/>
                                    
                                <AntDesign name="close" size={35} color={'red'} onPress={() => handleClose()}/>
                            </ButtonViewModal>
                    </ModalViewIngreso>
                </ModalView>
            </ContainerModal>
        
        </Modal>
    )
}

export default NuevoIngreso;