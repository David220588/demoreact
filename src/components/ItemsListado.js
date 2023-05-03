import React from "react";

export default function ItemListado(props){
    const { name,price} = props ;
    return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
        </div>
    )
}