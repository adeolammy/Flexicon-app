import React from 'react'
import Hero from '../Components/Hero/Hero'
import Carousel from '../Components/Carousel/Carousel';
import { Content } from '../Components/Content/Content';
import Features from '../Components/Features/Features';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Carousel />
    </div>
  )
}

export default Home
