import useClima from "../hooks/useClima";

/**
* Componente que muestra el resultado de nuestra busqueda en la Api.
*
* @param {object} resultado objeto con el resultado de nuestra consulta a la API.
* @return {Component}  componente que muestra el clima.
*/


export default function Resultado() {
    const { resultado } = useClima(); //* extraemos el resultado del provider
    const { name, main } = resultado //* desestructuramos el name y el main de resultado

    return (
        <div className="contenedor clima">
            <h2 className="heading-resultado"> El Clima de {name} es : </h2>
            <p>{parseInt(main.temp)}<span>&#x2103;</span></p>
            <div className="temp-min-max">
                <p> Min : {parseInt(main.temp_min)} <span>&#x2103;</span></p>
                <p> Max : {parseInt(main.temp_max)} <span>&#x2103;</span></p>
            </div>
        </div>
    );
}
