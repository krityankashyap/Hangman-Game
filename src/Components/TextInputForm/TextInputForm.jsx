import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"

function TextInputForm({inputType , handleFormSubmit , handleTextInputChange , handleShowHideClick}){

return (
   <form onSubmit={handleFormSubmit}>
    <div>
        <TextInput 
           type={inputType}
           label = {"Enter your word or phase"}
           placeholder={"Enter your word or phase here ..."}
           onChangeHandler={handleTextInputChange}
        />
    </div>
    <div>
        <Button 
        styleType="warning"
        text={inputType == "password"?"Show":"Hide"}
        onClickHandler={handleShowHideClick}
        />
    </div>
    <div>
        <Button 
        style={"submit"}
        styleType={"primary"} 
        text={"Submit"}
        />
    </div>
   </form>
)

}
export default TextInputForm