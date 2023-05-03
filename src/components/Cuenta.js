import React from "react";

export default function Cuenta(props) {
    let {cuenta , titulo} = props
    return (
        <div>
        {cuenta > 1 ? (
        <h1>Contamos {cuenta} obejitas.</h1>):
        (
        <h1>Contamos {cuenta} obejita.</h1>
        )}
        {cuenta && <h4>Que bueno estamos contando {titulo}</h4>}
        </div>
    )}
