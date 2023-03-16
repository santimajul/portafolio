

export default function Pres(){

    return(
      <>
      <div className="container-fluid d-flex justify-content-end align-items-start main-image">
      </div>
      <div className="container-fluid d-flex justify-content-center align-items-center acerca-de-mi">
        <div className="col">
        <div className="container d-flex justify-content-center align-items-center rounded-pill persona ps-0" >
          <div className="row w-100 h-100 d-flex justify-content-center align-items-center">
          <div className="col-3 ps-0">
              <div className="foto-carnet rounded-circle"></div>
            </div>
            <div className="col-9 nombre">
              <p>Santiago Majul</p>
            </div>  
            <div className="col-9 job">
              <p>Desarrollador Front-end</p>
            </div>
          </div>
        </div>
        <div className="row p-5 d-flex justify-content-center align-items-center flex-wrap" id='acerca-de-mi'>
          <div className="col-md-6 col-12 info d-flex justify-content-center align-items-center flex-column">
            <h2 className="my-0">Acerca de mi!</h2>
            <div className="d-flex justify-content-center align-items-center p-4 w-75 text-wrap">
              <p>Soy un practicante proactivo y responsable que busca constantemente aprender nuevas habilidades y seguir desarrollandose en nuevas tecnologias. Tengo proyectos hechos con ReactJS, JavaScript, y tambien proyectos hechos unicamente con html y CSS, tecnologias las cuales manejo hace tiempo.</p>
            </div>
          </div>
          <div className="col-md-6 col-12 d-flex justify-content-center align-items-center p-4 ">
            <div className="foto"></div>
          </div>
        </div>
        </div>
      </div>

</>
    )
}