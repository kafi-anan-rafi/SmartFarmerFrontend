import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';
import Signin from './Components/Signin';
import FarmerSignup from './Components/FarmerSignup';
import Farmer from './Pages/Farmer';
import CustomerSignup from './Components/CustomerSignup';
import BuyProduct from './Pages/BuyProduct';
import SellProduct from './Pages/SellProduct';
import BuyEquipment from "./Pages/BuyEquipment";
import SellEquipment from './Pages/SellEquipment';

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/farmersignup" element={<FarmerSignup />} />
            <Route path="/buyproduct" element={<BuyProduct />} />
            <Route path="/buyequipment" element={<BuyEquipment />} />
            <Route path="/sellproduct" element={<SellProduct />} />
            <Route path="/sellequipment" element={<SellEquipment />} />
            <Route path="/customersignup" element={<CustomerSignup />} />
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
