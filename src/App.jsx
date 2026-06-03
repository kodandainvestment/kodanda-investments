import { Routes, Route } from "react-router-dom"
// import Navbar from "./Component/Navbar"
import AboutHero from "./Pages/About/AboutHero"
import Home from "./Pages/Home/HomeHero"
import FundingHero from "./Pages/Funding/FundingHero"
import PortfolioHero from "./Pages/Portfolio/PortfolioHero"
import InvestmentsHero from "./Pages/Investments/InvestmentsHero"
import NewsletterHero from "./Pages/Newsletter/NewsletterHero"
import BlogHero from "./Pages/Blog/BlogHero"
import SuccessStoriesHero from "./Pages/SuccessStories/SuccessStoriesHero"
import ContactHero from "./Pages/Contact/ContactHero"

function App() {

  return (
    <>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutHero />} />
      <Route path="/startup-funding" element={<FundingHero />} />
      <Route path="/portfolio-companies" element={<PortfolioHero />} />
      <Route path="/investments-criteria" element={<InvestmentsHero />} />
      <Route path="/newsletter" element={<NewsletterHero />} />
      <Route path="/blog" element={<BlogHero />} />
      <Route path="/success-stories" element={<SuccessStoriesHero />} />
      <Route path="/contact" element={<ContactHero />} />
    </Routes>
    </>
  )
}

export default App
