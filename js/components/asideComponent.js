class AsideImg extends React.Component{
    render(){
        return(
            <div id="foto" className="avatar2">
    			<figure>
    				<img src="images/foto_curriculum.png" title="Miguel Cárdenas" width="180" height="180" className="img-circle center-block" />
    			</figure>
    		</div>
        );
    }
}
class Aside extends React.Component {
    render(){
        return(
            <ul>
    			<a href="#about" className="toplink">
    				<li>Acerca de Mi</li>
    			</a>
    			<a href="#formacion" className="toplink">
    				<li>Formacion</li>
    			</a>
    			<a href="#trabajos" className="toplink">
    				<li>Trabajos</li>
    			</a>
    			<a href="#futuro" className="toplink">
    				<li>Futuros</li>
    			</a>
    			<a href="#tecnologies" className="toplink">
    				<li>Tecnologias</li>
    			</a>
    			<a href="#contratame" className="toplink">
    				<li>Contratame</li>
    			</a>
    		</ul>
        );
    }
}

class TotalAside extends React.Component {
    render(){
        return(
            <div>
                <AsideImg />
                <Aside />
            </div>
        );
    }
}

ReactDOM.render(
    <TotalAside />,
    document.getElementById('aside')
);
