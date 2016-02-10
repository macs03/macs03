class Header extends React.Component {
    render(){
        return(
            <div className="fondo visible-xs">
    			<figure>
    				<img src="images/fondo.jpg" alt="macbook y blog de notas" className="img-responsive" />
    			</figure>
    			<div id="foto" className="avatar">
    				<figure>
    					<img src="images/foto_curriculum.png" title="Miguel Cárdenas" width="180" height="180" className="img-circle" />
    				</figure>
    			</div>
    		</div>
        );
    }
}

ReactDOM.render(
    <Header />,
    document.getElementById('header')
);
