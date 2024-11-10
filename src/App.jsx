import {Routes, Route, useLocation} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Documents from './pages/Documents';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import Donate from './pages/Donate';
import MediaCentre from './pages/Media';
import EventDetails from './components/EventDetails';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import OurWork from './pages/OurWork';
import GetInvolved from './pages/GetInvolved';

function App() {

  const location = useLocation();

  const validRoutes = ['gallery', 'resource', 'contact', 'about-us', 'donate', 'media', 'event/:id', 'qr-code', 'ourwork', 'get-involved'];
  const isRouteValid = validRoutes.some(route => {
    if(location.pathname === '/'){
      return true;
    }
    else{
      const regex = new RegExp(route.replace(/:\w+/g, '([^/]+)'));
      return regex.test(location.pathname);
    }
  });

  return (
    <>
    {
      isRouteValid &&
      <Navbar/>
    }
    
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/gallery' element={<Gallery/>}></Route>
      <Route exact path='/resource' element={<Documents/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/media" element={<MediaCentre />} />
      <Route path="/event/:id" element={<EventDetails />} />
      <Route path="/ourwork" element={<OurWork/>} />
      <Route path="/get-involved" element={<GetInvolved/>} />
      <Route path="*" element={<NotFound/>}/>
    </Routes>

    {
      isRouteValid &&
      <Footer/>
    }
    

    <ToastContainer
      position="top-right"
      autoClose={2000}
      pauseOnHover={false}
      theme="colored"
    />
    </>
  )
}

export default App
