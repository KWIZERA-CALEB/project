import Hero from '@/components/custom/client/sections/Hero';
import Experience from '@/components/custom/client/sections/Experience';
import Skills from '@/components/custom/client/sections/Skills';
import Stats from '@/components/custom/client/sections/Stats';
import Profits from '@/components/custom/client/sections/Profits';
import FooterFlyer from '@/components/custom/client/sections/FooterFlyer';
import UsersInLove from '@/components/custom/client/sections/UsersInLove';
import Explore from '@/components/custom/client/sections/ExploreChallenges';
import GetStarted from '@/components/custom/client/sections/GetStarted';
import Navbar from '@/components/custom/client/Navbar';
import Footer from '@/components/custom/client/Footer';

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

