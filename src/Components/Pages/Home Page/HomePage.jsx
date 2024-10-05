import React, { useEffect, useRef, useState } from "react";
import Diplomacy from "./Diplomacy/Diplomacy";
import About from "./About/About";
import FAQs from "./FAQs/FAQs";
import ContactUs from "../../ContactUs/ContactUs.jsx";
import PastEvents from "./Past_Events/Past_Events.jsx";
import Past_Sponsors from "./Past_Sponsors/Past_Sponsors.jsx";
import Navbar from "../../Navbar/Navbar.jsx";
import Home from "./Home/Home.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NeatGradient } from "@firecms/neat";
import './HomePage.css'
import Load from "../../Load_Page/Load.jsx";
import fetchAPI from '../../../Utilities/NetworkUtility'

AOS.init({ once: true }); // Initialize AOS

export default function App() {
    const [bgColor, setBgColor] = useState("my-canvas-class"); // Default class name
    const canvasRef = useRef(null);
    const gradientRef = useRef(null);
    const [data, setData] = React.useState({});

    useEffect(() => {
        if (!canvasRef.current) return;

        gradientRef.current = new NeatGradient({
            ref: canvasRef.current,
            colors: [
                {
                    color: "#3E0064",
                    enabled: true
                },
                {
                    color: "#230137",
                    enabled: true
                },
                {
                    color: "#430164",
                    enabled: true
                },
                {
                    color: "#29013F",
                    enabled: true
                },
                {
                    color: "#5C028C",
                    enabled: true
                }
            ],
            speed: 8,
            horizontalPressure: 2,
            verticalPressure: 5,
            waveFrequencyX: 2,
            waveFrequencyY: 4,
            waveAmplitude: 3,
            shadows: 7,
            highlights: 10,
            colorBrightness: 1,
            colorSaturation: 1,
            wireframe: false,
            colorBlending: 7,
            backgroundColor: "#9500E6",
            backgroundAlpha: 1,
            resolution: 1
        });

        return () => {
            gradientRef.current?.destroy(); // Cleanup
        };
    }, [canvasRef.current]);

    let [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        const timer2 = setTimeout(() => {
            setLoading(false);
        }, 6000)
        return () => clearTimeout(timer2);
    }, [loading]);

    React.useState(() => {
        document.body.style.overflow = 'hidden';
        fetchAPI("get-home", data => {
            setData(data)
        })
        const timer = setTimeout(() => {
            document.body.style.overflow = 'visible';
        }, 5000)
        return () => clearTimeout(timer);
    }, [])

    return (
        <div style={{ position: "relative", height: "100vh" }}>
            {loading && <Load />}
            {loading === false && <div className="main" style={{ position: "relative", minHeight: "100vh" }}>
                <Navbar />
                <Home />
                <Diplomacy />
                <About />
                <PastEvents />
                <Past_Sponsors />
                <FAQs data={data.faqs} />
                <ContactUs />
            </div>}
        </div>
    );
}
