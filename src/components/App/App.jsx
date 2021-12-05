
//components
import './App.css';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import AboutMeSection from '../AboutMeSection/AboutMeSection';
import MyWorkSection from '../MyWorkSection/MyWorkSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

//styles
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
    <div>
      <Navbar />
    <WelcomeSection />
    <AboutMeSection />
    <MyWorkSection />
    <ContactSection />
    <Footer />
    </div>
  );
}

export default App;
