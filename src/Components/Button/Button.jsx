import getStylingBotton from "../getStylingBotton";

function Button({text , onClickHandler , styleType="primary" , type="Button" }){

   
    return (
    <button
       onClick = {onClickHandler }
       type={type}
       className={`text-white ${getStylingBotton(styleType)} px-4px py-2px`}
       >
        {text}
    </button>
    )
}

export default Button;