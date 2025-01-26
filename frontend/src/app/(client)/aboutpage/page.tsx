import Navbar from '../../../components/custom/client/Navbar';
import Hero from './sections/Hero'
import Bento from './sections/Bento'
import Skills from './sections/Skills'
import Footer from '../../../components/custom/client/Footer';


export default function page(){

    return(
    <>
    <Navbar/>
   <Hero/>
   <Bento/>
   <Skills/>
    <Footer/>
    </>
    
)
}