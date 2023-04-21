import { typename } from "./Data"
import { Link } from "react-router-dom";

export default function Home() {
//map for types

const typenamemap = typename.map((stock) => {
    const {type} = stock;
    return(
        <Link to={`/type/${type}`}>
            <li id='stockname'>{name}</li>
        </Link>
    )
})
return (
    <div id='dashboard'>
        {stocksymbolmap}
    </div>
)

}