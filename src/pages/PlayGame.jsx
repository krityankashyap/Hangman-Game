import { Link } from "react-router-dom"

function PlayGame() {


 return (
     <>
       <h1>Play Game</h1>
       <Link to='/start' className='text-green-300'>StartGame</Link>
     </>

 )

}

export default PlayGame