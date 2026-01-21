import React from 'react'
import Navbar from '../components/navbar'
import Banner from "../components/Banner"
import HomeCourses from "../components/HomeCourses"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <HomeCourses/>
    </div>
  );
};

export default Home;