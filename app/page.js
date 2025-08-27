'use client'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Customers from './components/Customers';
import Services from './components/Services';
import Action from './components/Action';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';



export default function Home() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Customers/>
    <Services/>
    <Action/>
    <Testimonials/>
    <Footer/> 
    </>  
    );
}
