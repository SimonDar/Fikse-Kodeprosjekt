import React from 'react';
import ProfileCard from './components/ProfileCard';
import RepairDashboard from './components/RepairDashboard';
import Auth from './components/auth';
import FiksePage from './Page/FiksePage';
import AboutPage from './Page/OmOss';
import EventsPage from './Page/eventspage';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <EventsPage />
    </div>
  );
}

export default App;

/*      <ProfileCard
        name="Jane Doe"
        title="Software Engineer"
        avatarUrl="https://github.com/simondar.png"
        bio="Enthusiastic developer with a passion for building amazing applications."
      /> 
      
            <Auth />

            <RepairDashboard />
*/