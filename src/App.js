import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/index'
import Error from './pages/Error/index'
import SignIn from './pages/Login/index'
import User from './pages/Profile/index'
import FooterComponent from './components/Footer/index'
import Header from './components/Header/index.jsx'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/profile" element={<User />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    )
}

export default App
