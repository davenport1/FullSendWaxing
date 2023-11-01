'use client'
import Image from 'next/image'
import React  from 'react';
import Header from '../components/Header/Header.js';
// import {
//   AiFillInstagram,
//   AiFillLinkedin,
//   AiFillYoutube,
// } from "react-icons/ai";
// import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

// import FswLogoWhite from "../../public/logolight.png";
// import FswNegBlack from "../../public/logodark.png";
// import FswNegColor from "../../public/logocolordark.png";
// import FswColor from "../../public/logocolorlight.png";
// import CloseWork1 from "../../public/closework1.jpg";
// import CloseWork2 from "../../public/closework2.jpg";
// import ProductBest from "../../public/productbest.jpg";
// import ProductCloseUp from "../../public/productclose.jpg";
// import Products1 from "../../public/products1.jpg";
// import FarShotBest from "../../public/farshotbest.jpg";
// import CloseBest from "../../public/closebest.jpg";
// import EdgeWork1 from "../../public/edgework1.jpg";
// import FarShot1 from "../../public/farshot1.jpg";
// import FightClimateChange from "../../public/Fight-climate-change-art.jpg";
// import KeepTahoeBlue from "../../public/keeptahoeblue.png";
// import Kirkwood from "../../public/logo-kirkwood.png";
// import Mammoth from "../../public/mammothlogo.jpg";
// import Pow from "../../public/POW.png";
// import products1 from "../../public/products1.jpg";
// import Purl from "../../public/purllogo.png";
import HomeSplash from '../components/HomeSplash/HomeSplash.js';
import Mission from '@/components/Mission/Mission.js';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <title>FullSendWaxing</title>
      <Header />
      <main className="bg-slate-800">
        <HomeSplash darkMode={darkMode} />
        <Mission />
        
      </main>
    </div>
  )
}
