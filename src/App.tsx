import React from 'react';
import { LangProvider } from './i18n';
import { useRoute } from './hooks';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import HomePage from './pages/home';
import FeaturesPage from './pages/features';
import DevicesPage from './pages/devices';
import SolutionsPage from './pages/solutions';
import PricingPage from './pages/pricing';
import ContactPage from './pages/contact';

const RouterView: React.FC = () => {
  const route = useRoute();

  const renderPage = () => {
    switch (route) {
      case '/':
        return <HomePage />;
      case '/fitur':
        return <FeaturesPage />;
      case '/perangkat':
        return <DevicesPage />;
      case '/solusi':
        return <SolutionsPage />;
      case '/harga':
        return <PricingPage />;
      case '/kontak':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="site-wrapper">
      <Header currentRoute={route} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default function App() {
  return (
    <LangProvider>
      <RouterView />
    </LangProvider>
  );
}
