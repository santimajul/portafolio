import { useState } from "react"
import Cards from "./cards"
export default function Proyectos({data}){

  let [show,setShow] = useState(false);

  const handleProyects = ()=>{
    if(!show){
      document.querySelector('.proyectos-cuerpo').style.display = 'flex';
      document.querySelector('.proyectos-container').style.height = '400px';
      document.querySelector('.proyectos-titulo').style.height = '20%';
      setShow(true);
    }else{
      document.querySelector('.proyectos-cuerpo').style.display = 'none';
      document.querySelector('.proyectos-container').style.height = '80px';
      document.querySelector('.proyectos-titulo').style.height = '100%';
      setShow(false);
    }
  }

    return(
        <div className="container-fluid proyectos-container d-block p-0" id='proyects'onClick={handleProyects}>
          <div className="proyectos-titulo d-flex justify-content-start align-items-center">
            <h2>Proyectos</h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-arrow-right-circle ms-3 rounded-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
            </svg>
          </div>
          <div className="proyectos-cuerpo row overflow-scroll">
            {data.map( el =>{ return <Cards key={el.id} url={el.url} nombre={el.nombre} />})}
          </div>
        </div>
    )
}