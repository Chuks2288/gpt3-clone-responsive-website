import React from 'react';
import { Article, Brand, Cta, Feature, Navbar } from './components';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers';
import './App.css';




export default function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  )
}
