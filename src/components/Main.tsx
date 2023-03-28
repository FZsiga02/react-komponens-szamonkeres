import { Component } from "react";
import petrik from './petrik.jpg'

export default class Main extends Component {

    render() {
        return <div>
            <p>Üdvözöllek DJ Petrik weboldalán!</p>
            <br />
            <p>Válassz a fenti lehetőségek közül!</p>
            <img src={petrik} alt="petrik" />
        </div>
    }

}
