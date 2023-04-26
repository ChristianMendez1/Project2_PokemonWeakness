import pokemonlogo from '../Photos/pokemonlogo.png'
import { Link } from "react-router-dom";

export default function Nav(){
    return(
    <Link to="/">
        <h1 id='title'>
            <img id='pokemonlogo' src={pokemonlogo} />
            Type Chart
        </h1>
    </Link>
    )
}