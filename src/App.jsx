import { Home } from './components/Home';
import { Navbar } from './components/Navbar/Navbar';
import { Sidebar } from './components/Sidebar/Sidebar';

function App() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Home />
        </>
    );
}

export default App;
