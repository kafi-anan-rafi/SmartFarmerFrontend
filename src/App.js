import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import Farmer from './Pages/Farmer/Farmer';

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/farmer" element={<Farmer />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
