import NavBar from "../components/NavBar";
import NewsSec from "../components/NewsSec";
import HeroSec from "../components/HeroSec";
import ClientsCard from "../components/ClientsCard";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSec />
      <ClientsCard />
      <NewsSec />
      <Footer />
    </>
  );
};

export default Home;
