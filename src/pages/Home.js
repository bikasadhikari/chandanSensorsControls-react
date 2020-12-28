import React, {useState} from 'react'
import '../assets/css/home.css'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Slider from '../components/Home/Slider/Slider'
import CardsUI from '../components/Home/ProductCards/CardsUI'
import AboutUs from '../components/Home/AboutUs/AboutUs'

const Home = () => {

    const [open, setOpen] = useState(0);

    const sidebar = () => {
        setOpen(!open);
    }

    return(
        <>
             <Sidebar open={open} sidebar={sidebar}/>
            <Navbar sidebar={sidebar}/>
            <div className="wrapper">
            <Slider />
            <CardsUI />
            <AboutUs />
        </div>
        </>
    );
}

export default Home;