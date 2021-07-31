import React from 'react'
import Routes from './Routes'
import {ContactContextProvider} from './Context/contact'

export default function App() {
    return (
        <ContactContextProvider>
            <Routes />
        </ContactContextProvider>
    )
}
