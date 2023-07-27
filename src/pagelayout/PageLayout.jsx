import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCard from "../components/HeroCard";
import AddEvent from "../components/AddEvent";

export default function PageLayout ({}) {

  return(
    <main>
      <Header />
      <AddEvent />
      <HeroCard />
      <Footer />
    </main>
  )
}