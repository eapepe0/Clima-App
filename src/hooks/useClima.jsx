import { useContext } from 'react'
import ClimaContext from '../context/ClimaProvider'

const useClima = () => {
    return useContext(ClimaContext)
}

export default useClima

//* lo usamos importando primero donde lo vayamos a usar :
//*
//* import useClima from 'ruta del hook'
//*
//* const { datos que vayamos a sacar del Provider } = useClima()