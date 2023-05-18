import React from 'react';
import './App.css';
import SessionPage from './page/session/list';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<SessionPage />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
