import React,{useState} from 'react';

import Cabecera from './Cabecera'
import ListaOperaciones from './ListaOperaciones'
import GestionOperaciones from './GestionOperaciones'
import NuevoIngreso from './Modals/NuevoIngreso'
import NuevoGasto from './Modals/NuevoGasto'

const Home = () => {


    const initialOperations = [
        {
            titulo: ' Gasto en KFC',
            descripcion: ' Menu Combo 5€',
            precio: '- 50',
            tiempo: '15/02/22 19:45PM',
            key: String(Math.random())
        },
        {
            titulo: 'Ingreso en barnco',
            descripcion: ' Ingreso en el banco BBVA Tacoronte',
            precio: ' + 50',
            tiempo: '12/02/22 12:45PM',
            key: String(Math.random())
        }
    ];

    const [operaciones, setOperaciones] = useState(initialOperations);
    const [balance, setBalance] = useState(0)

    const [modalIngreso, setModalIngreso] = useState(false)
    const [modalGasto, setModalGasto] = useState(false)


    return(
        <>
            <Cabecera />
            <GestionOperaciones 
                setModalIngreso={setModalIngreso}
                balance={balance}
                setModalGasto={setModalGasto}
            />
            <ListaOperaciones 
                operaciones={operaciones}
                setOperaciones={setOperaciones}
                setBalance={setBalance}
                balance={balance}
            />
            <NuevoIngreso 
                modalIngreso={modalIngreso}
                setModalIngreso={setModalIngreso}
                operaciones={operaciones}
                setOperaciones={setOperaciones}
                balance={balance}
                setBalance={setBalance}
            />

            <NuevoGasto 
            modalGasto={modalGasto}
            setModalGasto={setModalGasto}
            operaciones={operaciones}
            setOperaciones={setOperaciones}
            balance={balance}
            setBalance={setBalance}
            />
        </>
        )
}

export default Home;