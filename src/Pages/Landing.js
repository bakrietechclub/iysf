import React from 'react'
import PreSection from './Section/PreSection';
import Section1 from './Section/Section1';
import Section2 from './Section/Section2';
import BreakSection from './Section/BreakSection';
import Section3 from './Section/Section3';
import Section4 from './Section/Section4';
import Section5 from './Section/Section5';
import Section6 from './Section/Section6';
import Section7 from './Section/Section7';
import Section8 from './Section/Section8';
import SectionLocation from './Section/SectionLocation';

const Landing = ({ db }) => {
  return (
    <>
      <PreSection />
      <Section1 />
      {/* <BreakSection /> */}
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section7 />
      <SectionLocation />
      <Section6 />
      <Section8 />
    </>
  )
}

export default Landing;
