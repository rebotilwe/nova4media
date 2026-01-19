import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Gallery from "./pages/Gallery/Gallery"
import Services from "./pages/Services/Services"
import Blog from "./pages/Blog/Blog"
import Contact from "./pages/Contact/Contact"
import NotFound from "./pages/NotFound/NotFound"
import PortfolioSection from "./components/PortfolioSection/PortfolioSection";
import Projects from "./pages/Projects/Projects";
import Pricing from "./pages/Pricing/Pricing";
import ContactPage from "./components/ContactPage/ContactPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
       <Route path="/portfolio" element={<PortfolioSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contactPage" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
