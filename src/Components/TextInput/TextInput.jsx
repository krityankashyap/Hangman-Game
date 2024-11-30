function TextInput({type="text" , label , placeholder="Enter your input here"  , onChangeHandler}) {

  return (
    <label>
        <span className="text-gray-500">{label}</span>
        <input 
          type={type} 
          className="px-4px py-2px border border-black-700 rounded-md w-full" 
          placeholder={placeholder}
          onChange={onChangeHandler} 
         
           />

        
    </label>
  )
}

export default TextInput;