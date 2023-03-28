import { Component } from "react";
import dj from './dj.jpg'

export default class Main extends Component {

    render() {
        return <div>
            <p>Üdvözöllek DJ Petrik weboldalán!</p>
            <br />
            <p>Válassz a fenti lehetőségek közül!</p>
            <img src={dj} alt="dj" />
        </div>
    }

}
