import * as React from 'react'
import '../styles/styles.scss'
import MainPage from '../views/mainPage'
import NavBar from 'components/navbar'
import { Footer } from 'components/footer'

function App() {
  return (
    <>
      <NavBar />
      <MainPage />
      <Footer />
    </>
  )
}

export default App
