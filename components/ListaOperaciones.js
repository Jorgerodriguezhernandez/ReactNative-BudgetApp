import React, { useState } from "react";
import { FlatList, Text } from "react-native";

import { ListOperaciones,
        VistaLista,
        TituloOperacion,
        DescripcionOperacion,
        GastoOperacion,
        TiempoOperacion,
        ListaOculta,
        BotonOculto,

    } from "../constant/stylesApp";


import {SwipeListView} from "react-native-swipe-list-view";
import { Entypo } from "@expo/vector-icons";

const ListaOperaciones = ({ operaciones, setOperaciones,setBalance,balance }) => {

    const [swipedRow, setSwipedRow] = useState(null);

    const handleDelete = (operacion) => {
        const listaOperaciones = [...operaciones];
        const indexTransaccion = operaciones.findIndex((item) => item.key = operacion.key);
        listaOperaciones.splice(indexTransaccion,1);
        setOperaciones(listaOperaciones)
        const coste = operacion.precio.slice(2, operacion.key.length)
        const operador = operacion.precio.slice(0,1)
        console.log(operador)
        if(operador == "+"){
            setBalance(balance + parseFloat(coste))
        }else{
            setBalance(balance - parseFloat(coste))
        }

        
    }

  return (

        <ListOperaciones>
            <SwipeListView 
                        data={operaciones}
                        renderItem={(data) => {
                            return(
                                
                                    <VistaLista>
                                        <TituloOperacion>{data.item.titulo}</TituloOperacion>
                                        <DescripcionOperacion>{data.item.descripcion}</DescripcionOperacion>
                                        <GastoOperacion>{data.item.precio}€</GastoOperacion>
                                        <TiempoOperacion>{data.item.tiempo}</TiempoOperacion>
                                    </VistaLista>
                            );
                        }}
                        renderHiddenItem={(data) => {
                            return(
                                <ListaOculta>
                                    <BotonOculto
                                        onPress={() => handleDelete(
                                            data.item) }
                                    >
                                        <Entypo name="trash" size={25} color={'black'} />
                                    </BotonOculto>
                                    <BotonOculto>
                                        <Entypo name="edit" size={25} color={'black'} 
                                                onPress={() => {
                                                    handleEdit(data.item)
                                                }}
                                        />
                                    </BotonOculto>
                                </ListaOculta>
                            )
                            
                        }}
            leftOpenValue={80}
            previewRowKey={"1"}
            previewOpenValue={80}
            previewOpenDelay={3000}
            showsVerticalScrollIndicator={false}
            disableLeftSwipe={true}
            onRowOpen={( (rowKey) => {
                setSwipedRow(rowKey);
            })}
            onRowClose={() => {
                setSwipedRow(null);
            }}
        />
            
        </ListOperaciones>
  );
};

export default ListaOperaciones;
