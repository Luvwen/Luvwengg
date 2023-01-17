import { Box } from '@chakra-ui/react';
import { Route, Routes } from 'react-router-dom';
import { Champion } from './components/Champions/Champion';
import { Champions } from './components/Champions/Champions';
import { Home } from './components/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';
import { SummonerInfo } from './components/SummonerInfo/SummonerInfo';

function App() {
    return (
        <Box bg="primary" height="100vh" overflowX="hidden" width="100vw">
            <Navbar />
            <Routes>
                <Route element={<Champions />} path="/champions" />
                <Route element={<Home />} path="/*" />
                <Route element={<Champion />} path="/champions/:id" />
                <Route
                    element={<SummonerInfo />}
                    path="/summoner/:summonerName"
                />
            </Routes>
            <Sidebar />
        </Box>
    );
}

export default App;
