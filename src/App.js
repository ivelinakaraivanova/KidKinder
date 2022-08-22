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
import { EditCourse } from './components/Course/EditCourse';
import { TeamList } from './components/Team/TeamList';
import { About } from './components/About/About';
import { MyCourses } from './components/Course/MyCourses';
import { MyBookings } from './components/Course/MyBookings';
import { MyBookingsProvider } from './context/MyBookingsContext';
import { ErrorBoundary } from './components/Common/ErrorBoundary';
import { PrivateRoute } from './components/Common/PrivateRoute';

function App() {

    return (
        <AuthProvider>
            <div>
                <Navbar />
                <main>
                    <ErrorBoundary>
                        <Routes>
                            <Route path='/' element={<Hero />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/logout' element={<Logout />} />
                            <Route path='/profile' element={
                                <PrivateRoute>
                                    <Profile />
                                </PrivateRoute>} />
                            <Route path='/profile/edit' element={
                                <PrivateRoute>
                                    <EditProfile />
                                </PrivateRoute>} />
                            <Route path='/courses' element={<CourseList />} />
                            <Route path='/courses/:courseId' element={<CourseDetails />} />
                            <Route path='/create' element={
                                <PrivateRoute>
                                    <CreateCourse />
                                </PrivateRoute>} />
                            <Route path='/courses/edit/:courseId' element={
                                <PrivateRoute>
                                    <EditCourse />
                                </PrivateRoute>} />
                            <Route path='/teachers' element={<TeamList />} />
                            <Route path='/courses/myCourses' element={
                                <PrivateRoute>
                                    <MyCourses />
                                </PrivateRoute>} />
                            <Route path='/courses/myBookings' element={
                                <PrivateRoute>
                                    <MyBookingsProvider>
                                        <MyBookings />
                                    </MyBookingsProvider>
                                </PrivateRoute>
                            } />
                        </Routes>
                    </ErrorBoundary>
                </main>
            </div>
        </AuthProvider>
    );
}

export default App;
