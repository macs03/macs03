class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            profesion: "Ingeniero en Informatica",
            languaje: "Ingles"
        }
    }

    changeLanguaje(){
        if(this.state.languaje == "Ingles"){
            this.setState ( {
                profesion: "Coputer Science Engineer",
                languaje: "Spanish"
            });
        }else{
            this.setState ( {
                profesion: "Ingeniero en Informatica",
                languaje: "Ingles"
            });
        }
    }

    render(){
        return(
            <div>
                <h1>Miguel Cárdenas</h1>
                <p>
                    {this.state.profesion}
                </p>
                <p className="blog center-block">
                    <a href="http://macs03.wordpress.com" target="_blank">iMacs03</a>
                </p>
                <button id="ingles" className="pull-right" onClick={this.changeLanguaje.bind(this)}>
                    <span className="badge">{this.state.languaje}</span>
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    < About />,
    document.getElementById('about')
);
