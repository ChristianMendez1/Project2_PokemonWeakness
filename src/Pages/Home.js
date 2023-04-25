import { typename } from "./Data"
import { Link } from "react-router-dom";

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


return (
    <div id= 'homediv' >
        <div id='home'>
            {typenamemap}
        </div>
    </div>
)

}