import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Skills from './sections/Skills';
import Stats from './sections/Stats';
import Profits from './sections/Profits';
import FooterFlyer from './sections/FooterFlyer';
import UsersInLove from './sections/UsersInLove';
import Explore from './sections/ExploreChallenges';
import GetStarted from './sections/GetStarted';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function page(){

    return(
    <>
    <Navbar/>
    <Hero/>
    <Experience/>
    <Stats/>
    <Skills/>
    <Explore/>
    <Profits/>
    <UsersInLove/>
    <GetStarted/>
    <FooterFlyer/>
    <Footer/>
    </>
    
)
}