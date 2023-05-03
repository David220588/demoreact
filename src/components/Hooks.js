import { useState , useEffect } from "react";
import "./Cuenta"
import Cuenta from "./Cuenta";
export default function Hooks() {
const [cuenta , setCuenta] = useState(0)
const [cuenturra , setCuenturra] = useState(0)
    const handleClick = (e) => {
        const quien = e.target.getAttribute('name')
        if(quien == "1"){ 
        setCuenta(cuenta +1 )
        console.log("useState", cuenta)
    } else {
        setCuenturra(cuenturra+1)
        console.log("useState cuenturra: ", cuenturra)
    }
    };

    useEffect(()=>{
 
    }, [])
    return ( 
    <div>

        {cuenta == 0 ? (<h1>Arranquemos a contar</h1>)
        :(
        <Cuenta cuenta={cuenta} titulo={"desde el props"}></Cuenta>
        )}
        <button onClick={handleClick}name="1" >contar otra</button>
        <button onClick={handleClick}name="2">contar otra</button>
    </div>
    ) 
}  