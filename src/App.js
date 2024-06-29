//import React, {useState} from 'react'
import Layout from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Docs from './pages/Docs'
import History from './pages/History'
import Settings from './pages/Settings'
import Contacts from './pages/Contacts'
//import Login from './components/Login/login'

 /*function App() {
    const [token, setToken] = useState();

    if(!token) {
        return <Login setToken={setToken} />
      }
      */

    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' element={<Dashboard />} />
                    <Route path='/dashboard' element={<Dashboard />} />
                    <Route path='/history' element={<History />} />
                    <Route path='/Docs' element={<Docs />} />
                    <Route path='/Contacts' element={<Contacts />} />
                    <Route path='/settings' element={<Settings />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
