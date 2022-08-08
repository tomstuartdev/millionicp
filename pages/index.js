import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Banner, Footer, Navbar, Grid } from '../components'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Grid/>
    <Footer/>
    </>
  )
}
