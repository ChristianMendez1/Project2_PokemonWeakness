import { typename } from "./Data"
import { Link } from "react-router-dom";

export default function Home() {
//map for types

const typenamemap = typename.map((element) => {
    const {name} = element;
    return(
        <Link to={`/type/${name}`}>
            <li class='typename'>{name.toUpperCase()}</li>
        </Link>
    )
})
return (
    <div id= 'homediv'>
        <div id='home'>
            {typenamemap}
        </div>
    </div>
)

}