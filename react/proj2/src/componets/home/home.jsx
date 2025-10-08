import { useState } from "react"
import Tile from "../tile/tile"
function Home(){
    const [header,setHeader] = useState('Welcome')
    const [count, setCount] = useState(0)

    function changeHeader(){
        setHeader("bye")

    }

    function AddNum(){
        setCount(count +1)
    }
    return(
        <>
        <h3>{header}</h3>
        <button onClick={changeHeader}>Change header</button>
        <br />
        <br />
        <Tile count={count} parentFunction={AddNum} dataHeader={header}></Tile>
        
        </>
    )
}
export default Home