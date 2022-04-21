import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import SignIn from './pages/SignIn/index'
import User from './pages/User/index'
import FooterComponent from './components/Footer/index'
import Header from './components/Header/index.jsx'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="user" element={<User />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    )
}

export default App
