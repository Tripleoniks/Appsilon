import { BrowserRouter , Routes, Route,} from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './component/sidebar/sidebar';
import Header from './component/header/header';
import Dashboard from './component/dashboard/dashboard';
import './App.css';
import SidebarMobile from './component/sidebar/sidebarMobile';


const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  return ( 
    <BrowserRouter>
    <div className="App row">
    <div className="sidebar col-md-3">
      <Sidebar/>
    </div>
    <div className="right col-md-9">
    {mobileNavOpen && <SidebarMobile setMobileNavOpen={setMobileNavOpen}/>}
      <div className="App-header">
       <Header navOpen={setMobileNavOpen} />
      </div>
      <div className="body">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/policy" element={<Dashboard />} />
        <Route path="/report" element={<Dashboard />} />
      </Routes>
      </div>
    </div>
  </div>
  </BrowserRouter>
   );
}
 
export default App;