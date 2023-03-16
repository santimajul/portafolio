import Tecs from "./tecs";
import Pres from "./presentacion";
import Proyectos from "./proyectos";
import Footer from "./footer";
//IMAGENES
import streaming from '../imagenes/streaming.png';
import NBAFanPage from '../imagenes/NBAFanPage.png';
import objetivos from '../imagenes/objetivos.png';
import juego from '../imagenes/juego.png';
import ventas from '../imagenes/ventas.png';
import calculadora from '../imagenes/calculadora.png';



export default function Main(){

    let proyectos = [
        {
            id:0,
            nombre: 'streaming',
            url: streaming
        },
        {
            id:1,
            nombre: 'NBAFanPage',
            url: NBAFanPage
        },
        {
            id:2,
            nombre: 'objetivos',
            url: objetivos
        },
        {
            id:3,
            nombre: 'calculadora',
            url: calculadora
        },
        {
            id:4,
            nombre: 'juego',
            url: juego
        },
        {
            id:5,
            nombre: 'ventas',
            url: ventas
        },
    ]

    return(
        <>
        <section>
        <Pres />
        </section><hr/>
        <section>
            <Tecs />
        </section><hr/>
        <section>
            <Proyectos data={proyectos} />
        </section><hr/>
        <section>
            <Footer />
        </section>
        </>
    )
}