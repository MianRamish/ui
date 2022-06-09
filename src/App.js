import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Routes, Route } from 'react-router-dom';
import  Dashboard  from './Components/Dashboard';
import Staff from './Components/staff';
import Student from './Components/Student';
import Fee from './Components/fee';
import Result from './Components/result';
import Expenses from './Components/expenses';
import Certificates from './Components/certificates';
import Setting from './Components/setting';
import Announcement from './Components/Announcement';
import Websetting from './Components/websetting';
import Registerteacher from './Components/registerteacher';
import Forms from './Components/forms';
import Showclasses from './Components/showclasses';




function App() {

  return (
    <div>
   
  <Routes>
  <Route  path='/' element={<Dashboard />} />
  <Route path='/student' element={<Student />} />
    <Route path='/staff' element={<Staff />} />
    <Route path='/fee' element={<Fee/>} />
    <Route path='/result' element={<Result/> } />
    <Route path='/expenses' element={<Expenses/> } />
    <Route path='/certificates' element={<Certificates/> } />
    <Route path='/setting' element={<Setting/> } />
    <Route path='/announcement' element={<Announcement/> } />
    <Route path='/websitesetting' element={<Websetting/>} />
    <Route path='/registerteacher' element={<Registerteacher/>} />
    <Route path='/registerforms' element={<Forms/>}/>
    <Route path='//showclasses' element={<Showclasses/>} />
  
    </Routes>

    </div>
  );
}

export default App;
