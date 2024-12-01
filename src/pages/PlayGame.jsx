import { Link, useLocation } from "react-router-dom"
import Maskedtext from "../Components/MaskedText/MaskedText";
import LetterButtons from "../Components/LettersButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../Components/Hangman/HangMan";

function PlayGame() {
 
  const {state} = useLocation()
  console.log(state.wordSelected )

  const [steps , setSteps] = useState(0);

  const [guessedLetters , setGuessedLetters] = useState([]);

  function HandleLetterClick(letters){
    if(state.wordSelected.toUpperCase().includes(letters)){
       console.log("correct")
    } else {
      console.log("wrong");
      setSteps(steps+1);
    }
     setGuessedLetters([...guessedLetters ,letters])
  }
 return (
     <>
       <h1>Play Game</h1>

       <Maskedtext text={state.wordSelected} guessedLetters={guessedLetters}/>
       <div>
   
       <LetterButtons text={state.wordSelected} guessedLetters={guessedLetters} onLetterClick={HandleLetterClick} />

       </div>
      <div>
        <HangMan steps={steps} />
      </div>

       <Link to='/start' className='text-green-300'>StartGame</Link>
     </>

 )

}
 
export default PlayGame;