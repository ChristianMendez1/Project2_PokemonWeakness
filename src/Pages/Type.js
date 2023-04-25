import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"

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

    return(
        <div>
            {type && type.damage_relations.double_damage_from[0].name}
        </div>
    )
}