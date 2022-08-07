import { Routes, Route, Router } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Header/Navbar';
import { Register } from './components/User/Register';
import { Login } from './components/User/Login';

function App() {
    return (
        <div>
            <Navbar />
            <main>
                <Routes>
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
