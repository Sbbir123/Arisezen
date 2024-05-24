// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import "aos/dist/aos.css";
// import './index.css';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from 'react-router-dom';
// // All pages
// import Home from './pages/Home';
// import Contact from './pages/Contact';
// import DemoProduct from './pages/DemoProduct';
// import {useDocTitle} from './components/CustomHook';
// import ScrollToTop from './components/ScrollToTop';
// import Services from './components/Services';
// import Products from './pages/Products';
// import About from './pages/About';

// // Import the FAQ component


// function App() {
//   useEffect(() => {
//     const aos_init = () => {
//       AOS.init({
//         once: true,
//         duration: 1000,
//         easing: 'ease-out-cubic',
//       });
//     }

//     window.addEventListener('load', () => {
//       aos_init();
//     });
//   }, []);

//   useDocTitle("Arisezen");

//   return (
//     <>
//       <Router>
//         <ScrollToTop>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/get-demo" element={<DemoProduct />} />
//             <Route path="/product" element={<Products />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/about" element={<About />} />
//             {/* Add the FAQ component to the homepage route */}
          
//           </Routes>
//         </ScrollToTop>
//       </Router>
//     </>
//   );
// }

// export default App;


import React, { useEffect } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import DemoProduct from './pages/DemoProduct';
import { useDocTitle } from './components/CustomHook';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Products from './pages/Products';
import About from './pages/About';
import Registration from '../../arisizen/src/components/Registration'; // Import your Registration component here


function App() {
  useEffect(() => {
    const aos_init = () => {
      AOS.init({
        once: true,
        duration: 1000,
        easing: 'ease-out-cubic',
      });
    }

    window.addEventListener('load', () => {
      aos_init();
    });
  }, []);

  useDocTitle("Arisezen");

  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/get-demo" element={<DemoProduct />} />
            <Route path="/product" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} /> {/* Add this route for the registration page */}
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
