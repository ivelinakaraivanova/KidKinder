import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Header/Navbar';
import { Register } from './components/User/Register';
import { Login } from './components/User/Login';
import { AuthProvider } from './context/AuthContext';
import { Logout } from './components/User/Logout';
import { Hero } from './components/Hero/Hero';
import { Profile } from './components/User/Profile';
import { EditProfile } from './components/User/EditProfile';
import { CourseList } from './components/Course/CourseList';
import { CourseDetails } from './components/Course/CourseDetails';
import { CreateCourse } from './components/Course/CreateCourse';
import { CourseProvider } from './context/CourseContext';
import { EditCourse } from './components/Course/EditCourse';
import { TeamList } from './components/Team/TeamList';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

function App() {
    return (
        <AuthProvider>
            <div>
                <Navbar />
                <CourseProvider>
                    <main>
                        <Routes>
                            <Route path='/' element={<Hero />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/profile' element={<Profile />} />
                            <Route path='/profile/edit' element={<EditProfile />} />
                            <Route path='/courses' element={<CourseList />} />
                            <Route path='/courses/:courseId' element={<CourseDetails />} />
                            <Route path='/create' element={<CreateCourse />} />
                            <Route path='/courses/edit/:courseId' element={<EditCourse />} />
                            <Route path='/teachers' element={<TeamList />} />
                            <Route path='/contact' element={<Contact />} />
                        </Routes>
                    </main>
                </CourseProvider>
            </div>
        </AuthProvider>
    );
}

export default App;
