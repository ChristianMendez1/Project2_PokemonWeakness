import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import DoubleDamageTo from "./components/DoubleDamageTo";
import DoubleDamageFrom from "./components/DoubleDamageFrom";
import HalfDamageFrom from "./components/HalfDamageFrom";
import HalfDamageTo from "./components/HalfDamageTo";
import NoDamageFrom from "./components/NoDamageFrom";
import NoDamageTo from "./components/NoDamageTo";

export default function Type(props) {
    //fetch and show info, maybe pass components
    const [type, setType] = useState(null); 
    const params = useParams()
    const name = params.name
    const apiKey = "69860af27f8400de88f48bbf826f6298";
    const url = `https://pokeapi.co/api/v2/type/${name}`

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setType(data)
            });
      }, []);

      //pass props
    return(
        <div>
            <h1>
                {name.toUpperCase()} 
            </h1>
            <Link to="/">
                    back
            </Link>
            <div>
                <h2>Super Effective Against:</h2>
                {type && type.damage_relations.double_damage_to.map(element => <DoubleDamageTo name={element.name}/>)}
            </div>
            <div>
                <h2>Weak To:</h2>
                {type && type.damage_relations.double_damage_from.map(element => <DoubleDamageFrom name={element.name}/>)}
            </div>
            <div>
                <h2>Resists:</h2>
                {type && type.damage_relations.half_damage_from.map(element => <HalfDamageFrom name={element.name}/>)}
            </div>
            <div>
                <h2>Resisted by:</h2>
                {type && type.damage_relations.half_damage_to.map(element => <HalfDamageTo name={element.name}/>)}
            </div>
            <div>
                <h2>Immune to:</h2>
                {type && type.damage_relations.no_damage_from.map(element => <NoDamageFrom name={element.name}/>)}
            </div>
            <div>
                <h2>No Damage to:</h2>
                {type && type.damage_relations.no_damage_to.map(element => <NoDamageTo name={element.name}/>)}
            </div>
        </div>
    )
}