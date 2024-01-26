import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import Brand from "./Brand";
import BrandsSlider from "./BrandsSlider";
import NewsLetter from "./NewsLetter";
import UserFeedback from "./UserFeedback";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <BrandsSlider></BrandsSlider>
      <Brand></Brand>
      <UserFeedback></UserFeedback>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
    </div>
  );
};

export default Home;
