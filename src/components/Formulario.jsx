import { useState } from "react"
import useClima from "../hooks/useClima"

export default function Formulario() {
    const { busqueda, datosBusqueda, consultarClima, setResultado } = useClima() //* extraemos del provider
    const { ciudad, pais } = busqueda //* desestructuramos ciudad y pais de busqueda
    const [alerta, setAlerta] = useState('') //* creamos un estado para guardar si los campos estan vacios

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(busqueda).includes('')) { //* verificamos que los valores del objeto incluya una string vacia
            setAlerta('Todos los campos son obligatorios.') //* ponemos el estado alerta con un mensaje de error
            return //*  salimos
        }
        setAlerta('')//* si todos los valores del objeto estan completos
        consultarClima(busqueda) //* mandamos ese objeto a la funcion consultarClima
        setResultado({}) //* limpiamos en pantalla si hay un resultado previo

    }
    return (
        <div className="contenedor">
            {alerta && <p>{alerta}</p>} {/* si existe alerta (mensaje de error) lo mostramos en pantalla */}
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input type="text" name="ciudad" id="ciudad" value={ciudad} onChange={datosBusqueda} />
                </div>
                <div className="campo">
                    <label htmlFor="pais">Pais</label>
                    <select name="pais" id="pais" value={pais} onChange={datosBusqueda}>
                        <option value="">-- Seleccione un pais --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">Mexico</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                </div>
                <input type="submit" value="Consultar Clima" />

            </form>
        </div>
    )
}