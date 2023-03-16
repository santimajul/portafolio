
export default function Tecs(){

    return(
        <>
        <div className="container-fluid tecs" id="tecs">
          <div className="row h-100">
			<div className="row compu-2">
				<div className="react icon"></div>
				<div className="js icon"></div>
				<div className="bs icon "></div>
				<div className="html icon"></div>
				<div className="css icon"></div>
			</div>
            <div className="col-xl-8 col-12 compu">
				<div className="row lenguajes d-flex justify-content-center align-items-center">
					<div className="react"></div>
				</div>
				<div className="row lenguajes d-flex justify-content-around align-items-center">
					<div className="js"></div>
				<div className="bs"></div>
				</div>
				<div className="row lenguajes d-flex justify-content-evenly align-items-center">
				<div className="html"></div>
				<div className="css"></div>
				</div>
			</div>
            <div className="col-xl-4 col-12">
							<div className="tqm d-flex justify-content-center align-items-center pt-4">
								<h2>Tecnologias que manejo</h2>
							</div>
							<div className="col lista h-75">
								<ul >
									<li>React</li>
									<li>JavaScript</li>
									<li>Bootstrap</li>
									<li>Html</li>
									<li>CSS</li>
								</ul>
							</div>
			</div>
          </div>
        </div></>
    )
}