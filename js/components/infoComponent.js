class CursosPlatzi extends React.Component{

    constructor(props){
        super(props);
        this.state={
            cursos :[
                "Cursos Profesionales de Diseño Web (certificado)",
                "Frontend Profesional (certificado)",
                "Backend Proesional (certificado)",
                "Marketing y Estrategia Digital Profesional (certificado)",
                "PHP y Laravel Profesional (certificado)",
                "Programacion en Android (certificado)",
                "Programacion en iOS (certificado)",
                "Diseño Grafico de Interfaces de Usuario y UX profesional (certificado)",
                "Administracion de servidores y DevOps (certificado)",
                "Node.js y JavaScript Profesional (certificado)",
                "Git y Github (certificado)",
                "Google AdWords (certificado)"
            ]
        }
    }

    render(){
        return(
            <ol>
                {
                    this.state.cursos.map((curso)=>{
                        return(
                            <li>
                                {curso}
                            </li>
                        )
                    })
                }
                <p> todo en <a href="https://platzi.com/usuarios/macs03/" target="_blank">platzi.com</a></p>
            </ol>
        );
    }
}

class Formacion extends React.Component{
    render(){
        return(
            <article id="formacion" className="margin">
    			<h2> Formacion </h2>
    			<p>
    				<ul className="padding-lista">
    					<li>
    						<p>
    							Tesista de la Universidad Nacional Experimental del Táchira en la carrera Ingeniería en Informática año de egreso 2016.
    						</p>
    					</li>
    					<li>
    						<p>
    							Curso CCNA Cisco Nivel 1, en la academia de Cisco de la Universidad Nacional Experimental del Táchira
    						</p>
    					</li>
    					<li>
    						<p>
    							Curso de Linux Embebido en la Universidad Nacional Experimental del Táchira
    						</p>
    					</li>
    					<li>
                            <CursosPlatzi />
    					</li>
    					<br/>
    					<li>
    						Idioma Ingles Medio, Lectura, Escritura, Habla y Escucha en el Centro de Idiomas Alpha
    					</li>
    				</ul>
    			</p>
    		</article>
        );
    }
}

class Propios extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trabajos: [
                {
                    nombre: "Pokedex",
                    url: "http://macs03.github.io/learn-angular/Public",
                },
                {
                    nombre: "Autoservicio de Lujo",
                    url: "http://autoserviciodelujo.com.ve/",
                },
                {
                    nombre: "LicoFinder",
                    url: "http://macs03.github.io/angular-beer/app/",
                }
            ]
        }
    }

    render(){
        return(
            <ul className="padding-lista lista-proyectos">
                {
                    this.state.trabajos.map((trabajo) => {
                        return(
                            <li>
                                <a href={trabajo.url} target="_blank">
                                    <i className="fa fa-cog fa-spin fa-2x"></i>
                                    <span>{trabajo.nombre}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

}

class Colaboraciones extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            trabajos: [
                {
                    nombre: "apploi.com",
                    url: "http://www.apploi.com",
                    feat: "InfoBC C.A",
                    urlFeat: "http://infobc.co"
                },
                {
                    nombre: "voyhoy.com",
                    url: "http://voyhoy.com",
                    feat: "InfoBC C.A",
                    urlFeat: "http://infobc.co"
                },
                {
                    nombre: "constitucionaldia.com.co",
                    url: "http://charrymosquera.com.co/",
                    feat: "InfoBC C.A",
                    urlFeat: "http://infobc.co"
                },
                {
                    nombre: "Naftalanja",
                    url: "http://mentesweb.com/naftalanja/public",
                    feat: "InfoBC C.A",
                    urlFeat: "http://infobc.co"
                }
            ]
        }
    }

    render(){
        return (
            <ul className="padding-lista lista-proyectos">
                {
                    this.state.trabajos.map((trabajo) => {
                        return(
                            <li>
                                <a href={trabajo.url} target="_blank">
                                    <i className="fa fa-cog fa-spin fa-2x"></i>
                                    <span>{trabajo.nombre} con <a href={trabajo.urlFeat}>{trabajo.feat}</a></span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }

}

class Trabajos extends React.Component{
    render(){
        return(
            <article id="trabajos" className="margin">
    			<h2>Trabajos Realizados</h2>
                <Propios />
    			<h2>Colaboraciones</h2>
                <Colaboraciones />
    		</article>
        );
    }
}

class Futuro extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            proyectos : [
                "Tienda Virtual",
                "adopta.me",
                "Monitoreo online",
                "App de egreso e ingresos",
                "Reserva tu cancha"
            ]
        }
    }

    render(){
        return(
            <article id="futuro" className="margin">
    			<h2>Futuros Proyectos</h2>
    			<ul className="padding-lista lista-proyectos">
                    {
                        this.state.proyectos.map((proyecto) => {
                            return(
                                <li>
                						<i className="fa fa-spinner fa-pulse fa-2x"></i>
                						<span>
                                            {proyecto}
                						</span>
                				</li>
                            )
                        })
                    }
    			</ul>
    		</article>
        );
    }
}

class Tecnologies extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            tecnologies : [
                {
                    name: "Html5",
                    porcent: 90
                },
                {
                    name: "CSS3",
                    porcent: 90
                },
                {
                    name: "JavaScript",
                    porcent: 70
                },
                {
                    name: "Responsive Design",
                    porcent: 93
                },
                {
                    name: "Python",
                    porcent: 75
                },
                {
                    name: "PHP",
                    porcent: 70
                },
                {
                    name: "Bases de Datos SQL",
                    porcent: 60
                },
                {
                    name: "Bases de Datos NoSQL",
                    porcent: 65
                },
                {
                    name: "Java",
                    porcent: 60
                },
                {
                    name: "Git",
                    porcent: 85
                },
                {
                    name: "Jquery",
                    porcent: 75
                },
                {
                    name: "Angular.js",
                    porcent: 70
                },
                {
                    name: "React.js",
                    porcent: 60
                },
                {
                    name: "Node.js",
                    porcent: 55
                },
                {
                    name: "Django",
                    porcent: 75
                },
                {
                    name: "Ionic",
                    porcent: 65
                },
                {
                    name: "Servidores y DevOps",
                    porcent: 60
                },
                {
                    name: "Redes",
                    porcent: 65
                },
                {
                    name: "Metodologias de Desarrollo",
                    porcent: 70
                }
            ]
        }
    }

    render(){
        return (
            <article id="tecnologies" className="margin">
    			<h2>Tecnologías</h2>

    			<ul className="padding-lista">
                    {
                        this.state.tecnologies.map((tecnology) => {
                            return(
                                <li>
                					{tecnology.name}
                					<div className="progress progress-striped active">
                					  <div className="progress-bar progress-bar-warning" role="progressbar"
                					       aria-valuenow={tecnology.porcent} aria-valuemin="0" aria-valuemax="100"
                					       style={{width:tecnology.porcent+'%'}}>
                					    <span className="sr-only">{tecnology.porcent} % completado (aviso)</span>
                					  </div>
                					</div>
                				</li>
                            )
                        })
                    }
    			</ul>
    		</article>
        );
    }
}

class FullInfo extends React.Component{
    render(){
        return(
            <div>
                <Formacion />
                <Trabajos />
                <Futuro />
                <Tecnologies />
            </div>
        );
    }
}

ReactDOM.render(
    <FullInfo />,
    document.getElementById('info')
);
