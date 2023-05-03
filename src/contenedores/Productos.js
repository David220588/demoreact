import { useEffect , useState} from "react";
import axios from "axios";
import ItemListado from "../components/ItemsListado";
export default function Productos(){
    const [merca, setMerca] = useState ([]);
    let traemeProductos = async () => {
        const res = await axios.get("https://fakerapi.it/api/v1/products?_quantity=20&_taxes=12&_categories_type=uuid")
    
   
setMerca(res.data.data)   
console.log(res.data.data, "traeme productos") 
};
    useEffect(() => {
        traemeProductos()
    }, [])
    return (<div>

        <h1>Somos los productos</h1>
        {merca.map((item) => ( 
            <ItemListado{...item}></ItemListado>
        ))}

    </div>
    )
};