import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/header/header';
import Homepage from './component/homepage/homepage';
import UseCases from './component/use-cases/use-cases';
import Community from './component/community/community';
import Pricing from './component/pricing/pricing';
import Footer from './component/footer/footer';
import ParallelAndPowerDialer from './component/parallel-and-power-dialer/parallel-and-power-dialer';
import InternationalDialing from './component/international-dialing/international-dialing';
import AnalyticsAndContentsCard from './component/analytics-and-contents-cards/analytics-and-contents-cards';
import Integrations from './component/integrations/integrations';
import Privacy from './component/footer/privacy/privacy';
import Terms from './component/footer/terms/terms';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/use-cases' element={<UseCases />} />
        <Route path='/community' element={<Community />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/parallel-and-power-dialer" element={<ParallelAndPowerDialer />} />
        <Route path="/analytics-and-content-cards" element={<AnalyticsAndContentsCard />} />
        <Route path="/international-dialing" element={<InternationalDialing />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="terms" element={<Terms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
