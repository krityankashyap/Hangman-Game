import { useState } from "react";
import TextInputForm from "./TextInputForm";
import { useNavigate } from "react-router-dom";



function TextInputContainer(){

    const [inputType , setInputType] = useState("password")
    const [value , setValue] = useState("")

    const navigate = useNavigate(); // useNavigate is a hook that returns a navigate function

    function handleFormSubmit(event){
        event.preventDefault();     {/** .preventDefault() stops the default behaviour of "form" */}
        console.log("Form submitted ",value)
       

        if(value){
            // if we want something valid then we go to the play page
       
          //  navigate(`/play/${value}`);  By path params
          // navigate(`/play?text=${value}`) By query params 
          navigate(`/play` ,{ state : {wordSelected : value}})
             

        }
    }

    function handleTextInputChange(event){
        console.log("Text input change")
        console.log(event.target.value)
        setValue(event.target.value);
    }
    function handeShowHideClick(){
        console.log("show button click" )
        if(inputType=='password'){
            setInputType("text")
        } else {
            setInputType("password")
        }
        console.log(inputType)
    }
    

    return (
    <TextInputForm 
       inputType={inputType}
       handleFormSubmit={handleFormSubmit}
       handleTextInputChange={handleTextInputChange} 
       handeShowHideClick={handeShowHideClick}  
    />
    )

}

export default TextInputContainer