// Siempre que se cree un componente se crea con Mayuscula al inicial
// Siempre que paso un prop se pone con esta palabra clave
//Si del props que viene solo quiero una valor pongo el valor de la variable con {} y si son mas de uno los separo por coma,
export default function Header(){



    return(
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes {''}
                <span className="text-indigo-600">
                    Veterinaria
                </span>
            </h1>
        </>
    )
}

