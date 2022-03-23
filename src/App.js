import React from 'react'
import Builder from './components/Builder'
import Feedback from './components/Feedback'
import Header from './components/Header'
import Montaj from './components/Montaj'
import Navbar from './components/Navbar'
import Services from './components/Services'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Montaj />
      <Builder />
      <Feedback />
    </>
  )
}

export default App