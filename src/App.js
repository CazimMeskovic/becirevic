import React from 'react';
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Router
} from "react-router-dom"
import Carousel from './components/Carousel';
import Destinations from './components/Destinations';
import Destinations1 from './components/Destinations1';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Search from './components/Search';

import FeaturedCard from './components/FeaturedCard';
import Contact from './components/Contact';

/*  import Navbar11 from './components/Navbar11'  */


/* const router = createBrowserRouter(createRoutesFromElements(
<>
  <Route path="/" element={<Navbar/>} >
  <Route index element={<Hero/>} />
  <Route path="Carosel" element={<Carousel/>} />
  <Route path="FeaturedCard" element={<FeaturedCard/>} />
  <Route path="Destination" element={<Destinations/>} />
  <Route path="Destination1" element={<Destinations1/>} />
  <Route path="Search" element={<Search/>} />
  <Route path="Contact" element={<Contact/>} />
  <Route path="Footer" element={<Footer/>} />
    </Route>
  </>
    
))
function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App; */


function App() {
  return (
    <div>


      <Navbar />
      <Hero />
      <Carousel />
      <FeaturedCard />
      <Destinations />
      <Destinations1 />
      <Search />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
