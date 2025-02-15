import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";

const navigationItems = [
  {
    path: "/",
    title: "Главная",
  },
  {
    path: "/about",
    title: "О нас",
  },
  {
    path: "/services",
    title: "Услуги",
  },
  {
    path: "/portfolio",
    title: "Портфолио",
  },
  {
    path: "/dashboard",
    title: "Дашборд",
  },
  {
    path: "/contact",
    title: "Контакты",
  },
];

const companyInfo = {
  name: "Analytics Agency",
  contacts: {
    email: "info@analytics-agency.ru",
    phone: "+7 (999) 123-45-67",
    address: "г. Москва, ул. Примерная, д. 123",
  },
  services: [
    "Анализ данных",
    "Визуализация данных",
    "Статистические исследования",
    "Консалтинг",
  ],
};

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navigation items={navigationItems} logo="/vite.svg" />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer
          companyName={companyInfo.name}
          contacts={companyInfo.contacts}
          services={companyInfo.services}
        />
      </div>
    </Router>
  );
}

export default App;
