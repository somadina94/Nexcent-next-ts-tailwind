import Clients from "../components/Clients";
import Community from "../components/Community";
import Customers from "../components/Customers";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marketing from "../components/Marketing";
import Pana from "../components/Pana";
import PixelGrade from "../components/PixelGrade";
import Statistics from "../components/Statistics";

function Home() {
  return (
    <div className="font-abel dark:text-white dark:bg-gray-950">
      <Header />
      <div className="space-y-12">
        <Hero />
        <Clients />
        <Community />
        <PixelGrade />
        <Statistics />
        <Pana />
        <Customers />
        <Marketing />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
