"use client";
import React from "react";
import { WavyBackground } from "../ui/wavy-background";
import Image from "next/image";
import myphoto from "../assests/myphoto.jpg";
import Card from "./Card";
import { GitlabIcon as GitHub, Linkedin, Mail } from 'lucide-react'


export function WavyBackgroundDemo() {
  return (
    <div className="flex justify-center mt-20">
      <WavyBackground>
      <Card /> 
        <Image
          src={myphoto}
          alt="My Photo"  
          className="rounded-full w-[80%] max-w-[300px] h-auto md:w-[70%] lg:w-[80%] object-cover flex justify-center m-auto "

        />
        <h2 className="text-3xl md:text-4xl text-blue-400 mb-6">Frontend Developer </h2>
        <p className="text-lg md:text-xl mb-8">
          Enthusiastic and motivated CSE graduate with hands-on experience in Frontend development, Python programming, and strong problem-solving skills in Data Structures and Algorithms.
        </p>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/rakeshboyiri/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <GitHub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/rakesh-boyiri/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition">
            <Linkedin size={40} />
          </a>
          <a href="mailto:boyirirakesh@gmail.com" className="text-gray-300 hover:text-white transition">
            <Mail size={40} />
          </a>
        </div>
      </WavyBackground>
    </div>
  );
}
