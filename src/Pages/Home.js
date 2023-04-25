import { typename } from "./Data"
import { Link } from "react-router-dom";

export default function Home() {
//map for types

const typenamemap = typename.map((element) => {
    const {name} = element;
    return(
        <Link to={`/type/${name}`}>
            <li id='typename'>{name}</li>
        </Link>
    )
})
return (
    <div>
        <h1>
            Pokemon Type Strengths/Weakness
        </h1>
        {typenamemap}
    </div>
)

}