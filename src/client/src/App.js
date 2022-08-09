import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Header/Navbar';
import { Register } from './components/User/Register';
import { Login } from './components/User/Login';
import { AuthProvider } from './context/AuthContext';
import { Logout } from './components/User/Logout';
import { Hero } from './components/Hero/Hero';
import { Profile } from './components/User/Profile';
import { EditProfile } from './components/User/EditProfile';

function App() {
    return (
        <AuthProvider>
            <div>
                <Navbar />
                <main>
                    <Routes>
                        <Route path='/' element={<Hero />} />
                        <Route path='/register' element={<Register />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/logout' element={<Logout />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/profile/edit' element={<EditProfile />} />
                    </Routes>
                </main>
            </div>
        </AuthProvider>
    );
}

export default App;
