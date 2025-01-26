import Navbar from '@/components/custom/client/Navbar';
import Hero from './sections/Hero'
import Bento from './sections/bento'
import Integration from './sections/Integration'
import Footerflyer from './sections/footerflyer'
import Companies from './sections/companies'
import Footer from '@/components/custom/client/Footer';


export default function page(){

    return(
    <>
        <Navbar/>
        <Hero/>
        <Bento/>
        <Companies/>
        <Integration/>
        <Footerflyer/>
        <Footer/>
    </>
    
)
}