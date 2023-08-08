import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ShowList from './component/ShowList';
import ShowDetail from './component/ShowDetail';
import BookingForm from './component/BookingForm';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">TV Show</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<ShowList />} />
          <Route path="/show/:id" element={<ShowDetail />} />
          <Route path="/booking/:id" element={<BookingForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

