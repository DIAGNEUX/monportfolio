import React from 'react'
import "./App.css"
import { Lesroutes } from './way/Lesroutes'
import Navbar from './component/Navbar'

export const App = () => {
  return (
    <div className='Wrap-app'>
      <Navbar/>
      <Lesroutes/>

    </div>
  )
}
