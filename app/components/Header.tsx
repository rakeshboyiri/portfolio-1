'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-gray-900 bg-opacity-90 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Boyiri Rakesh</a>
        <nav className="hidden md:flex space-x-6">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#education" className="hover:text-blue-400 transition">Education</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-gray-800 p-4">
          <a href="#about" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#experience" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Experience</a>
          <a href="#skills" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#education" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#contact" className="block py-2 hover:text-blue-400 transition" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  )
}

export default Header

