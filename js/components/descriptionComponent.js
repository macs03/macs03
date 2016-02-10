class Description extends React.Component{
    render(){
        return(
            <div>
                <h2>Acerca de Mi</h2>
        		<p>
        			Aspirante al título de Ingeniero en Informática acostumbrado a trabajar bajo presión con un tiempo de entrega de proyectos establecido, capaz de trabajar en equipo, dedicado a la resolución de problemas en diferentes campos de la Ingeniería informática con conocimientos básicos y fuertes en programación orientada a objetos en diferentes lenguajes de programación, diseño y configuración de redes, manejo y administración de base de datos, interesado en ampliar conocimientos en redes y comunicaciones, seguridad informática así como en el desarrollo de aplicaciones web y aplicaciones móviles con manejo de bases de datos y perfeccionar el manejo de otros idiomas.
        		</p>
            </div>
        );
    }
}

ReactDOM.render(
    < Description />,
    document.getElementById('description')
);
