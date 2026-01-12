import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';
import { PollsAnalysis } from './components/PollsAnalysis';
import { SocialMedia } from './components/SocialMedia';
import { CandidateProfile } from './components/CandidateProfile';
import { AiAssistant } from './components/AiAssistant';
import { Comparator } from './components/Comparator';
import { Simulator } from './components/Simulator';
import { MethodologyView, CountryMoodView, EvolutionView, RegionalDeepDive } from './components/ReportSections';
import { DigitalNarratives, DigitalBenchmark, DigitalRisks } from './components/DigitalStrategy';
import { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const renderView = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard />;
      case View.METHODOLOGY:
        return <MethodologyView />;
      case View.COUNTRY_MOOD:
        return <CountryMoodView />;
      case View.POLLS:
        return <PollsAnalysis />;
      case View.EVOLUTION:
        return <EvolutionView />;
      case View.REGIONAL_DETAIL:
        return <RegionalDeepDive />;
      case View.SOCIAL:
        return <SocialMedia />;
      case View.CANDIDATES:
        return <CandidateProfile />;
      case View.COMPARATOR:
        return <Comparator />;
      case View.SIMULATOR:
        return <Simulator />;
      case View.AI_ANALYST:
        return <AiAssistant />;
        
      // New Digital Strategy Views
      case View.DIGITAL_NARRATIVES:
        return <DigitalNarratives />;
      case View.DIGITAL_BENCHMARK:
        return <DigitalBenchmark />;
      case View.DIGITAL_RISKS:
        return <DigitalRisks />;
        
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </Layout>
  );
}

export default App;
