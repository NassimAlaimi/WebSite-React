import React, {useState} from 'react'
import FormSection from '../components/Form'
import Sidebar from '../components/Sidebar'
import Navebar from '../components/Navbar'

const FormPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navebar toggle={toggle} changeY={0} defaultState={true}/>
      <FormSection />
    </>
  )
}

export default FormPage
