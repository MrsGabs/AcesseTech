import banner from "/banner.jpg";
import '../styles/components/Banner.css'

const Banner = () => {
  return (
    <div id="home" className="banner-container">
      <h1>
        Bem-vindo à AcesseTech <span> Empoderando Através da Tecnologia</span>
      </h1>
      <img className="banner-img" src={banner} />
    </div>
  );
};

export default Banner;
