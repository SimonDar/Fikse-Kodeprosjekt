import React from 'react';
import ProfileCard from './components/ProfileCard';
import RepairDashboard from './components/RepairDashboard';
import Auth from './components/auth';
import FiksePage from './Page/FiksePage';
import AboutPage from './Page/OmOss';
import HvaSkjer from './Page/HvaSkjer';
import DeliveryPage from './Page/HerErVi';
import RetailPage from './Page/ForRetail';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <RetailPage />
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