import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import Team from './Pages/Team.jsx';
import ScrollToTop from './components/ScrollToTop'; // Adjust the path as necessary
import WebDevelopment from './Pages/Services/Web-Development.jsx';
import AppDevelopment from './Pages/Services/App-Development.jsx';
import BrandStrategy from './Pages/Services/Brand-Strategy.jsx';
import ContentCreation from './Pages/Services/Content-Creation.jsx';
import DigitalCompaigns from './Pages/Services/Digital-Compaigns.jsx';
import SocialMediaManagement from './Pages/Services/Social-Media-Management.jsx';
import StoryTelling from './Pages/Services/Visual-Storytelling.jsx';
import CloudDevops from './Pages/Services/CloudDevops.jsx';

import ProjectDetail from './Pages/Projects/ProjectDetail.jsx'; 

export default function App() {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/web-development" element={<WebDevelopment />} />
                <Route path="/app-development" element={<AppDevelopment />} />
                <Route path="/brand-strategy" element={<BrandStrategy />} />
                <Route path="/content-creation" element={<ContentCreation />} />
                <Route path="/digital-compaigns" element={<DigitalCompaigns />} />
                <Route path="/social-media-management" element={<SocialMediaManagement />} />
                <Route path="/story-telling" element={<StoryTelling />} />
                <Route path="/cloud" element={<CloudDevops />} />

                {/* Add the route for project details */}
                <Route path="/projects/:projectId" element={<ProjectDetail />} /> {/* Adjusted path */}
            </Routes>
        </>
    );
}


