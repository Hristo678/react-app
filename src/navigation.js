import React from "react";
import Home from './pages/HomePage'
import ShareThoughtsPage from './pages/ShareThoughtsPage'
import { Route, Routes } from 'react-router-dom'
import LoginPage from "./pages/LoginPage/login";
import RegisterPage from "./pages/RegisterPage/register";
import ProfilePage from "./pages/ProfilePage/profile";
const Navigation = () => {

    return (
        <html>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/share/thoughts' element={<ShareThoughtsPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/profile' element={<ProfilePage />} />
            </Routes>
        </html>

 
    )

}

export default Navigation;