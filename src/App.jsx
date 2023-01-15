import { Route, Routes } from 'react-router-dom';
import { Champions } from './components/Champions/Champions';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route element={<Champions />} path="/champions" />
                <Route element={<Home />} path="/*" />
            </Routes>
            <Sidebar />
        </>
    );
}

export default App;
