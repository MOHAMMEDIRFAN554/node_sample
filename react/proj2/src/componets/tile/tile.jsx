import './tile.css'
function Tile(props){
    function handleIt(){
        props.dataHeader = "good morning"
    }
    return(
        <>
        <div className="tile">
            <h3>{props.dataHeader}</h3>
            <h2>{props.count}</h2>
            <button className='btn' onClick={props.parentFunction}>click</button>
        </div>
        </>
    )
}
export default Tile