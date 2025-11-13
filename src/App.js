
import './App.css';
import MovingSkillsContainer from './components/MovingSkillsContainer';
import PortfolioHomepage from './components/PortfolioHomepage'; 
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ContactUs from './components/ContactUs';



function App() {
  return (
    <div className='main-container'> 
      <div style={{ marginTop: '2px' ,borderRadius:'2px'}}>
      <PortfolioHomepage/>
      </div>  
      <div style={{marginTop:'2px',borderRadius:'10px'}}>
      <AboutSection/>
      </div>
      <div style={{ marginTop: '2px' }}>
    <MovingSkillsContainer/>
    </div>
    <div style={{ marginTop: '2px' }}>
    <ProjectsSection/>
    </div>
    <div style={{ marginTop: '2px' }}>
    <ContactUs/>
    </div>
    </div>
  );
}

export default App;
