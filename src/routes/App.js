import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from '../contenedores/Home'
import Contacto from '../contenedores/Contacto'
import Somos from '../contenedores/Somos'
import Layout from '../components/Layout'
import Productos from '../contenedores/Productos'

export default function App(){
    return (
        
            <BrowserRouter>
            <Layout>
            <Routes>
            <Route  path="/" element={<Home />}></Route>
            <Route  path="/somos" element={<Somos/>}></Route>
            <Route  path="/contacto" element={<Contacto />}></Route>
            <Route  path="/productos" element={<Productos />}></Route>
            </Routes>
            </Layout>
            </BrowserRouter>

    
    )
}