import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Industries } from './components/Industries';
import { Capabilities } from './components/Capabilities';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import GetQuotePage from './pages/GetQuotePage';
import MaterialLibraryPage from './pages/MaterialLibraryPage';
import DesignGuidelinesPage from './pages/DesignGuidelinesPage';
import ProductionToolingPage from './pages/ProductionToolingPage';
import PrecisionManufacturingPage from './pages/PrecisionManufacturingPage';
import RapidPrototypingPage from './pages/RapidPrototypingPage';
import AerospacePage from './pages/AerospacePage';
import ReverseEngineeringPage from './pages/ReverseEngineeringPage';
import CNCMachiningPage from './pages/CNCMachiningPage';
import MedicalInstrumentsPage from './pages/MedicalInstrumentsPage';
import CapabilitiesPage from './pages/CapabilitiesPage';
import OurStoryPage from './pages/OurStoryPage';
import OilAndGasPage from './pages/OilAndGasPage';
import QualityInspectionPage from './pages/QualityInspectionPage';

function App() {
  // Simple route handling
  const path = window.location.pathname;

  // Wrap page content with layout components
  const withLayout = (Component: React.ComponentType) => (
    <div className="min-h-screen bg-cyber-black">
      <Navbar />
      <Component />
      <Footer />
    </div>
  );

  // Route mapping
  switch (path) {
    case '/quote':
      return withLayout(GetQuotePage);
    case '/resources/materials':
      return withLayout(MaterialLibraryPage);
    case '/resources/design':
      return withLayout(DesignGuidelinesPage);
    case '/services/tooling':
      return withLayout(ProductionToolingPage);
    case '/services/manufacturing':
      return withLayout(PrecisionManufacturingPage);
    case '/services/prototyping':
      return withLayout(RapidPrototypingPage);
    case '/industries/aerospace':
      return withLayout(AerospacePage);
    case '/services/engineering':
      return withLayout(ReverseEngineeringPage);
    case '/services/cnc':
      return withLayout(CNCMachiningPage);
    case '/industries/medical':
      return withLayout(MedicalInstrumentsPage);
    case '/about/capabilities':
      return withLayout(CapabilitiesPage);
    case '/about/story':
      return withLayout(OurStoryPage);
    case '/industries/oil-gas':
      return withLayout(OilAndGasPage);
    case '/services/quality':
      return withLayout(QualityInspectionPage);
    default:
      return (
        <div className="min-h-screen bg-cyber-black">
          <Navbar />
          <Hero />
          <Industries />
          <Capabilities />
          <Contact />
          <Footer />
        </div>
      );
  }
}

export default App;