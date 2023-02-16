import React from 'react'
import Hero from '../Components/Hero/Hero'
import Carousel from '../Components/Carousel/Carousel';
import { Content } from '../Components/Content/Content';
import Products from '../Components/Products/Products';
import Features from '../Components/Features/Features';
import Counter from '../Components/Counter/Counter';
import { heroOne, heroTwo, heroThree } from '../data/HeroData';

const Home = () => {
  return (
    <div>
      <Hero/>
      <Products />
      <Features />
			<Content {...heroOne} />
			<Content {...heroTwo} />
			<Content {...heroThree} />
			<Counter/>
			<Carousel />
    </div>
  )
}

export default Home
