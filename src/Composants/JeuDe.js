import { Component } from "react";

class JeuDe extends Component {
    constructor(props) {
        super(props);
        this.state = {face:null, compteur:0, end:false}
    }
    jouer = () => {
        let facealea = Math.floor(Math.random()*6+1);
        this.setState({face:facealea, compteur:this.state.compteur+1})
        if (facealea == this.props.cache)
            this.setState({end:true})
    }
    init = () => {
        this.setState({face:null, compteur:0, end:false})
    }
    render() {
        return (
            <div>
                <img src={
                    this.state.face==null
                    ?"images/init.PNG"
                    :`images/face${this.state.face}.PNG`
                } />
                <h1>Jeu de Dé...</h1>
                <p>face : {this.state.face}</p>
                <p>Nombre d'essais : {this.state.compteur}</p>
                {
                    this.state.end
                    ?<div><p>Bravo! Vous avez trouvez face caché</p><button onClick={this.init}>Initialiser</button></div>
                    :<button onClick={this.jouer}>Jouer</button>
                }
            </div>
        )
    }
}
export default JeuDe;