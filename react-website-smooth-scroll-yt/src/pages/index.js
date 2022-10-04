import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navebar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navebar toggle={toggle}/>
      <HeroSection />
      <InfoSection />
    </div>
  )
}

export default Home
