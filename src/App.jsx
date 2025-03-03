import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./Home";
import Navbar from "./Component/Navbar";
import Topoffers from "./Component/Topoffers";
import Properties from "./Component/Properties";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Renthouse from "./Property/Renthouse";
import Buy from "./Page/Buy";
import PostProperty from "./Component/Postproperty";
import Login from "./Component/Login";
import Rent from "./Page/Rent";
import Rentland from "./Property/Rentland";
import Rentmide from "./Property/Rentmide";
import Rentplat from "./Property/Rentplat";
import Rentagriculture from "./Property/Rentagriculture";
import Rentdukan from "./Property/Rentdukan";
import RentNavbar from "./Page/RentNavbar";
import Buyagriculture from "./Property/Buyagriculture";
import Buydukan from "./Property/Buydukan";
import Buyhouse from "./Property/Buyhouse";
import Buyland from "./Property/Buyland";
import Buyplat from "./Property/Buyplat";
import Buymide from "./Property/Buymide";
import BuyNavbar from "./Page/BuyNavbar";
function AppContent() {
  const location = useLocation();
  const [showNavbar, setShowRentNavbar] = useState(false);
  const [showBuyNavbar, setShowBuyNavbar] = useState(false);

  useEffect(() => {
    const rentPages = ["/rentdukan", "/rentplat", "/renthouse", "/rentland", "/rentagriculture", "/rentmide"];
    const buyPages = ["/buydukan", "/buyplat", "/buyhouse", "/buyland", "/buyagriculture", "/buymide"];
    setShowRentNavbar(rentPages.includes(location.pathname));
    setShowBuyNavbar(buyPages.includes(location.pathname));
  }, [location]);

  return (
    <>
     
      <Navbar />
      {showNavbar && <RentNavbar />}
      {showBuyNavbar && <BuyNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topoffers" element={<Topoffers />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/renthouse" element={<Renthouse />} />
        <Route path="/buy" element={<Buy />} />
        <Route path="/postproperty" element={<PostProperty />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rent" element={<Rent />} />
        <Route path="/rentmide" element={<Rentmide />} />
        <Route path="/rentland" element={<Rentland />} />
        <Route path="/rentplat" element={<Rentplat />} />
        <Route path="/rentdukan" element={<Rentdukan />} />
        <Route path="/rentagriculture" element={<Rentagriculture />} />
        <Route path="/buymide" element={<Buymide />} />
        <Route path="/buyland" element={<Buyland />} />
        <Route path="/buyplat" element={<Buyplat />} />
        <Route path="/buydukan" element={<Buydukan />} />
        <Route path="/buyagriculture" element={<Buyagriculture />} />
        <Route path="/buyhouse"element={<Buyhouse/>}/>
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
