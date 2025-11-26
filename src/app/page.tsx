import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import LastFooter from "@/components/LastFooter";
import MovingCards from "@/components/MovingCards";
import Testimonial from "@/components/Testimonial"
import UpcomingsWebinnars from "@/components/UpcomingsWebinnars";
export default function Home() {
  return (
    <main>
      {/* <h1 className="text-red-400 text-4xl font-bold text-center ">hello</h1> */}
      <HeroSection />
      <Cards />
      <Testimonial />
      <MovingCards />
      <UpcomingsWebinnars />
      <Footer />
      <LastFooter />
    </main>
  );
}
