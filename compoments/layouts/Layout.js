import Navbar from './Nav'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <main>
        <Navbar />
        {children}
        <Footer />
    </main>
  )
}
