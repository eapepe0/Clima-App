import useClima from "../hooks/useClima"
import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"

export default function AppClima() {
    const { resultado, cargando, noResultado } = useClima() //* extraemos los estados del provider

    return (
        <>
            <main className="dos-columnas">
                <Formulario />

                {
                    cargando ? <Spinner /> :
                        resultado?.name ? <Resultado /> :
                            noResultado ? <p>{noResultado}</p> :
                                <></>
                }

            </main>

        </>
    )
}


//* cargando ? <Spinner /> : Si la variable cargando es verdadera, se renderiza el componente <Spinner />. Es común utilizar un componente de carga o un indicador visual cuando se está cargando información.

//* resultado?.name ? <Resultado /> :  Aquí se utiliza el operador opcional de encadenamiento (?.) para evitar errores en caso de que resultado sea nulo o indefinido.

//* noResultado ? <p> {noResultado}</p> : Si la variable noResultado es verdadera, se renderiza el elemento <p> con el texto del estado noResultado. Esto se utiliza para mostrar un mensaje cuando no se encuentra ningún resultado.

//* <></> : Si ninguna de las condiciones anteriores se cumple, se renderiza el elemento <> </>. Esto se utiliza como un caso por defecto en caso de que ninguna de las condiciones anteriores sea verdadera.

