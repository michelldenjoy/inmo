import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from "./Components/Footer";
import WhatsAppBubble from "./Components/WhatsAppBubble";
import ScrollToTop from './Components/ScrollToTop';
import MainRoutes from './MainRoutes';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <main className="min-h-screen">
        <MainRoutes /> 
      </main>
      <Footer />
      <WhatsAppBubble />
    </Router>
  );
}

export default App;

