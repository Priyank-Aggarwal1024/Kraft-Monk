import Certificate from '../components/Certificate';
import Curriculum from '../components/Curriculum';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Testimonials from '../components/Testimonials';
import Who from '../components/Who';
import '../styles/Layout.css'
function Layout() {
    return (
        <>
            <Navbar />
            <Hero />
            <Who />
            <Curriculum />
            <Certificate />
            <Faq />
            <Testimonials />
            <Footer />
        </>
    );
}

export default Layout;