class Footer extends React.Component{

    constructor(props){
        super(props);
        var currentDate = new Date();
        var year = currentDate.getUTCFullYear();
        this.state = {
            year: year
        }
    }

    render(){
        return(
            <div>
                <h3> Miguel A. Cárdenas S. <i className="fa fa-copyright"></i> {this.state.year}</h3>
        		<p>Ingeniero en Informatica</p>
                <p><small>Esta pagina, fue desarrollada con HTML5, CCS3, Stylus, Bootstrap y React.js</small></p>
            </div>
        );
    }
}

ReactDOM.render(
    <Footer/>,
    document.getElementById('footer')
);
