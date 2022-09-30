import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navebar from '../components/Navbar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navebar toggle={toggle}/>
    </div>
  )
}

export default Home
