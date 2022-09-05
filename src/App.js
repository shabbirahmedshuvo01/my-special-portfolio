import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddData from './Components/AddData';
import Blogs from './Components/Blogs/Blogs';
import ContactInfo from './Components/Contact/ContactInfo';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import MyProjects from './Components/MyProjects/MyProjects';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<ContactInfo></ContactInfo>}></Route>
        <Route path='/projects' element={<MyProjects></MyProjects>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='porject/:detailId' element={<Explore></Explore>}></Route>
        <Route path='/addData' element={<AddData />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
