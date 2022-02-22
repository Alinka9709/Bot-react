import React from 'react'
import {Route, Routes} from "react-router-dom";
import Layout from './Layout'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout />} />
            <Route path='chat' element={<Layout />} >
                <Route path=':chatId' element={<Layout />} />
            </Route>
        </Routes>
    )
}

export default Routers
