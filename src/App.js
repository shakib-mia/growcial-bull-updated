import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home';
import LoosingMoney from './pages/LoosingMoney/LoosingMoney';
import PowerOfTechnicalAnalysis from './pages/PowerOfTechnicalAnalysis/PowerOfTechnicalAnalysis';
import PrivacyPolicy from './pages/PrivacyPolicy/PrivacyPolicy';
import SwingTradingVsDayTrading from './pages/SwingTradingVsDayTrading/SwingTradingVsDayTrading';
import TopStrategies from './pages/TopStrategies/TopStrategies';
import TradingPlan from './pages/TradingPlan/TradingPlan';
import TradingMistake from './pages/TradingMistake/TradingMistake';
import TradingMindset from './pages/TradingMindset/TradingMindset';
import NewsTrading from './pages/NewsTrading/NewsTrading';
import FundamentalAnalysis from './pages/FundamentalAnalysis/FundamentalAnalysis';
import OptionTrading from './pages/OptionTrading/OptionTrading';
import VolatileMarket from './pages/VolatileMarket/VolatileMarket';
import SocialTrading from './pages/SocialTrading/SocialTrading';
import TradingPsychology from './pages/TradingPsychology/TradingPsychology';
import RefundPolicy from './pages/RefundPolicy/RefundPolicy';
import Disclaimer from './pages/Disclaimer/Disclaimer';
import CryptoCurrencyTrading from './pages/CryptoCurrencyTrading/CryptoCurrencyTrading';
import SwingVsPosition from './pages/SwingVsPosition/SwingVsPosition';
import MaximisingProfits from './pages/MaximisingProfits/MaximisingProfits';
import PsychologyEmotions from './pages/PsychologyEmotions/PsychologyEmotions';
import TechnicalIndicators from './pages/TechnicalIndicators/TechnicalIndicators';
import DecisionMaking from './pages/DecisionMaking/DecisionMaking';
import EmotionalIntelligence from './pages/EmotionalIntelligence/EmotionalIntelligence';
import FAQ from './pages/FAQ/FAQ';
import Terms from './pages/Terms/Termsone';
import Policies from './pages/Policies/Policies';

function App() {
  const [enrollVisible, setEnrollVisible] = useState(false)

  // const apiKey = 'LAAM6CXDZSN4W5W4';


  return (
    <>
      <Navbar setEnrollVisible={setEnrollVisible} />
      <Routes>
        <Route path='/' element={<Home enrollVisible={enrollVisible} setEnrollVisible={setEnrollVisible} />} />
        {/* <Route path='/services' element={<Services />} /> */}
        <Route path='/homepage' element={<Home />} />
        <Route path='/about-us' element={<Home />} />
        <Route path='/plans' element={<Home />} />
        <Route path='/facts' element={<Home />} />
        <Route path='/referral' element={<Home />} />
        <Route path='/contact' element={<Home />} />
        <Route path='/top' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/testimonials' element={<Home />} />
        <Route path="/blog/are-you-tired-of-losing-money-in-the-market-heres-how-to-avoid-common-trading-mistakes-and-turn-the-tide-in-your-favour" element={<LoosingMoney />} />
        <Route path="/blog/power-of-technical-analysis" element={<PowerOfTechnicalAnalysis />} />
        <Route path="/blog/swing-trading-vs-day-trading" element={<SwingTradingVsDayTrading />} />
        <Route path='/blog/trading-plan' element={<TradingPlan />} />
        <Route path="/blog/top-strategies" element={<TopStrategies />} />
        <Route path="/blog/trading-mistake" element={<TradingMistake />} />
        <Route path="/blog/trading-mindset" element={<TradingMindset />} />
        <Route path="/blog/options-trading" element={<OptionTrading />} />
        <Route path="/blog/news-trading" element={<NewsTrading />} />
        <Route path="/blog/fundamental-analysis" element={<FundamentalAnalysis />} />
        <Route path="/blog/trade-in-volatile-markets" element={<VolatileMarket />} />
        <Route path="/blog/social-trading" element={<SocialTrading />} />
        <Route path="/blog/psychology-of-trading" element={<TradingPsychology />} />
        <Route path="/blog/cryptocurrency-trading" element={<CryptoCurrencyTrading />} />
        <Route path="/blog/swing-Trading-vs-position-trading" element={<SwingVsPosition />} />
        <Route path="/blog/maaximising-profits" element={<MaximisingProfits />} />
        <Route path="/blog/psychology-of-trading-emotions" element={<PsychologyEmotions />} />
        <Route path="/blog/mastering-technical-indicators" element={<TechnicalIndicators />} />
        <Route path="/blog/decision-making" element={<DecisionMaking />} />
        <Route path="/blog/emotional-intelligence-in-trading" element={<EmotionalIntelligence />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/refund-policy' element={<RefundPolicy />} />
        <Route path='/disclaimer' element={<Disclaimer />} />
        <Route path='/terms-condition' element={<Terms />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/policies' element={<Policies />} />

      </Routes>
    </>
  );
}

export default App;
