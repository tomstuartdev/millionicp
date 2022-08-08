import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Navbar, About, Footer, Banner } from '../components'

export default function Home() {
  return (
    <>
    
    <Navbar/>
    <Banner/>
    <About/>
    <Footer/>
    </>
  )
}
