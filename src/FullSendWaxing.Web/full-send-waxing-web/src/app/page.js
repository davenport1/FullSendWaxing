'use client'
import Image from 'next/image'
import React  from 'react';
import Header from '../components/Header/Header.js';
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";

import FswLogoWhite from "../../public/logolight.png";
import FswNegBlack from "../../public/logodark.png";
import FswNegColor from "../../public/logocolordark.png";
import FswColor from "../../public/logocolorlight.png";
import CloseWork1 from "../../public/closework1.jpg";
import CloseWork2 from "../../public/closework2.jpg";
import ProductBest from "../../public/productbest.jpg";
import ProductCloseUp from "../../public/productclose.jpg";
import Products1 from "../../public/products1.jpg";
import FarShotBest from "../../public/farshotbest.jpg";
import CloseBest from "../../public/closebest.jpg";
import EdgeWork1 from "../../public/edgework1.jpg";
import FarShot1 from "../../public/farshot1.jpg";
import FightClimateChange from "../../public/Fight-climate-change-art.jpg";
import KeepTahoeBlue from "../../public/keeptahoeblue.png";
import Kirkwood from "../../public/logo-kirkwood.png";
import Mammoth from "../../public/mammothlogo.jpg";
import Pow from "../../public/POW.png";
import products1 from "../../public/products1.jpg";
import Purl from "../../public/purllogo.png";

export default function Home() {
  return (
    <div>
      <title>FullSendWaxing</title>
      <main className="bg-slate-800">
        <section className="min-h-screen bg-[url('../../public/farshotbest.jpg')] bg-cover bg-bottom">
          <nav className="py-10 mb-12 flex justify-between text-white">
            <h1 className="font-burtons text-xl px-10">Contact</h1>
            <ul className="flex items-center">
              <li className="px-10">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="#"
                >
                Shred Blog
                </a>
              </li>
            </ul>
          </nav>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={FswLogoWhite} 
              layout="fill"
              objectFit="cover"/>
          </div>
          <div className="text-center p-10 py-10">
            <p className="text-md py-5 leading-8 text-white max-w-xl mx-auto md:text-xl">
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-white">
              <AiFillInstagram />
              <AiFillLinkedin />
              <AiFillYoutube />
            </div>
          </div>
        </section>
        
      </main>
    </div>
  )
}
