class Contratame extends React.Component{
    render(){
        return(
            <div>
                <h2>Contratame</h2>
                <ul className="contra">
                    <li><a href="https://twitter.com/iMacs03" className="Twitter" target="_blank"></a></li>
                    <li><a href="https://www.facebook.com/MACS03" className="Facebook" target="_blank"></a></li>
                    <li><a href="https://plus.google.com/u/0/+MiguelAntonioCardenasSanchez/posts" className="Google" target="_blank"></a></li>
                    <li><a href="http://ve.linkedin.com/in/miguelcardenas03" className="Linkedin" target="_blank"></a></li>
                    <li><a href="https://github.com/macs03" className="Github" target="_blank"></a></li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    < Contratame />,
    document.getElementById('contratame')
);
