import Image from "next/image";
import Heading from "./_components/heading";
import Footer from "./_components/footer";
import Hero from "./_components/hero";

function Home() {
  return (
    <>
      <div className="text-3xl font-bold text-red-600">
        <Heading />
        <Hero />
        <Footer />
      </div>
    </>
  );
}
export default Home;
