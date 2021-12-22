import React from 'react'
import { BrowserRouter, Route, Routes } from  'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewIncident from './pages/NewIncident'

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' exact element={<Login/>} />
                <Route path='/register' element={<Register/>} />

                <Route path='/profile' element={<Profile/>} />
                <Route path='/incident/new' element={<NewIncident/>} />
            </Routes>
        </BrowserRouter>
    )
}








