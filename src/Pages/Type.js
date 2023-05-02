import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import DoubleDamageTo from "./components/DoubleDamageTo";
import DoubleDamageFrom from "./components/DoubleDamageFrom";
import HalfDamageFrom from "./components/HalfDamageFrom";
import HalfDamageTo from "./components/HalfDamageTo";
import NoDamageFrom from "./components/NoDamageFrom";
import NoDamageTo from "./components/NoDamageTo";
import { typename } from "./Data";

export default function Type(props) {
    //fetch and show info, maybe pass components
    const [type, setType] = useState(null); 

    const params = useParams()
    const name = params.name
    const url = `https://pokeapi.co/api/v2/type/${name}`

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setType(data)
            });
            console.log('fetch')
      }, [name]);

      function typecolor(type){
        if(type === 'ice'){
            return('lightblue')
        } 
        if(type === 'fire'){
            return('red')
        }
        if(type === 'poison'){
            return('purple')
        }
        if(type === 'normal'){
            return('gray')
        }
        if(type === 'water'){
            return('rgb(84, 110, 255)')
        }
        if(type === 'fairy'){
            return('pink')
        }
        if(type === 'rock'){
            return('rgb(160, 129, 45)')
        }
        if(type === 'ghost'){
            return('rebeccapurple')
        }
        if(type === 'grass'){
            return('green')
        }
        if(type === 'electric'){
            return('rgba(255, 208, 0, 0.966)')
        }
        if(type === 'psychic'){
            return('rgb(253, 71, 132)')
        }
        if(type === 'fighting'){
            return('darkred')
        }
        if(type === 'ground'){
            return('burlywood')
        }
        if(type === 'dark'){
            return('rgb(46, 36, 29)')
        }
        if(type === 'flying'){
            return('rgb(173, 108, 206)')
        }
        if(type === 'bug'){
            return('rgb(94, 165, 94)')
        }
        if(type === 'lightgreen'){
            return('red')
        }
        if(type === 'steel'){
            return('lightgray')
        }
        if(type === 'dragon'){
            return('darkorchid')
        }
      }

      window.scrollTo(0,0);

    return(
        <div id='typedivs'>
            <p id='pokemoninst'>
                Information about the {name.toUpperCase()} type. Click above to go back.
            </p>
            <div id='row'>
                <div class='column'>
                    <div class='typediv'>
                        <h2 class='abovedescription'>Type</h2>
                        <p class='typename2' style={{backgroundColor: name ? typecolor(name) : 'gray'}}>
                            {name.toUpperCase()} 
                        </p>
                    </div>
                    <div class='typediv'>
                        <h2 class='abovedescription'>{name.toUpperCase()} is Strong Against</h2>
                        <p class='description'>*you deal double damage against...*</p>
                        {type && type.damage_relations.double_damage_to.map(element => 
                            <div class='typename2' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                                <Link to={`/type/${element.name}`}>
                                    <DoubleDamageTo name={element.name.toUpperCase()}/>
                                </Link>
                            </div>)
                        }
                    </div>
                    <div class='typediv'>
                        <h2 class='abovedescription'>Weak To</h2>
                        <p class='description'>*you take double damage from...*</p>
                        {type && type.damage_relations.double_damage_from.map(element => 
                            <div class='typename2' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                                <Link to={`/type/${element.name}`}>
                                    <DoubleDamageFrom name={element.name.toUpperCase()}/>
                                </Link>
                            </div>)
                        }
                    </div>
                </div>
                <div class='column'>
                    <div class='typediv'>
                        <h2 class='abovedescription'>Resists</h2>
                        <p class='description'>*you take half damage from...*</p>
                        {type && type.damage_relations.half_damage_from.map(element => 
                            <div class='typename2' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                                <Link to={`/type/${element.name}`}>
                                    <HalfDamageFrom name={element.name.toUpperCase()}/>
                                </Link>
                            </div>)
                        }
                    </div>
                    <div class='typediv'>
                        <h2 class='abovedescription'>Resisted by</h2>
                        <p class='description'>*you do half damage to...*</p>
                        {type && type.damage_relations.half_damage_to.map(element => 
                            <div class='typename2' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                                <Link to={`/type/${element.name}`}>
                                    <HalfDamageTo name={element.name.toUpperCase()}/>
                                </Link>
                            </div>)
                        }
                    </div>          
                    <div class='typediv'>
                        <h2 class='abovedescription'>Immune to</h2>
                        <p class='description'>*you take no damage from...*</p>
                        {type && type.damage_relations.no_damage_from.map(element => 
                            <div class='typename2' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                                <Link to={`/type/${element.name}`}>
                                    <NoDamageFrom name={element.name.toUpperCase()}/>
                                </Link>
                            </div>)
                        }
                    </div>
                    <div class='typediv'>
                        <h2 class='abovedescription'>No Damage to</h2>
                        <p class='description'>*you do no damage to...*</p>
                        {type && type.damage_relations.no_damage_to.map(element => 
                            <div class='typename2' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                                <Link to={`/type/${element.name}`}>
                                    <NoDamageTo name={element.name.toUpperCase()}/>
                                </Link>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
        
    )
}