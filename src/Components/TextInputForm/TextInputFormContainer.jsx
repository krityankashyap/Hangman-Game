import { useState } from "react";
import TextInputForm from "./TextInputForm";

function TextInputFormContainer(){
  
   const [InputType , setInputType] = useState('password') 

        function handleFormSubmit(event){
            event.preventDefault();
            console.log("Form Submitted")
        }
        function handleTextInputChange(event){
            console.log("Text Input Change")
            console.log(event.target.value)
        }
        function handleShowHideClick(){
            console.log("Show/Hide botton clicked")
            if(InputType=="password"){
                setInputType("text")
            } else{
                setInputType("password")
            }
         
        }
    return (
        <TextInputForm 
        inputType={InputType}
        handleFormSubmit={handleFormSubmit}
        handleTextInputChange={handleTextInputChange}
        handleShowHideClick={handleShowHideClick}
        />
    )

}
export default TextInputFormContainer