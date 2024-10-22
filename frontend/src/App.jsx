import { Routes, Route } from 'react-router-dom';

import './App.css';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
