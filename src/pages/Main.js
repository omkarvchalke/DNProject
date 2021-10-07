import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Login from "../components/Login";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <div >
        <Navbar
          Image="https://toppng.com/uploads/preview/health-plan-icon-hospital-icon-blue-11553476430fckf2owtwt.png"
          Link1="News Feed" Link2="FAQ" redirect1='/' redirect2='/faq' logout={false} />
      </div>
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 mt-5 ml-auto w-20">
            <Carousel />
          </div>
          <div class="col-md-3 ml-auto mt-5">
            <Login />
          </div>
        </div>
          <Footer />
      </div>
    </div>
  );
};

export default Main;
