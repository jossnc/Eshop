import Banner from "./components/Banner/Banner";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Categoty2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services";
import headphone from "./assets/hero/headphone.png";
import Products from "./components/Products/Products";
import smartwatch2 from "./assets/category/smartwatch2-removebg-preview.png"
import Blogs from "./components/Blogs/Blogs";
import Partners from "./components/Partners/Partners";
import Footer from "./components/Footer/Footer";
import AOS from 'aos'; // Importa la librería de AOS
import 'aos/dist/aos.css'; // Importa el archivo CSS de AOS
import { useEffect } from "react";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  Image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  Image: smartwatch2,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "lorem ipsum dolor sit amet, consectetur adip occurence velit sed diam",
  bgColor: "#2dcc6f",
}

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData} />
      <Products />
      <Banner data={BannerData2} />
      <Blogs />
      <Partners />
      <Footer />
    </div>
  );
};

export default App;
