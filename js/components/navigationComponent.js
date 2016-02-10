class Navigation extends React.Component{
    render(){
        return(
            <ul className="center menu visible-xs">
    			<li><a href="#about" className="toplink">Acerca de mi</a></li>
    			<li><a href="#formacion" className="toplink">Formacion</a></li>
    			<li><a href="#trabajos" className="toplink">Trabajos</a></li>
    			<li><a href="#futuro" className="toplink">Proyectos</a></li>
    			<li><a href="#tecnologies" className="toplink">Tecnologias</a></li>
    			<li><a href="#contratame" className="toplink">Contratame</a></li>
    		</ul>
        );
    }
}

ReactDOM.render(
    < Navigation />,
    document.getElementById('navigation')
);
