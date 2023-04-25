import {useState, useEffect} from "react";
import {useParams} from "react-router-dom"
import { Link } from "react-router-dom";
import DoubleDamageTo from "./components/DoubleDamageTo";
import DoubleDamageFrom from "./components/DoubleDamageFrom";
import HalfDamageFrom from "./components/HalfDamageFrom";
import HalfDamageTo from "./components/HalfDamageTo";
import NoDamageFrom from "./components/NoDamageFrom";
import NoDamageTo from "./components/NoDamageTo";
import styled from "styled-components"



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

    return(
        <div id='typedivs'>
            <p id='pokemoninst'>
                Information about the {name} type. Click above to go back.
            </p>
            <h2>Type:</h2>
            <p class='typename' style={{backgroundColor: name ? typecolor(name) : 'gray'}}>
                {name.toUpperCase()} 
            </p>
            <h2>Super Effective Against:</h2>
            <p>*you deal double damage against...*</p>
            <div class='typediv'>
                {type && type.damage_relations.double_damage_to.map(element => 
                    <div class='typename' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                        <DoubleDamageTo name={element.name.toUpperCase()}/>
                    </div>)}
            </div>
            <h2>Weak To:</h2>
            <p>*you take double damage from...*</p>
            <div class='typediv'>
                {type && type.damage_relations.double_damage_from.map(element => 
                    <div class='typename' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                        <DoubleDamageFrom name={element.name.toUpperCase()}/>
                    </div>)}
            </div>
            <h2>Resists:</h2>
            <p>*you take half damage from...*</p>
            <div class='typediv'>
                {type && type.damage_relations.half_damage_from.map(element => 
                    <div class='typename' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                        <HalfDamageFrom name={element.name.toUpperCase()}/>
                    </div>)}
            </div>
            <h2>Resisted by:</h2>
            <p>*you do half damage to...*</p>
            <div class='typediv'>
                {type && type.damage_relations.half_damage_to.map(element => 
                    <div class='typename' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                        <HalfDamageTo name={element.name.toUpperCase()}/>
                    </div>)}
            </div>
            <h2>Immune to:</h2>
            <p>*you take no damage from...*</p>
            <div class='typediv'>
                {type && type.damage_relations.no_damage_from.map(element => 
                    <div class='typename' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                        <NoDamageFrom name={element.name.toUpperCase()}/>
                    </div>)}
            </div>
            <h2>No Damage to:</h2>
            <p>*you do no damage to...*</p>
            <div class='typediv'>
                {type && type.damage_relations.no_damage_to.map(element => 
                    <div class='typename' style={{backgroundColor: element.name ? typecolor(element.name) : 'gray'}}>
                        <NoDamageTo name={element.name.toUpperCase()}/>
                    </div>)}
            </div>
        </div>
    )
}