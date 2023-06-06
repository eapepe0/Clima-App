/**
* Spinner : Componente que muestra un spinner cuando se realiza la  consulta a la API
*
*/


export default function Spinner() {
    return (
        <div className="loading">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    )
}