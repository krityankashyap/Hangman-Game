import Button from "../Button/Button.jsx"
import TextInput from "../TextInput/TextInput.jsx"


function TextInputForm({inputType , handleFormSubmit , handleTextInputChange , handeShowHideClick}) {

   
  
 return (
      <form onSubmit={handleFormSubmit}>
        <div>
            <TextInput 
            type={inputType}
               label="Enter a word or phrase"
               placeholder="Enter a word or phrase here..."
               onChangeHandler={handleTextInputChange}

            />
        </div>
         <div>
            <Button 
              styleType = "warning"
              text = {inputType=='password'?"Show":"Hide"}
              onClickHandler={handeShowHideClick}
              

            
            />
        </div>
        
        <div>
            <Button 
             type="submit"
             styleType="primary"
             text="Submit"
            
            />
        </div>
      </form>
 )

}

export default TextInputForm;