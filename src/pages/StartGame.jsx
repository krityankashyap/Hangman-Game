import { Link } from "react-router-dom"
import TextInputContainer from "../Components/TextInputForm/TextInputFormContainer"

function StartGame(){

 return (
    <>
      <h1>Start Game</h1>
      <TextInputContainer />
      <Link to='/Play' className="text-blue-500">PlayGame</Link>
    </>
 )

}

export default StartGame