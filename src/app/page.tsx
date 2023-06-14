import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Gallery></Gallery>
      <Contact></Contact>
      <Footer></Footer>
    </main>
  )
}
