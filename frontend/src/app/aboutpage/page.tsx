import Navbar from '../../components/Navbar';
import Hero from './sections/Hero'
import Bento from './sections/Bento'
import Skills from './sections/Skills'
import Footer from '../../components/Footer';


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