import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import { Outlet } from 'react-router';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
