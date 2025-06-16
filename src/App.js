import logo from './logo.svg';
import './App.css';
import Page_Main from './Pages/Page_Main';
import Page_Resume from './Pages/Page_Resume';
import Page_Projects from './Pages/Page_Projects';
import Page_Capstone from './Pages/Page_Capstone';
import Page_Animations from './Pages/Page_Animations';
import Page_2DArt from './Pages/Page_2DArt';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page_Main />} />
        <Route path="/2DArt" element={<Page_2DArt />} />
        <Route path="/Animations" element={<Page_Animations />} />
        <Route path="/Capstone" element={<Page_Capstone />} />
        <Route path="/Resume" element={<Page_Resume />} />
        <Route path="/Projects" element={<Page_Projects />} />
      </Routes>
    </div>
  );
}

export default App;
