import Navbar from "@/components/Navbar";
import Hero from "@/components/Landing/Hero";
import NewArrivals from "@/components/Landing/NewArrivals";
import BestSellers from "@/components/Landing/BestSellers";
import FlashSale from "@/components/Landing/FlashSale";
import PopularGenres from "@/components/Landing/Populargenres";
import AuthorSpotlight from "@/components/Landing/AuthorsSpotlight";
import ReaderReviews from "@/components/Landing/Readerreviews";
import Newsletter from "@/components/Landing/Newsletter";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main style={{ backgroundColor: "#040517" }}>
      <Navbar />
      <Hero />
      <NewArrivals />
      <BestSellers />
      <FlashSale />
      <PopularGenres />
      <AuthorSpotlight />
      <ReaderReviews />
      <Newsletter />
      <Footer />
    </main>
  );
}