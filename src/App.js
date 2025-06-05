import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Reports from './Components/Reports';
import Tickets from './Components/TicketSystem';
import HeaderCompo from './Components/Header';

function App() {
  return (
    <Router>
      <div>
        <HeaderCompo />
        
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
