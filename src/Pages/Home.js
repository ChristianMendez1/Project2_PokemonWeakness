import { typename } from "./Data"
import { Link } from "react-router-dom";
import pikachu from '../Photos/pikachu.png'
import dratini from '../Photos/dratini.png'
import umbreon from '../Photos/umbreon.png'
import caterpie from '../Photos/caterpie.png'
import bulbasaur from '../Photos/bulbasaur.png'
import chansey from '../Photos/chansey.png'
import charmander from '../Photos/charmander.png'
import clefairy from '../Photos/clefairy.png'
import squirtle from '../Photos/squirtle.png'
import melmetal from '../Photos/melmetal.png'
import arbok from '../Photos/arbok.png'
import diglett from '../Photos/diglett.png'
import onix from '../Photos/onix.png'
import eiscue from '../Photos/eiscue.png'
import abra from '../Photos/abra.png'
import machamp from '../Photos/machamp.png'
import dusknoir from '../Photos/dusknoir.png'
import corvisquire from '../Photos/corvisquire.png'


export default function Home() {
//map for types

typename.sort(function(a, b) {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

const typenamemap = typename.map((element) => {
    const {name} = element;
    return(
        <Link to={`/type/${name}`}>
            <img id='pokemonphotos' src={typepicture(name)} />
            <li class='typename' style={{backgroundColor: name ? typecolor(name) : 'gray'}}>{name.toUpperCase()}</li>
        </Link>
    )
})

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

function typepicture(type){
    if(type === 'ice'){
        return(eiscue)
    } 
    if(type === 'fire'){
        return(charmander)
    }
    if(type === 'poison'){
        return(arbok)
    }
    if(type === 'normal'){
        return(chansey)
    }
    if(type === 'water'){
        return(squirtle)
    }
    if(type === 'fairy'){
        return(clefairy)
    }
    if(type === 'rock'){
        return(onix)
    }
    if(type === 'ghost'){
        return(dusknoir)
    }
    if(type === 'grass'){
        return(bulbasaur)
    }
    if(type === 'electric'){
        return(pikachu)
    }
    if(type === 'psychic'){
        return(abra)
    }
    if(type === 'fighting'){
        return(machamp)
    }
    if(type === 'ground'){
        return(diglett)
    }
    if(type === 'dark'){
        return(umbreon)
    }
    if(type === 'flying'){
        return(corvisquire)
    }
    if(type === 'bug'){
        return(caterpie)
    }
    if(type === 'steel'){
        return(melmetal)
    }
    if(type === 'dragon'){
        return(dratini)
    }
  }



return (
    <div id= 'homediv' >
        <div>
            <p id='pokemoninst'>
                Click on a Pokemon type to see its strengths and weaknesses
            </p>
            <div id='home'>
                {typenamemap}
            </div>
        </div>
    </div>
)

}