import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import './App.css'

function App() {
    return (
        <Box width='400px' sx={{width: {xl: '1480px'}}} m='auto'>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
            </Routes>
            <Footer />
        </Box>
    );
}

export default App;
