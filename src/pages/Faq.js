import Carousel from "../components/Carousel";
import FaqQuestions from "../components/FaqQuestions";
import Login from "../components/Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Faq = () => {
  return (
    <div>
      <Navbar
        Image="https://toppng.com/uploads/preview/health-plan-icon-hospital-icon-blue-11553476430fckf2owtwt.png"
        Link1="News Feed"
        Link2="FAQ"
        redirect1="/"
        redirect2="/faq"
        logout={false}
      />
      <div class="container-fluid ml-3">
        <div class="row">
          <div class=" container-fluid col-md-8 mt-5 ">
            <FaqQuestions />
          </div>
          <div class="col-md-4 mt-5">
            <Login />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Faq;
