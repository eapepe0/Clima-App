/* eslint-disable react/prop-types */
import { createContext, useState } from 'react'

const ClimaContext = createContext()

const ClimaProvider = ({ children }) => {

    //* ###########  States #####################

    const [busqueda, setBusqueda] = useState({
        ciudad: "",
        pais: "",
    }) //* creamos el estado de busqueda 

    const [resultado, setResultado] = useState("") //* estado donde guardamos el resultado de la API

    const [cargando, setCargando] = useState(false) //* estado que se encarga de fijarse si estamos cargando una consulta a la API

    const [noResultado, setNoResultado] = useState(false) //* estadp que se encarga de saber si hubo un resultado satifactorio o no

    //* *******************************************


    //* ###########  Funciones ################


    //* funcion que se encarga de llenar el estado busqueda con el option de Pais / Ciudad 
    //* hace un objeto { ciudad : "Buenos Aires" , "Argentina" }
    const datosBusqueda = e => {
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value,
        })
    }


    //* funcion que se encarga de pedir los datos a la API
    const consultarClima = async datos => {
        setNoResultado(false) //* ponemos el state en falso
        //* tratamos
        try {
            const { ciudad, pais } = datos //* extraemos ciudad y pais del objeto {pais : "Argentina" , ciudad : "Buenos Aires"}
            const appId = import.meta.env.VITE_API_KEY //* api key del .env

            const url = `https://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}` //* creamos la url para el request
            const respuesta = await fetch(url); //* pedimos 
            const resultado = await respuesta.json() //* pasamos el resultado a json

            const { lat, lon } = resultado[0] //* extraemos latitud y longitud de nuestra ciudad
            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}&units=metric` //* creamos la url con los datos
            const respuestaClima = await fetch(urlClima); //* pedimos
            const resultadoClima = await respuestaClima.json() //* pasamos a json

            setCargando(true) //* ponemos el state de cargando en true
            setTimeout(() => {
                setResultado(resultadoClima) //* ponemos el resultado de la api en resultado
                setCargando(false) //* ponemos cargando en falso asi se desactiva el <Spinner/>
            }, 2000); //* esperamos 2 seg


        } catch (error) { //* si hay algun error en la api 
            console.log(error) //* mostramos el error en consola
            setNoResultado("No encontramos tu ciudad") //* ponemos en el mensaje de error no encontramos tu ciudad
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                busqueda, datosBusqueda, consultarClima, resultado, cargando, noResultado, setResultado
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export {
    ClimaProvider
}

export default ClimaContext