import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Hero from './hero'
import Adventures from '../comps/Adventures'
import About from '../comps/About'
import Landscapes from '../comps/Landscapes'
import Products from '../comps/Products'
import Packages from '../comps/Packages'
import Reviews from '../comps/Reviews'
import Services from '../comps/Services'
import Blogs from '../comps/Blogs'
import Logo from '../comps/Logo'
import Subscribe from '../comps/Subscribe'

export default function Home() {
  return (
    <>
      <Hero />
      <Adventures />
      <About />
      <Landscapes />
      <Products />
      <Packages />
      <Reviews />
      <Services />
      <Blogs />
      <Subscribe />
      <Logo />      
    </>
  )
}
