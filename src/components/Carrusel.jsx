import asd from "../assets/images/asd.png";
import ad2 from "../assets/images/ad2.png";
import carr from "../assets/images/carr.png";
import '../assets/styles/carrusel.css'

function Carrusel() {
  return (
    <center>
      <div className="carrusel-div">
        <div className="container-button">
          <button className="button">
              <img src={ad2} alt="pitza rico"/>
        </button>
        </div>
        <img src={carr} alt="" />
        <div className="container-button">
          <button className="button">
              <img src={asd} alt="pitza rico" />
        </button>
        </div>
      </div>
    </center>
  );
}

export default Carrusel;
