import React from 'react'
import {Main, Service, Vision, Colaborate, Getintouch, Footer} from './components/index'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
    <Main />
    <Service />
    <Vision />
    <Colaborate />
    <Getintouch />
    <Footer />
    </>
  )
}

export default App