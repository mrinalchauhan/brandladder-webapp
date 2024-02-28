import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthenticateRoutes, UnAuthenticateRoutes } from './navroutes'
import useEmailAuth from '../hooks/auth/useEmailAuth';

const Navigations = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const { currentUser } = useEmailAuth();

    const handleIsAuth = () => {
        try {
            if (currentUser?.uid !== '') {
                setIsAuthenticated(true)
            }
        } catch (error) {
            console.error('Error while check auth status: ', error)
        }
    }

    useEffect(() => {
        handleIsAuth();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Routes>
            {UnAuthenticateRoutes.map((data, index) => (
                <Route key={index} path={data.path} element={data.element} />
            ))}
            {AuthenticateRoutes.map((data, index) => (
                isAuthenticated ? (
                    <Route key={index} path={data.path} element={data.element} />
                ) : (
                    <Route key={index} path={data.path} element={<Navigate to="/" replace />} />
                )
            ))}
        </Routes>
    )
}

export default Navigations
