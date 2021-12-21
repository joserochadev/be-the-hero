import React from 'react'
import { BrowserRouter, Route, Routes } from  'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}








