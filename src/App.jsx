import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Engage from './components/Engage'
import Footer from './components/Footer'
import Cgu from './pages/Cgu'
import Privacy from './pages/Privacy'

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Engage />
      </main>
      <Footer />
    </>
  )
}

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/cgu', element: <Cgu /> },
  { path: '/privacy', element: <Privacy /> },
]
