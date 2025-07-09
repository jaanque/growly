import './App.css';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
// WhyCarfli is removed as its content is implicitly covered or integrated elsewhere.
// JoinRevolution (old form) is replaced by LeadCaptureForm.
import EarningsCalculatorDrivers from './components/EarningsCalculatorDrivers';
import InvestmentCalculator from './components/InvestmentCalculator';
import Roadmap from './components/Roadmap';
import TrustSignals from './components/TrustSignals';
import FAQ from './components/FAQ';
import LeadCaptureForm from './components/LeadCaptureForm';
import Footer from './components/Footer';

function App() {
  // IDs for scroll linking, ensure these match the target components
  // Header CTA scrolls to "lead-form-section" (in LeadCaptureForm.js)
  // Footer links might scroll to "faq-section" (in FAQ.js) and "roadmap-section" (in Roadmap.js)

  return (
    <div className="App">
      <Header />
      <HowItWorks /> {/* Explains the 3 core ways to engage */}
      <EarningsCalculatorDrivers />
      <InvestmentCalculator />
      <Roadmap />
      <TrustSignals />
      <FAQ /> {/* Ensure this component has id="faq-section" if linked from footer */}
      <LeadCaptureForm /> {/* This component has id="lead-form-section" */}
      <Footer />
    </div>
  );
}

export default App;