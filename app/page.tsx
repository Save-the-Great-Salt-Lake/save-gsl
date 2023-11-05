import Sidebar from '../components/Sidebar'
import Intro from '../components/Intro'
import ProblemSection from '../components/TheProblem'
import WhatCanIDo from '../components/WhatCanIDo'
import ContactSection from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Sidebar />
      <div id="wrapper">
        <Intro />
        <ProblemSection />
        <WhatCanIDo />
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}
