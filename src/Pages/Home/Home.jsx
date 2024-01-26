import Footer from "../Shared/Footer";
import Header from "../Shared/Header";
import Navbar from "../Shared/Navbar";
import Brands from "./Brands";
import UserFeedback from "./UserFeedback";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <Brands></Brands>
      <UserFeedback></UserFeedback>
      <Footer></Footer>
    </div>
  );
};

export default Home;
