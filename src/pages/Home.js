import React from 'react';
import Clients from '../components/Clients';
import Cta from '../components/Cta';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Portfolio from '../components/Portfolio';
import Services from '../components/Home_services';
import Midpage from '../components/Midpage';
import Faq from '../components/Faq';
import Products from './Products';
import ProductTab from './ProductTab';
import LetsConnect from '../components/LetsConnect';


const Home = () => {
    return (
        <>
        <div className='section'>
            <Hero />
            <Intro />
            <Services />
            <Midpage/>
            <Portfolio />
            <Clients />
            <ProductTab/>
            <Cta/>
            <Faq/>
            <Footer />
        </div>
        <LetsConnect/>
        </>

    )
}

export default Home;

