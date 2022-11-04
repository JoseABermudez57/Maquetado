import '../assets/styles/cuerpo.css'
import Opciones from "./Opciones";
import Carrusel from "./Carrusel";
import Rafitas from '../assets/images/Rafitas.png'
import tia from '../assets/images/tia.png'
import zuñiga from '../assets/images/zuñiga.png'
function Cuerpo() {
    return ( 
        <>
            <Opciones/>
            <Carrusel/>
            <div className='center'>
            <label className="title">
                Restaurantes de Tuxtla Gutiérrez
            </label>
            </div>
            <div className='restauarants'>
                <div className="restaurant">
                    <img src={Rafitas} alt="" />
                    <label htmlFor="">Abierto</label>
                </div>
                <div className="restaurant">
                    <img src={zuñiga} alt="" />
                    <label htmlFor="">Abierto</label>
                </div>
                <div className="restaurant">
                    <img src={tia} alt="" />
                    <label htmlFor="">Abierto</label>
                </div>
            </div>
            
        </>
     );
}

export default Cuerpo;